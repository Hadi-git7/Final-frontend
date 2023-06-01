import React, { useState } from 'react';
import './Login.css'
import Navbar from '../../Components/Navbar/Navbar';
import useToken from './useToken';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router';
import axios from 'axios'

async function loginUser(credentials) {
  return fetch('https://dravet-syndrome.onrender.com/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAdmin', data.isAdmin);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}



const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { setToken } = useToken();
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await loginUser({
        email,
        password,
        passwordConfirmation
      });
      setToken(response.token);
      localStorage.setItem('email', response.email);
      localStorage.setItem('token', response.token);
      localStorage.setItem('isAdmin', response.isAdmin);
      localStorage.setItem('loggedIn', 'true');
      toast.success('Logged in successfully!');
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Wrong Username or Password!!');
    }
  }

  const registerUser = async (userData) => {
    try {
      const response = await axios.post('https://dravet-syndrome.onrender.com/api/admin', userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAdmin', response.data.isAdmin);
      localStorage.setItem('loggedIn', 'true');
      toast.success('Registered and logged in successfully!');
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Registration failed!');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      passwordConfirmation
    };
    registerUser(userData);
  };


  if (isLoggedIn) {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) {
      return <Navigate to="/dashboard/" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  

  return (
    <>
    <Navbar />
    <div className={`login-container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email"  onChange={(e) => setEmail(e.target?.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target?.value)} />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={handleSubmit} />
           
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target?.value)}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target?.value)}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password Confirmation" onChange={(e) => setPasswordConfirmation(e.target?.value)}/>
            </div>
            <input type="submit" className="btn" value="Sign up" onClick={handleSignUp}  />
           
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
             Sign Up to be a part of our Dravet Syndrome Community!! Just Add your Email and Choose a password for yourself.
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
             If you're an admin , add your email and password to login and edit the Website!
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
