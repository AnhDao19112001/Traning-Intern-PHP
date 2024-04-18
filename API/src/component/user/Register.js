import { useNavigate } from "react-router-dom";
import * as userService from "../../service/UserService"
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
function Register() {
    const navigate = useNavigate();
    const registerUser = async (users, setError) => {
        const cloneUser = {
            ...users,
        }
        try {
            await userService.registerUser(cloneUser);
            Swal.fire({
                icon: "success",
                title: "Quay về trang đăng nhập",
            })
            navigate("/login");
        } catch (err) {
            if (err.response.status === 403) {
                setError(err.response.data);
            } else {
                Swal.fire({
                    icon: "error",
                    title: err.response.data,
                })
            }
        }
    }
    return(
        <>
        <Formik initialValues={{ 
            email: "",
            password: "",
            password_confirmation: ""
         }} 
         validationSchema={yup.object({
            email: yup.string()
            .required("Không được để trống email").max(250)
            .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'email sai định dạng!'),
            name: yup.string()
            .required("Không để trống tên!")
            .max(250,"Không quá 250 ký tự")
            .min(6,"Ít nhất 6 ký tự"),
            password: yup.string()
            .required("Không được để trống mật khẩu!")
            .min(8, "Mật khẩu ít nhất 3 ký tự!")
            .max(50, "Mật khẩu phải ít hơn hoặc bằng 50 ký tự!"),
            password_confirmation: yup.string()
            .required("Không được để trống mật khẩu!")
            .min(8, "Mật khẩu ít nhất 3 ký tự!")
            .max(50, "Mật khẩu ít hơn hoặc bằng 50 ký tự!")
            .oneOf([yup.ref('password'), null], "Mật khẩu không trùng khớp!"),
         })}
         onSubmit={(values, {setSubmitting, setErrors}) => {
            setSubmitting(false);
            registerUser(values, setErrors)
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
                            <h1 className="text-center mt-2">Register</h1>
                                <div className="divider d-flex align-items-center my-4">
                                
                                </div>
                
                                <div className="row">
                                <div className="form-outline mb-1 col -6">
                                <Field
                                    type="email"
                                    name="email"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email"
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
                                <div className="form-outline mb-1 col -6">
                                <Field
                                    type="text"
                                    name="name"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid name"
                                />
                                <label className="form-label mx-2" htmlFor="form3Example3">
                                    Name 
                                </label>
                                <div className="row">
                                                    <div className="mx-2"
                                                        style={{
                                                            height: "0.6rem",
                                                            marginLeft: "68%",
                                                            }}>
                                                        <ErrorMessage className="text-danger" name="name"
                                                                        component="small" />
                                                        </div>
                                                </div>
                                </div>
                                </div>

                                <div className="row">
                                <div className="form-outline mb-1 mt-4 col-6">
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
                                <div className="form-outline mb-1 mt-4 col-6">
                                <Field
                                    type="password"
                                    id="form3Example4"
                                    name="password_confirmation"
                                    className="form-control form-control-lg"
                                    placeholder="confirmation"
                                />
                                <label className="form-label mx-2" htmlFor="form3Example4">
                                    Password Confirmation
                                </label>
                                <div className="row">
                                    <div className="mx-2"
                                        style={{
                                        height: "0.6rem",
                                        marginLeft: "68%",}}>
                                        <ErrorMessage className="text-danger" name="password_confirmation"
                                                    component="small" />
                                     </div>
                                </div>
                            </div>
                        </div>   
                        <div className="text-center text-lg-start mt-2 pt-2">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                                Register
                            </button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">
                                Don't have an account?{" "}
                                <Link to={`/login`} className="link-danger">
                                    Sign In
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
export default Register;