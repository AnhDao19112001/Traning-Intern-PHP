import { useEffect, useState } from "react"
import * as userService from "../service/UserService";
import { NavLink,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BiLogOutCircle, BiUserCircle} from "react-icons/bi";
const Header = ({inputSearch,onInputChange}) => {
    const[JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [userName,setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [nameTodo, setNameTodo] = useState("");
    const navigate = useNavigate()
    const getUserName = async () => {
        const result = userService.infoAppUserByJwtToken();
        setUserName(result);
    }
    const getUserId = async () => {
        const isLoggedIn = userService.infoAppUserByJwtToken();
        if (isLoggedIn) {
            const id = await userService.getIdByUserName(isLoggedIn.sub);
            setUserId(id.data);
        }
    }
    useEffect(() => {
        getUserName();
        getUserId()
    },[])
    const handleInputChange = (event) => {
        setNameTodo(event.target.value);
    }
    const handleTodo = (nameTodo) => {
        navigate(`/`);
    }
    const handleSearch = (event) => {
        event.preventDefault();
        handleTodo(nameTodo)
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
                        <NavLink className="navbar-brand mt-2 mt-lg-0" to={`/`}>
                            Todo
                        </NavLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>
                                    Trang chủ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right col-lg-6 d-flex align-items-center justify-content-end">
                        <form className="header-search-form for-des" style={{paddingRight: "5px"}}>
                            <input
                                type="search"
                                id="form-input-home"
                                className="form-input m-0"
                                placeholder="Tìm kiếm..."
                                value={inputSearch}
                                onChange={(event) => {
                                    handleInputChange(event);
                                    onInputChange(event);
                                }}
                            />
                            <button type="submit" onClick={(e) => handleSearch(e)}>
                            <CiSearch/>
                            </button>
                        </form>

                        <a href="#" className="user">
                            <img
                                src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                                alt="user-img"
                                className="user-img"
                            />
                            {!userName ? (
                                <Link to="/login">
                                    <span className="user-info">Đăng nhập</span>
                                </Link>
                            ) : (
                                <span className="user-info" style={{ overflow: "hidden" }}>
                      {userName.sub}
                    </span>
                            )}

                            <div className="user-dropdown-list">
                                {JwtToken ? (
                                    <>
                                        <Link
                                            to={`/findId/${userId}`}
                                            className="user-dropdown-item"
                                        >
                                            <BiUserCircle className="me-3 ms-0" size={25} />
                                            <div className="dropdown-text">Thông tin</div>
                                        </Link>
                                        <Link className="user-dropdown-item">
                                            <BiLogOutCircle className="me-3 ms-0" size={25} />
                                            <div
                                                className="dropdown-text"
                                                // onClick={() => {
                                                //     handleLogout();
                                                // }}
                                            >
                                                Đăng xuất
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