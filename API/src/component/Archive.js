import { useEffect, useState } from "react";
import todoService from "../service/TodoService";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/archive.css';
import * as userService from "../service/UserService";
import Swal from "sweetalert2";
import Header from "./Header";
import { LuArchiveRestore } from "react-icons/lu";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function Archive() {
    const [typeStatus, setTypeStatus] = useState([]);
    const [archive, setArchive] = useState([]);
    const [todoObject, setTodoObject] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const getArchiveTodo = async () => {
      const jwtToken = localStorage.getItem("JWT");
      if(jwtToken){
        const result = await todoService.getArchive(jwtToken);
        setArchive(result);
      }
    }

    const toggleModal = () => setModal(!modal);
    const archiveTodoApp = (obj) => {
        setTodoObject(obj);
        toggleModal();
    }

    const toggleDropdown = (todo) => {
      setDropdownOpen(!dropdownOpen);
      setSelectedTodo(todo);
    }

    const handleDelete = async (id) => {
        try {
          const jwtToken = localStorage.getItem("JWT");
          if(jwtToken) {
            await todoService.restoreTodo(id,jwtToken);
            Swal.fire({
              title: `Restore success`,
              icon: "success"
            });
            const data = await todoService.getArchive(jwtToken)
            setArchive(data);
            toggleModal();
          }
        } catch (error) {
            console.log(error);
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
              <div className="h2 font-weight-bold">Archive List</div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Time</th>
                      <th scope="col">Description</th>
                      <th scope="col">Day</th>
                      <th scope="col">Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      archive.map((value,key) => (
                        <>
                        <tr key={key.id} className="bg-blue">
                          <td className="pt-3 mt-1">{value.name}</td>
                          <td className="pt-3">{value.time}</td>
                          <td className="pt-3">{value.description}</td>
                          <td className="pt-3">{value.day}</td>
                          <td>
                          <Button outline color="primary" className="btn btn-outline-modal" onClick={() => archiveTodoApp(value)}><LuArchiveRestore /> Archive</Button>
                          </td>
                        </tr>
                      </>
                      ))}
                  </tbody>
                  <NavLink to={`/home`} type="button" className="btn btn-outline-dark float-start mt-5">Go Home</NavLink>
                </table>
                <div>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Lưu trữ</ModalHeader>
                <ModalBody>
                    Do you want to Archive {todoObject.name} ?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Close</Button>
                    <Button color="danger" onClick={() => handleDelete(todoObject.id)}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
              </div>
            </div>
        </>
    )
}
export default Archive;