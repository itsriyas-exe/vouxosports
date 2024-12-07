import React from 'react';
import '../styles/auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import Framer Motion

function Auth({ register }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in...');
  };

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
            <input
              type="text"
              placeholder="Username"
              className="form-control mb-3 mx-auto w-75"
            />
          )}
          <input
            type="email"
            placeholder="Email ID"
            className="form-control mb-3 mx-auto w-75"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3 mx-auto w-75"
          />

          {/* Conditional Buttons and Links */}
          {register ? (
            <div>
              <Link to={'/home'}>
                <Button className="mb-2" variant="outline-warning">
                  Sign Up
                </Button>
              </Link>
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
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Auth;
