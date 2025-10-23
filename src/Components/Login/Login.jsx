import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const [error,setError]=useState("");
    const {signIn,setUser,signInWihGoogle} = use(AuthContext)
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
            setError(errorcode);
    });
    };

     const handleGoogleSignIn = () =>{
          signInWihGoogle()
            .then(result => {
              console.log(result.user)
             navigate(location.state || '/')
            })
            .catch(error => {
               console.log(error)
            })
    }
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

        </fieldset>
      </form>
    <button onClick={handleGoogleSignIn} className="btn  btn-primary text-white border-[#e5e5e5]  m-6 mt-0 ">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
       
          <p className='mt-3 font-semibold text-center'>Don't have account? <Link to='/auth/register' className='text-blue-600'>Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;