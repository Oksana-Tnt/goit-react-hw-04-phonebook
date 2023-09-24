import { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const FormContact = ({ closeModal, onSubmit }) => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = ({ target }) => {
    setName(target.value);
    setNumber(target.value);
  };



  return (
    <form className="row g-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Number
        </label>
        <input
          name="number"
          type="tel"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="number"
          // onChange={handleChange}
          // value={number}
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary mb-3">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default FormContact;
