import { Formik, Form, Field, ErrorMessage } from "formik";
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

const MinifiedFormikPage = () => {
  const onSubmit = (values: IValues): void => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div>
        <h1>Formik Page</h1>
        <div>
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div className="form-control">
              <label htmlFor="name">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default MinifiedFormikPage;
