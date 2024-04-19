import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import todoService from "../../service/TodoService";
import * as userService from "../../service/UserService";
import * as yup from 'yup';
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const CreateTodoApp = ({ toggleModalCreate, onAddTodo }) => {
    const [typeStatus, setTypeStatus] = useState([]);
    const navigate = useNavigate();

    const getTypeStatus = async () => {
        const result = await todoService.typeStatus();
        setTypeStatus(result);
    }

    useEffect(() => {
        if (!userService.infoAppUserByJwtToken(localStorage.getItem("JWT"))) {
            Swal.fire("Vui lòng đăng nhập!", "", "warning");
            navigate(`/login`)
        };
        getTypeStatus();
    }, []);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const jwtToken = localStorage.getItem("JWT");
            if (jwtToken) {
                await todoService.createTodo(values, jwtToken);
                setSubmitting(false);
                Swal.fire({
                    title: 'Create success',
                    icon: 'success'
                });
                onAddTodo(values);
                toggleModalCreate();
            }
        } catch (error) {
            Swal.fire({
                title: 'Create fail',
                icon: "error"
            });
            setSubmitting(false);
        }
    }

    return (
        <Formik
            initialValues={{
                name: "",
                time: "",
                day: "",
                description: "",
                status_id: 4,
            }}
            validationSchema={yup.object({
                name: yup.string()
                    .matches(/^[\p{L}\p{Mn}\p{Mc}\s]+$/u, "Tên không chứa ký tự đặc biệt!")
                    .required("Không được để trống!").max(50, "Tên không được quá 50 ký tự!")
                    .min(2, "Tên phải dài hơn 2 ký tự"),
                time: yup.string()
                    .required("Tên không được để trống!").max(50, "Không quá 50 ký tự").min(2, "Phải dài hơn 2 ký tự!")
                    .matches(/^[0-9+:]+$/, "Không chứa ký tự đặc biệt!"),
                day: yup.string()
                    .required("Không được phép để trống!").max(50, "Không quá 50 ký tự").min(2, "Phải dài hơn 2 ký tự!")
                    .matches(/^[0-9+.]+$/, "Không chứa ký tự đặc biệt!"),
                description: yup.string()
                    .required("Không được để trống phần mô tả!"),
            })}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form accept="" className="shadow p-4 mb-5">
                    <div className="mb-3">
                        <label htmlFor="name">Name Todo</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                        />
                        <div className="mx-2" style={{ height: "0.6rem", marginLeft: "68%", marginBottom: "1.3rem" }}>
                            <ErrorMessage className="text-danger" name="name" component="small" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time">Time</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="time"
                            id="time"
                        />
                        <div className="mx-2" style={{ height: "0.6rem", marginLeft: "68%", marginBottom: "1.3rem" }}>
                            <ErrorMessage className="text-danger" name="time" component="small" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="day">Day</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="day"
                            id="day"
                        />
                        <div className="mx-2 mb-4" style={{ height: "0.6rem", marginLeft: "68%", marginBottom: "1.3rem" }}>
                            <ErrorMessage className="text-danger" name="day" component="small" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <Field
                            type="text"
                            className="form-control"
                            name="description"
                            id="description"
                        />
                        <div className="mx-2" style={{ height: "0.6rem", marginLeft: "68%", marginBottom: "1.3rem" }}>
                            <ErrorMessage className="text-danger" name="description" component="small" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status_id">Status</label>
                        <Field as="select" className="form-select" name="status_id">
                            <option value="" disabled>Select Status</option>
                            {typeStatus.map((value) => (
                                <option key={value.id} value={value.id}>
                                    {value.type}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <div className="mb-5">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-outline-primary col-1 float-end"
                            style={{ width: "auto" }}
                        >
                            {/* {isSubmitting ? 'Submitting...' : 'Submit'} */}
                            Save
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default CreateTodoApp;

