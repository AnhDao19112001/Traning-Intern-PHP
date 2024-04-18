import { Field, Form, Formik, ErrorMessage } from "formik";
import "../../css/login.css";
import * as userService from "../../service/UserService"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import * as yup from 'yup';
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
         validationSchema={yup.object({
            email: yup.string()
            .required('Không để trống email!')
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'email sai định dạng!'),
            password: yup.string()
            .required('Vui lòng nhập mật khẩu')
            .min(8,'ít nhất 8 ký tự').max(50,'Không vượt quá 50 ký tự'),
         })}
         onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            handleLogin(values);
        }}>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid"
                        alt="Sample image"
                    />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <Form>
                    <h1 className="text-center mt-2">Login</h1>
                        <div className="divider d-flex align-items-center my-4">
                        
                        </div>
        
                        <div className="form-outline mb-1">
                        <Field
                            type="email"
                            name="email"
                            id="form3Example3"
                            className="form-control form-control-lg"
                            placeholder="Enter a valid email address"
                        />
                        <label className="form-label mx-2" htmlFor="form3Example3">
                            Email 
                        </label>
                        <div className="row">
                                            <div className="mx-2"
                                                style={{
                                                    height: "0.6rem",
                                                    marginLeft: "68%",
                                                    }}>
                                                <ErrorMessage className="text-danger" name="email"
                                                                component="small" />
                                                </div>
                                        </div>
                        </div>
                        
                        <div className="form-outline mb-1 mt-4">
                        <Field
                            type="password"
                            id="form3Example4"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="Enter password"
                        />
                        <label className="form-label mx-2" htmlFor="form3Example4">
                            Password
                        </label>
                        <div className="row">
                                            <div className="mx-2"
                                                style={{
                                                    height: "0.6rem",
                                                    marginLeft: "68%",
                                                    }}>
                                                <ErrorMessage className="text-danger" name="password"
                                                                component="small" />
                                                </div>
                                        </div>
                        </div>
                        <div className="text-center text-lg-start mt-2 pt-2">
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                        >
                            Login
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?{" "}
                            <Link to={`/register`} className="link-danger">
                                Sign Up
                            </Link>
                        </p>
                        </div>
                    </Form>
                    </div>
                </div>
                </div>
            </section>
        </Formik>
        </>
    )
}
export default Login;