import { useNavigate } from "react-router-dom";
import * as userService from "../service/UserService"
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
            passwordConfirmation: ""
         }} 
         validationSchema={yup.object({
            email: yup.string()
            .required("Không được để trống email").max(250),
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
            console.log(values);
            registerUser(values, setErrors)
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
                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                        <p className="text-white-50 mb-5">
                            Please enter your login and password!
                        </p>
                    <div data-mdb-input-init=""
                        className="form-outline form-white mb-4">
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                    </div>
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
                            id="password"
                            className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                        <Field
                            name="password_confirmation"
                            type="password"
                            id="typePasswordX"
                            className="form-control form-control-lg"/>
                        <div style={{height: 20}}>
                            <ErrorMessage name="password_confirmation" component="small"
                                className="text-danger"/>
                        </div>
                            <label className="form-label" htmlFor="typePasswordX">
                                Nhập lại mật khẩu <span className="text-danger">*</span>
                            </label>
                        </div>
                        <button
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit">
                            Register
                        </button>
                    </div>
                    <div>
                    <p className="mb-0">
                        Do you already have an account?{" "}
                        <Link to={`/login`} className="text-white-50 fw-bold">
                            Signin
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
export default Register;