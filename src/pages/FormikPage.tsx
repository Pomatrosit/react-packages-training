import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IValues {
  name?: string;
  email?: string;
  password?: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Обязательное поле"),
  email: Yup.string().email("Некорректный email").required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
});

const FormikPage = () => {
  const onSubmit = (values: IValues): void => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    setTimeout(() => {
      // Программно установить ошибку для одного поля
      // formik.setFieldTouched("name", true, false);
      // formik.setFieldError("name", "Required!");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Formik Page</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name && (
              <div className="form-error-message">{formik.errors.name}</div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email && (
              <div className="form-error-message">{formik.errors.email}</div>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
            />

            {formik.touched.password && formik.errors.password && (
              <div className="form-error-message">{formik.errors.password}</div>
            )}
          </div>

          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormikPage;
