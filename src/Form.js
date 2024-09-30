import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function Form() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        cin: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!values.firstname.trim()) {
            validationErrors.firstname = "First name is required*";
        }

        if (!values.lastname.trim()) {
            validationErrors.lastname = "Last name is required*";
        }

        if (!values.cin.trim()) {
            validationErrors.cin = "CIN is required*";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            const users = JSON.parse(localStorage.getItem('usersdata')) || [];
            const newUser = { ...values };
            users.push(newUser);
            localStorage.setItem('usersdata', JSON.stringify(users));

            
            navigate('/users');
        }
    };

    const ResetBtn = () => {
        setValues({
            firstname: '',
            lastname: '',
            cin: ''
        });
        setErrors({});
    };

    return (
        <div className="container">
            <h1>User Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstname'>First Name: </label>
                <input type='text' name='firstname' onChange={handleChanges} value={values.firstname}  placeholder="Enter your first name"/>
                {errors.firstname && <span className='error-message'>{errors.firstname}</span>}

                <label htmlFor='lastname'>Last Name: </label>
                <input type='text' name='lastname' onChange={handleChanges} value={values.lastname} placeholder="Enter your last name" />
                {errors.lastname && <span className='error-message'>{errors.lastname}</span>}

                <label htmlFor='cin'>CIN: </label>
                <input type='text' name='cin' onChange={handleChanges} value={values.cin} placeholder="Enter your cin" />
                {errors.cin && <span className='error-message'>{errors.cin}</span>}

                <button type='submit'>Submit</button>
                <button type='button' onClick={ResetBtn}>Reset</button>
            </form>
        </div>
    );
}

export default Form;
