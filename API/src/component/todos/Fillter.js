import { useEffect, useState } from "react";
import todoService from "../../service/TodoService";
import * as userService from "../../service/UserService"
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../layout/Header";
function Filter() {
    const [typeStatus, setTypeStatus] = useState([]);
    const [fillter, setFillter] = useState([]);
    const navigate = useNavigate();
    const getFillterTodo = async () => {
      const jwtToken = localStorage.getItem("JWT");
      if(jwtToken){
        const result = await todoService.getFillter(jwtToken);
        setFillter(result);
      }
  }

    const getTypeStatus = async () => {
        const result = await todoService.typeStatus();
        setTypeStatus(result);
    }

    useEffect(() => {
      const jwtToken = localStorage.getItem("JWT");
      if(jwtToken){
        getFillterTodo();
      } else if(!userService.infoAppUserByJwtToken(localStorage.getItem("JWT"))){
          Swal.fire("Vui lòng đăng nhập!", "", "warning");
          localStorage.setItem("tempURL", window.location.pathname);
          navigate(`/login`)
    }
        getTypeStatus();
    },[])

    return(
        <>
        <Header/>
        <div className="container rounded mt-5 bg-white p-md-5 ">
              <div className="h2 font-weight-bold">Done List</div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Time</th>
                      <th scope="col">Description</th>
                      <th scope="col">Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      fillter.map((value,key) => (
                        <>
                        <tr key={key.id} className="bg-blue">
                          <td className="pt-3 mt-1">{value.name}</td>
                          <td className="pt-3">{value.time}</td>
                          <td className="pt-3">{value.description}</td>
                          <td className="pt-3">{value.day}</td>
                        </tr>
                      </>
                      ))}
                  </tbody>
                  <NavLink to={`/home`} type="button" className="btn btn-outline-dark float-start mt-5">Go Home</NavLink>
                </table>
              </div>
            </div>
        </>
    )
}
export default Filter;