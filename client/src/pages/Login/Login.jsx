import React, { useState } from 'react'
import './Login.css';

export default function Login() {
     
    const [form,setForm]=useState({email:'',password:''});
    const [msg,setMsg]=useState('');
     
    const handleChange=(e)=>{
       setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log("Logging in with:",form);
       setMsg("Login functionality will be connected soon.");
    }
  return (
    <div className='form-container'>
      <h2>Login to MERNHub</h2>
       <form className='login-form' onSubmit={handleSubmit}>
         <input 
         type="email"
         name="email"
         placeholder="email"
         onChange={handleChange} 
         required
         />

         <input
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChange}
          required
         />
         
         <button type='submit'>Login</button>
       </form>
       <p>{msg}</p>
    </div>
  )
}
