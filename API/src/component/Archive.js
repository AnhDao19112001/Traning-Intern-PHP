import { useEffect, useState } from "react";
import todoService from "../service/TodoService";
import { NavLink } from "react-router-dom";
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
        <table className="table table-hover container mt-5">
            <thead className="text-center">
              <tr>
                <th scope="col">Todo</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                archive.map((value, key) => (
                  <tr key={key.id} scope="row">
                    <td>{value.name}</td>
                    <td>{value.description}</td>
                    <td>{value.type_status?.type}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <NavLink to={`/`} type="button" className="btn btn-outline-dark float-start">Go Home</NavLink>
        </>
    )
}
export default Archive;