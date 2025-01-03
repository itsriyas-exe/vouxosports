import React, { useState } from 'react';
import '../styles/auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'; // Import Framer Motion
import { loginAPI, registerAPI } from '../services/allAPI';

function Auth({ register }) {
  
  const [userDetails,setUserDetails]=useState({
    username:"",
    email:"",
    password:""
  })

  //navigate
  const navigate = useNavigate();

  // registerAPI calling
  const handleRegister=async()=>{
    console.log(userDetails);

    // Destructuring the keys of userDetails
    const {username,email,password}=userDetails
    if(!username || !email || !password){
      toast.warn('Please fill the form', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      try{
        // API Fetching
        const response= await registerAPI(userDetails)
        console.log(response)
        if(response.status==200){
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(()=>{
              navigate('/home')
            }, 4000)
        }
        else{
          toast.error(response.response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      }
      catch(err){
        console.log("Error Occured"+err);
        
      }
    }
    
  }

  // LoginAPI calling
const handleLogin= async()=>{
  // Destructuring email and password
  const {email,password}=userDetails
    if( !email || !password){
      toast.warn('Please fill the form', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      try{
        const response= await loginAPI(userDetails)
        console.log(response);
        if(response.status==200){
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(()=>{
              navigate('/home')
            }, 4000)
            sessionStorage.setItem("username",response.data.currentUser.username)
            sessionStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        
      }
      catch{
        toast.error("Server Error", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
  
  
}



  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="auth-container container-fluid"
      initial="hidden"
      animate="visible"
    >
      <div className="row align-items-center justify-content-center">
        {/* Image Section */}
        <motion.div
          className="col-lg-6 col-md-6 col-sm-12 text-center mb-4"
          variants={slideIn}
        >
          <img
            src="src/assets/dataset-card.png"
            alt="Registration"
            className="auth-image"
          />
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="formsection col-lg-6 col-md-6 col-sm-12 text-center"
          variants={fadeIn}
        >
          <h2 className="txthead mb-3">VouxoSports</h2>
          <h5 className="mb-3 text-white">Sign {register ? 'Up' : 'In'}</h5>

          {/* Conditional Input for Username */}
          {register && (
            <input onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}
              type="text"
              placeholder="Username"
              className="form-control mb-3 mx-auto w-75"
            />
          )}
          <input onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
            type="email"
            placeholder="Email ID"
            className="form-control mb-3 mx-auto w-75"
          />
          <input onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
            type="password"
            placeholder="Password"
            className="form-control mb-3 mx-auto w-75"
          />

          {/* Conditional Buttons and Links */}
          {register ? (
            <div>
                <Button onClick={handleRegister} className="mb-2" variant="outline-warning">
                  Sign Up
                </Button>
              <p>
                Already Registered?{' '}
                <Link to="/login" className="text-decoration-none">
                  Login Now
                </Link>
              </p>
            </div>
          ) : (
            <div>
              <Button
                onClick={handleLogin}
                variant="outline-success"
                className="mb-2"
              >
                Sign In
              </Button>
              <p className="text-danger">Forgot password?</p>
              <p>
                New here?{' '}
                <Link to="/register" className="text-decoration-none">
                  Register Now
                </Link>
              </p>
            </div>
          )}
          <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Auth;
