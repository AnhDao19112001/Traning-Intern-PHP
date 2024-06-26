import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { CiSearch } from "react-icons/ci";
import todoService from "../../service/TodoService";
import Header from "../layout/Header";
import * as userService from "../../service/UserService"
import { BsThreeDots } from "react-icons/bs";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "../../css/search.css";
import "../../css/pagination.css";
import { Formik, Form, Field } from "formik";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Swal from "sweetalert2";
import { IoIosCreate } from "react-icons/io";
import { IoArchiveOutline } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import CreateTodoApp from "./CreateTodoApp";
import UpdateTodoApp from "./UpdateTodoApp"
function Home() {
    const [currentItems, setCurrentItems] = useState([]);
    const [findByName, setFindByName] = useState("")
    const [sortBy, setSortBy] = useState("id");
    const [sortOrder, setSortOrder] = useState("desc");
    const [todoList, setTodoList] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [todoObject, setTodoObject] = useState({});
    const [modal, setModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isCheckStatus, setIsCheckStatus] = useState(false);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUp, setSelectedUp] = useState(null);

    const toggleModalCreate = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleModalUpdate = () => {
        setIsOpen(!isOpen);
    }

    // --------------- Pagination --------------- //

    const itemsPerPage = 5;
    let stt = itemOffset;

    useEffect(() => {
        if (todoList) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(todoList.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(todoList.length / itemsPerPage));
            let firstPage = document.querySelector(".page-next");
            let lastPage = document.querySelector(".page-previous");
            if (firstPage != null && lastPage != null) {
                if (itemOffset === 0) {
                    if (endOffset >= todoList.length) {
                        firstPage.style.display = "none";
                        lastPage.style.display = "none";
                    } else {
                        firstPage.style.display = "none";
                        lastPage.style.display = "block";
                    }
                } else if (endOffset > todoList.length) {
                    firstPage.style.display = "block";
                    lastPage.style.display = "none";
                } else {
                    firstPage.style.display = "block";
                    lastPage.style.display = "block";
                }
            }
        }
    }, [itemOffset, itemsPerPage, todoList]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % todoList.length;
        setItemOffset(newOffset);
    };

    // --------------- Delete Todo --------------- //

    const toggleModal = () => setModal(!modal);

    const deleteTodoApp = (obj) => {
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
            if (jwtToken) {
                await todoService.deleteTodo(id, jwtToken);
                Swal.fire({
                    title: `Archive success`,
                    icon: "success"
                });
                const data = await todoService.search(findByName, sortBy, sortOrder, jwtToken);
                setTodoList(data);
                toggleModal();
            }
        } catch (error) {
            console.log(error);
        }
    }

    // --------------- Search and Sort and Show List Todo --------------- //

    useEffect(() => {
        const searchByName = async () => {
            try {
                const jwtToken = localStorage.getItem("JWT");
                if (jwtToken) {
                    const todoData = await todoService.search(findByName, sortBy, sortOrder, jwtToken);
                    setTodoList(todoData);
                }
            } catch (error) {
                console.log(error);
            }
        };
        const jwtToken = localStorage.getItem("JWT");
        if (jwtToken) {
            searchByName();
        } else if (!userService.infoAppUserByJwtToken(localStorage.getItem("JWT"))) {
            Swal.fire("Vui lòng đăng nhập!", "", "warning");
            localStorage.setItem("tempURL", window.location.pathname);
            navigate(`/login`)
        }
    }, [sortBy, sortOrder, findByName]);

    const handleSubmit = async (values, event) => {
        event.preventDefault();
        try {
            const result = await todoService.search(values.findByName, sortBy, sortOrder);
            setTodoList(result);
            setFindByName(values.findByName);
        } catch (error) {
            console.log(error);
        }
    };

    //--------------- Done / Undone status --------------- //

    const getStatus = async (id) => {
        try {
            setIsCheckStatus(!isCheckStatus);
            const jwtToken = localStorage.getItem("JWT");
            if (jwtToken) {
                const result = await todoService.changeStatusTodo(id, jwtToken);
                return result;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onAddTodo = async () => {
        try {
            const jwtToken = localStorage.getItem("JWT");
            if (jwtToken) {
                const data = await todoService.search(findByName, sortBy, sortOrder,jwtToken);
                setTodoList(data);
                toggleModalCreate();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const toggleDropdownUpdate = (todo) => {
        setIsOpen(!isOpen);
        setSelectedUp(todo);
    }

    const handleUpdate = async (id) => {
        try{
            const jwtToken = localStorage.getItem("JWT");
            if(jwtToken){
                await todoService.findById(id,jwtToken)
                const data = await todoService.search(findByName, sortBy, sortOrder,jwtToken);
                setTodoList(data);
                toggleDropdownUpdate()
            }
        }catch(error){
            console.log(error);
        }
    };


    return (
        <>
            <Header onInputChange={() => { }} />
            <div className="header-right mx-5 mt-4 mb-4 d-flex align-items-center justify-content-end">
                <Formik
                    initialValues={{ findByName: "" }}
                    onSubmit={(values) => { handleSubmit(values) }}>
                    <Form className="header-search-form for-des mx-3" style={{ paddingRight: "5px" }}>
                        <Field
                            type="findByName"
                            name="findByName"
                            id="form-input-home"
                            className="form-input m-0"
                            placeholder="Search by name ..." />
                        <button type="submit" >
                            <CiSearch />
                        </button>
                    </Form>
                </Formik>
                <div className="col-auto me-2">
                    <select className="form-select" onChange={(event) => setSortBy(event.target.value)}>
                        <option value="id" className="mb-2">Sorted by</option>
                        <hr />
                        <option value="name" className="mt-2">Name</option>
                        <option value="time">Time</option>
                        <option value="day">Day</option>
                    </select>
                </div>
                <div className="col-auto me-2">
                    <select className="form-select" onChange={(event) => setSortOrder(event.target.value)}>
                        <option value="desc">Decrease</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>
                <button to="#" className={"btn btn-outline-primary float-end"} style={{ marginRight: "85px" }} onClick={toggleModalCreate}>
                    <MdCreateNewFolder /> Add Todo
                </button>
            </div>

            <table className="table table-hover container mt-5">
                <thead className="text-center">
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Todo</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Function</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        currentItems.map((value, key) => (
                            <tr key={key.id} scope="row">
                                <th scope="row">{++stt}</th>
                                <td><NavLink to={`/get-by-id/${value.id}`}>{value.name}</NavLink></td>
                                <td>{value.description}</td>
                                <td>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="flexCheckDefault"
                                        onChange={() => getStatus(value.id)}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    </label>
                                </td>
                                <td>
                                    <Dropdown isOpen={selectedTodo === value && dropdownOpen} toggle={() => toggleDropdown(value)}>
                                        <DropdownToggle >
                                            <BsThreeDots />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <NavLink to="#" onClick={() => handleUpdate(value)} className={"btn btn-outline-warning mx-4"}><IoIosCreate /> Update</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Button outline color="danger" className="btn btn-outline-modal mx-4" onClick={() => deleteTodoApp(value)}><IoArchiveOutline /> Archive</Button>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-grid justify-content-center mt-2">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< "
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    nextLinkClassName="page-previous"
                    previousLinkClassName="page-next"
                    activeClassName="active"
                />
            </div>
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
            <div>
                <Modal isOpen={isModalOpen} toggle={toggleModalCreate}>
                    <ModalHeader toggle={toggleModalCreate}>Create Todo</ModalHeader>
                    <ModalBody>
                        <CreateTodoApp toggleModalCreate={toggleModalCreate} onAddTodo={onAddTodo} />
                    </ModalBody>
                </Modal>
            </div>
            <div>
            <Modal isOpen={isOpen} toggle={toggleModalUpdate}>
                <ModalHeader toggle={toggleModalUpdate}>Update Todo</ModalHeader>
                <ModalBody>
                    <UpdateTodoApp todo={selectedUp} />
                </ModalBody>
            </Modal>
            </div>
        </>
    )
}
export default Home;
