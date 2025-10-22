import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
             <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
        <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
           <label className="label">Photo-URL</label>
          <input type="photo" className="input" placeholder="Photo-URL" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='mt-3 font-semibold text-center'>Already have an account? <Link to='/auth/login' className='text-blue-600'>Login</Link></p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;