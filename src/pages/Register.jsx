import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Loading from './Loading';
import Navbar from '../components/Navbar';

const Register = () => {
    let {showPassword,setShowPassword,setUser,createRegistration,error,setError,profileUpdata,loading,signInWithGoogle}=use(AuthContext);
    let navigate=useNavigate();
    let location=useLocation();
    // console.log(user);  
    

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
        navigate(`${location?.state ? location?.state : '/'}`)  
        setUser({...result?.user,displayName:name,photoURL:photo}); 
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

 let handleLoginWithGoogle=()=>{
        signInWithGoogle()
         .then(result=>{
            navigate(`${location?.state ? location?.state : '/'}`)
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

let handleShowingPassword=()=>{
    return setShowPassword(!showPassword);
}

if(loading){
      return <Loading></Loading>
    }

    return (
      <>
      <Navbar></Navbar>
        <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center text-2xl text-black font-bold'>Registration Now!</h2>
          <form onSubmit={handleSignup}>
        <fieldset className="fieldset">
            <label className="label">Your Name</label>
          <input type="text" name='name' className="input text-black" placeholder="Your Name" />
            <label className="label">Your Photo URL</label>
          <input type="text" name='photo' className="input text-black" placeholder="Photo URL" />
            <label className="label">Email</label>
          <input type="email" name='email' className="input text-black" placeholder="Email" />
          <label className="label">Password</label>
          <div className='relative'>
            <input type = {showPassword?"text":"password"} 
            name='password' className="input text-black" placeholder="Password" />
            <button onClick={handleShowingPassword} className='absolute top-4 right-7'>{showPassword ?<FaRegEyeSlash />:<FaRegEye />}</button>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
          </form>
           <button onClick={handleLoginWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        {
          error && <p className='text-red-700'>{error}</p>
        }
        <p className='mt-2 text-black'>Already have your account?please <Link to='/login' className='text-blue-600 underline'>Login.</Link></p>
      </div>
    </div>
        </div>
        </>
    );
};

export default Register;