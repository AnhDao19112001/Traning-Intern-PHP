import { useEffect, useState } from "react";
import todoService from "../service/TodoService";
import { NavLink } from "react-router-dom";
import Header from "./Header";
function Archive() {
    const [typeStatus, setTypeStatus] = useState([]);
    const [archive, setArchive] = useState([])
    const getArchiveTodo = async () => {
      const jwtToken = localStorage.getItem("JWT");
      if(jwtToken){
        const result = await todoService.getArchive(jwtToken);
        setArchive(result);
      }
    }

    const getTypeStatus = async () => {
        const result = await todoService.typeStatus();
        setTypeStatus(result);
    }

    useEffect(() => {
      const jwtToken = localStorage.getItem("JWT");
      if(jwtToken){
        getArchiveTodo();
      }
        getTypeStatus();
    },[])

    return(
        <>
        <Header/>
        <table className="table table-hover container mt-5">
            <thead className="text-center">
              <tr>
                <th scope="col">Todo</th>
                <th scope="col">Description</th>
                <th scope="col">Day</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                archive.map((value, key) => (
                  <tr key={key.id} scope="row">
                    <td>{value.name}</td>
                    <td>{value.description}</td>
                    <td>{value.day}</td>
                    <td>{value.time}</td>
                  </tr>
                ))
              }
            </tbody>
            <NavLink to={`/home`} type="button" className="btn btn-outline-dark float-start mt-5">Go Home</NavLink>
          </table>
        </>
    )
}
export default Archive;