import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const [error,setError]=useState("");
    const {signIn,setUser} = use(AuthContext)
    const location =useLocation();
    const navigate = useNavigate();
    const handleLogin =(e)=>{
       e.preventDefault();
       console.log(e.target)
       const form = e.target;
        const email = form.email.value;
          const password = form.password.value;
          console.log(email,password) 
          signIn(email,password)
          .then(result=>{
            const user = result.user;
            console.log(user)
            navigate (`${location.state? location.state :'/'}`)
           
            
          } )
          .catch((error) => {
            const errorcode = error.code ;
            // const errorMessage = error.message;
            //  alert(errorMessage)
            setError(errorcode);
    });
    };
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-400 text-xs'>{error}</p>
          }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='mt-3 font-semibold text-center'>Don't have account? <Link to='/auth/register' className='text-blue-600'>Register</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;