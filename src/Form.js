import React, { useEffect } from "react";
import './App.css';
import { useState } from "react";

function Form(){
    const [values, setValues ] = useState({
        firstname: '',
        lastname: '',
        cin: ''
      })
    
      const [data, setData] = useState(null)


      const [errors, setErrors] = useState({})
    
      const handleChanges = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name]:value})
      }
    
    
      const handleSubmit = (e) =>{
        e.preventDefault()
        const validationErrors = {}
        if(!values.firstname.trim()){
          validationErrors.firstname = "first name is required*"
        }
        
        if(!values.lastname.trim()){
          validationErrors.lastname = " last name is required*"
        }
    
        if(!values.cin.trim()){
          validationErrors.cin = " cin is required*"
        }
    
        setErrors(validationErrors)
    
        if(Object.keys(validationErrors).length === 0){
          alert("Form submitted successfuly")
        }
      };

      const ResetBtn = () =>{
        setValues({
            firstname: '',
            lastname: '',
            cin: ''
        })

        setErrors({});
      }

      // async function fetchData() {
      //   try {
      //     await fetch('/data.json')
      //       .then(response => response.json())
      //       .then(data => {
      //         setData(data)
      //     });
      //   } catch {
      //     console.log("NOT FOUND")
      //   }
      // }

      useEffect(  () => {
        // fetch('https://localhost:8000/usersdata')
        //   .then(res => {
        //     return res.json()
        //   })
        //   .then(data => {
        //     console.log(data)
        //   })
        

        
      });

    return(
        <div className="container">
        <h1>User Details</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor='firsname'>FirstName: </label>
            <input type='text' placeholder='Enter First Name'  name='firstname' onChange={(e) => handleChanges(e)}  value={values.firstname} />
            {errors.firstname && <span className='error-message'>{errors.firstname}</span>}


            <label htmlFor='lastname'>LastName: </label>
            <input type='text' placeholder='Enter Last Name ' name='lastname' onChange={(e) => handleChanges(e)} value={values.lastname} />
            {errors.lastname && <span className='error-message'>{errors.lastname}</span>}


            <label htmlFor='cin'>CIN: </label>
            <input type='text' placeholder='Enter CIN'  name='cin' onChange={(e) => handleChanges(e)}  value={values.cin} />
            {errors.cin && <span className='error-message'>{errors.cin}</span>}


            <button type='submit'>Submit</button>
            <button type='button' onClick={ResetBtn}>Reset</button>

            
        </form>
    </div>
    );
}


export default Form;