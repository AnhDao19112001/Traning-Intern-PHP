import { useEffect, useState } from "react"
import * as userService from "../service/UserService";
import { NavLink,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle, BiUserCircle} from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineArchive } from "react-icons/md";
import Swal from 'sweetalert2';
const Header = ({inputSearch,onInputChange}) => {
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [nameTodo, setNameTodo] = useState("");
    const navigate = useNavigate();

useEffect(() => {
    const userInfo = userService.infoAppUserByJwtToken();
    if (userInfo) {
        setName(userInfo.name); 
    }
}, []);

const getUserId = async () => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
        const id = await userService.getIdByUserName(jwtToken);
        setUserId(id);
    }
}

useEffect(() => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
        getUserId();
    }
}, []);

const handleInputChange = (event) => {
    setNameTodo(event.target.value);
}

const handleTodo = () => {
    navigate(`/home`);
}

const handleSearch = (event) => {
    event.preventDefault();
    handleTodo(nameTodo);
}

const logout = () => {
    localStorage.removeItem("JWT");
    setJwtToken(undefined);
    setName(undefined);
    Swal.fire({
        title: 'Logout success!',
        icon: 'success'
    }).then(() => {
        navigate(`/`);
    });
}

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavLink className="navbar-brand mx-5 mt-2 mt-lg-0" to={`/`}>
                            <h3>Todo</h3>
                        </NavLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/home"}>
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right col-lg-6 d-flex align-items-center justify-content-end mx-4">

                        <a href="#" className="user">
                            <img
                                src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                                alt="user-img"
                                className="user-img"
                            />
                            {!name ? (
                                <Link to="/login">
                                    <span className="user-info">Login</span>
                                </Link>
                            ) : (
                                <span className="user-info" style={{ overflow: "hidden" }}>
                      {name}
                    </span>
                            )}

                            <div className="user-dropdown-list">
                                {JwtToken ? (
                                    <>
                                        <Link to={`/fillter`}
                                        className="user-dropdown-item">
                                            <GrStatusGood className="me-3 ms-0" size={25} />
                                            <div className="dropdown-text">Done list</div>
                                        </Link>

                                        <Link to={`/archive`}
                                        className="user-dropdown-item">
                                            <MdOutlineArchive className="me-3 ms-0" size={25} />
                                            <div className="dropdown-text">Archive</div>
                                        </Link>

                                        <Link className="user-dropdown-item">
                                            <BiLogOutCircle className="me-3 ms-0" size={25} />
                                            <div
                                                className="dropdown-text"
                                                onClick={() => {logout()}}>
                                                Logout
                                            </div>
                                        </Link>
                                    </>
                                ) : null}
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;