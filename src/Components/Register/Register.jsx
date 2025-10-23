import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const {createUser,setUser} =use(AuthContext)
    const handleRegister = (e) => {
       e.preventDefault();
       console.log(e.target)
       const form = e.target;
       const name = form.name.value;
        const email = form.email.value;
         const photo = form.photo.value;
          const password = form.password.value;
          console.log(email,name,photo,password)
          const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
          if(!regExp.test(password)){
            toast.error("Your password must be at least 6 characters long and contain at least one uppercase letter and at least one lowercase letter. Please ensure your password meets all these requirements before submitting.");
            return;
          }
          createUser(email,password)
          .then(result=>{
            const user = result.user;
            console.log(user)
            toast.success('SignUp Successfully')
            setUser(user)
            
          } )
          .catch((error) => {
            const errorMessage = error.message;
    alert(errorMessage)
    });
    };
    return (
             <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
        <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name"  required/>
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email"  required/>
           <label className="label">Photo-URL</label>
          <input name='photo' type="photo" className="input" placeholder="Photo-URL"  required />
          <label className="label">Password</label>
          <input  name='password' type="password" className="input" placeholder="Password"  required />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='mt-3 font-semibold text-center'>Already have an account? <Link to='/auth/login' className='text-blue-600'>Login</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>
    );
    

}

export default Register;