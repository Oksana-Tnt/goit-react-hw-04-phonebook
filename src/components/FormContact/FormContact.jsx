import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string, number } from 'yup';

const schema = object({
  name: string().required().min(6),
  number: number().required().min(7).positive().integer(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormContact = ({ addContact }) => {
  const handleSubmit = (value, { resetForm }) => {
    addContact(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className="row g-3">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <Field
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
          />
          <ErrorMessage name="name" />
          <br />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Number
          </label>
          <Field
            name="number"
            type="tel"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="number"
          />
          <ErrorMessage name="number" />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary mb-3">
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormContact;