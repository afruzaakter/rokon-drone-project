import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import SocialDesign from './SocialDesign';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError]  = useState("");
 const [userInfo, setUserInfo]=useState({
     email: "",
     password:"",   

 })

 const [errors, setErrors] = useState({
     email:"",
     password:"",
     general: " ",
 })


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e) =>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value)
        if(validEmail){
            //  setEmail(e.target.value);
            setUserInfo({...userInfo, email: e.target.value});
            setErrors({...errors, email:" "});
        }
       else{
        // setError("Invalid email");
        setErrors({...errors, email: "Invalid email"});
        setUserInfo({...userInfo, email:" "});
       }
    //    setEmail(e.target.value);

    }
    
    useEffect(() =>{
         if(hookError){
             setErrors({...errors, general: hookError?.message});
         }
    })

  const handlePasswordChange = (e) =>{
      const passwordRegex = /.{6,}/
      const validPassword = passwordRegex.test(e.target.value);
     
    //   console.log(validPassword);
    if(validPassword){
        setUserInfo({...userInfo,password:e.target.value});
        setErrors({...errors, password:" "});
    }
    else{
        setErrors({...errors, password:"Minimum 6 charactors"})
        setUserInfo({...userInfo, password: ""})
    }
      
  }



  const handleLogin =(e) =>{
      e.preventDefault();
    signInWithEmailAndPassword(setUserInfo.email,setUserInfo.password);
    //   console.log(email, password);
  }

    return (
    
        <div className='login-container'>
            <div className='login-title'>LOGIN </div>
           <form className='login-form' onSubmit={handleLogin}>
               <input onChange={handleEmailChange} type="email"  placeholder='Your Email'/>

               {errors?.email && <p className='text-danger'>{errors.email}</p>}
               
               <input onChange={handlePasswordChange} type="password" placeholder='Password' />
               {errors?.password && <p className='text-danger'>{errors.password}</p>}
               <button>Login</button>
           </form>

     
          
           {hookError && <p className='text-danger'>{hookError?.message}</p>}

           <p className="redirect">
                New to Tech Geeks?{" "}
                <Link to="/signUp" className='redirect-span' >Create New Account</Link>
            </p>
           <SocialDesign></SocialDesign>
        </div>
    );
};

export default Login;