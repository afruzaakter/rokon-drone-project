import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialDesign from '../Login/SocialDesign';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');
    // const [error, setError]  = useState("");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const handleEmailChange = (e) =>{

    //     const emailRegex = /\S+@\S+\.\S+/;
    //     const validEmail = emailRegex.test(e.target.value)
    //     if(validEmail){
    //          setEmail(e.target.value);
    //     }
    //    else{
    //     setError("Invalid email");
    //    }
       setEmail(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();   
        createUserWithEmailAndPassword(email,password);
        console.log(email, password);

    }
    return (
        <div className='login-container'>
            <div className='login-title'>Sign Up</div>
            <form onSubmit={handleSubmit} className='login-form'>
                <input type="text" placeholder='Your Name' />
                <input onChange={handleEmailChange} type="text" placeholder='Your Email' />
                {/* {error && <p className='text-danger'>{error}</p>} */}
                <input onChange={handlePasswordChange} type="password" placeholder='Password' />
                <button>Submit</button>
            </form>
            
            <p className="redirect">
           Already have an account?{" "}
                <Link className='redirect-span' to="/login" >Login</Link>
            </p>
            <SocialDesign></SocialDesign>
        </div>
    );
};

export default SignUp;