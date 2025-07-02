import React, { useState } from 'react'
import './Register.css';

export default function Register() {
   const [form,setForm]=useState({name:'',email:'',password:'',mobile:''});
   const [msg,setMsg]=useState('');

   const handleChange=(e)=>{
      setForm({...form,[e.target.name]:[e.target.value]});
   }

   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log("Registering with:",form);
     setMsg("Registration functionality will be connected soon.")
   }
 
  return (
    <div className='register'>
      <h2>Create Account on MERNHub</h2>
      <form  className="registerForm" onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        placeholder='Full Name'
        onChange={handleChange}
        required />
      
        <input 
        type="email"
        name="email"
        placeholder='email'
        onChange={handleChange}
        required />

        <input
          type="password"
          name="password"
          placeholder='password'
          onChange={handleChange}
          required
        />

      <input
        type="number"
        name="mob"
        placeholder='mobile number'
        onChange={handleChange}
        required
      />
      <button type='submit'>Register</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}
