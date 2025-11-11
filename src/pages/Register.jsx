import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Loading from './Loading';

const Register = () => {
    let {showPassword,setShowPassword,setUser,createRegistration,error,setError,profileUpdata,loading}=use(AuthContext);
    let navigate=useNavigate();
    let location=useLocation();
    // console.log(user);  
    
    if(loading){
      return <Loading></Loading>
    }

let handleSignup=(e)=>{
    e.preventDefault();

    let email=e.target.email.value;
    let password=e.target.password.value;
    let name=e.target.name.value;
    let photo=e.target.photo.value
    setError('');

    let validPassword=/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if(!validPassword.test(password)){
     setError(' Must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long');
     return;
    }


    createRegistration(email,password)
    .then(result=>{
      profileUpdata({displayName:name,photoURL:photo})
      .then(()=>{
        setUser({...result?.user,displayName:name,photoURL:photo}); 
          navigate(`${location.state ? location.state : '/'}`)  
      })
      .catch(error=>{
        console.log(error);
        setUser(result?.user);
      });
     
    })
    .catch(error=>{
        setError(error?.message);
        
    });
}

let handleShowingPassword=()=>{
    return setShowPassword(!showPassword);
}

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-2xl font-bold'>Registration Now!</h2>
          <form onSubmit={handleSignup}>
        <fieldset className="fieldset">
            <label className="label">Your Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
            <label className="label">Your Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
            <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <div className='relative'>
            <input type = {showPassword?"text":"password"} 
            name='password' className="input" placeholder="Password" />
            <button onClick={handleShowingPassword} className='absolute top-4 right-7'>{showPassword ?<FaRegEyeSlash />:<FaRegEye />}</button>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        {
          error && <p className='text-red-700'>{error}</p>
        }
        <p className='mt-2'>Already have your account?please <Link to='/login' className='text-blue-600 underline'>Login.</Link></p>
          </form>
      </div>
    </div>
        </div>
    );
};

export default Register;