/*import React, { useState } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import '../App.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    axios.post('http://localhost:8080/login', { "login" :username, password })
      .then(response => {
        console.log(response.data);
        localStorage.setItem('auth_token', response.data.token);
        const user = jwtDecode(response.data.token)
        
        if (user.role && user.role === 'SUPER_ADMIN') {
          window.location = "/studentList"
        } else {
          window.location = "/studentProfile"
        }
        // 
        // onLogin(username);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Invalid username or password.');
      });
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Login</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
*/

import React, { useState } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import '../App.css';
import { Link } from 'react-router-dom';
import { Col, Image, Form, Container, Row , Button} from "react-bootstrap";
import { FaUser, FaMedal, FaChartBar,FaUserPlus,FaUsers,FaSignOutAlt,FaHome } from 'react-icons/fa';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    axios.post('http://localhost:8080/login', { "login" :username, password })
      .then(response => {
        console.log(response.data);
        localStorage.setItem('auth_token', response.data.token);
        const user = jwtDecode(response.data.token)
        
        if (user.role && user.role === 'SUPER_ADMIN') {
          window.location = "/studentList"
        } else {
          window.location = "/studentProfile"
        }
        // 
        // onLogin(username);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Invalid username or password.');
      });
  };

  return (
    <div>
     <header>SMS</header>
      <div class="main-container">
        <div class="col-1">
          <div class="flex">
            <h1><b>LOG IN</b></h1>
            <Image src="../logo.png" />
          </div>
          <div class="form">
          <Form >
           <div >
            <div >
              <br /> <br />
              <Form.Group controlId="formBasicUserName">
                <Form.Label><b>User Name</b></Form.Label><br/>
                 <div className="icon-input">
                  <FaEnvelope className="input-icon" />
                  <Form.Control type="text"  value={username} onChange={(e) => setUsername(e.target.value)} className="login-input" />
                   </div>
                   </Form.Group><br/>
                   <Form.Group controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label><br/>
                     <div className="icon-input">
                      <FaLock className="input-icon" />
                       <Form.Control type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
                       </div>
                    </Form.Group>
      
                      <br /> 
                      <center>
                       
                        <Button  onClick={handleLogin} variant="primary" size="lg" type="submit" className="login-button">Sign In</Button>
                        {error && <div className="error-message">{error}</div>}
                      
                        <br/><br/>
                     
                        <Link to="/signup" className="hover:text-black hover:underline">
                        <p className="text-black mb-5">Don't have an account? <b>Sign up</b></p>
                        </Link>

                      </center>
                    </div>
                  </div>
                </Form>
          </div>
        </div>
        <div class="col-2">
            <Image src="../loginImage.png" />
        </div>
      </div>
    <Footer/>
</div>

  );
};

export default LoginPage;
