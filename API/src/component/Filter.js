import { useEffect, useState } from "react";
import todoService from "../service/TodoService";
function Filter() {
    const [typeStatus, setTypeStatus] = useState([]);
    const [archive, setArchive] = useState([])
    const getArchiveTodo = async () => {
        const result = await todoService.getArchive();
        setArchive(result);
    }

    const getTypeStatus = async () => {
        const result = await todoService.typeStatus();
        setTypeStatus(result);
    }

    useEffect(() => {
        getArchiveTodo();
        getTypeStatus();
    },[])

    return(
        <>
        <table className="table table-hover container mt-5">
            <thead className="text-center">
              <tr>
                <th scope="col">NO</th>
                <th scope="col">Todo</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                archive.map((value, key) => (
                  <tr key={key.id} scope="row">
                    {/* <th scope="row">{++stt}</th> */}
                    <td>{value.name}</td>
                    <td>{value.description}</td>
                    <td>
                        {
                            typeStatus.map(
                                (values) => values.id === parseInt(value.status_id)
                        )[0]?.type}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </>
    )
}
export default Filter;