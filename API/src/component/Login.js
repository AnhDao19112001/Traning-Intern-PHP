import { Field, Form, Formik } from "formik";
import "../css/login.css";
import * as userService from "../service/UserService"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
function Login() {
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        try {
            const response = await userService.login(values);
            const { data } = response;
            const { token } = data; 
            userService.addJwtTokenToLocalStorage(token);

            const tempURL = localStorage.getItem("tempURL");
            localStorage.removeItem("tempURL");
            
            if (tempURL) {
                navigate(tempURL);
            } else {
                navigate(`/home`);
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: err.response.data.error
            });
            console.log(err);
        }
    }

    return(
        <>
        <Formik initialValues={{ 
            email: "",
            password: ""
         }}
         onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            handleLogin(values);
        }}>
            <Form>
            <section className=" gradient-custom">
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                    className="card bg-dark text-white"
                    style={{ borderRadius: "1rem" }}>
                    <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">
                            Please enter your login and password!
                        </p>
                    <div data-mdb-input-init=""
                        className="form-outline form-white mb-4">
                        <Field
                            type="email"
                            id="typeEmailX"
                            name="email"
                            className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                            Email
                        </label>
                        </div>
                        <div
                        data-mdb-input-init=""
                        className="form-outline form-white mb-4"
                        >
                        <Field
                            type="password"
                            name="password"
                            id="typePasswordX"
                            className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                            Password
                        </label>
                        </div>
                        <button
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit">
                            Login
                        </button>
                    </div>
                    <div>
                        <p className="mb-0">
                        Don't have an account?{" "}
                        <Link to={`/register`} className="text-white-50 fw-bold">
                            Sign Up
                        </Link>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </Form>
        </Formik>
        </>
    )
}
export default Login;