import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'
import axios from 'axios';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem("auth_token")) {
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": "Bearer " + localStorage.getItem("auth_token"),
        }
      };
      
      axios.get('http://localhost:8080/isLogged', axiosConfig)
        .then(response => {
          setIsLoggedIn(true)
          const user = jwtDecode(localStorage.getItem("auth_token"))
        })
        .catch(error => {
          console.error('Error:', error);
          setIsLoggedIn(false)
        });
    }
  }, [isLoggedIn])

  function logout() {
    const user = jwtDecode(localStorage.getItem("auth_token"))
    const data = {
      userId: user.userId
    }
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Authorization": "Bearer " + localStorage.getItem("auth_token"),
      }
    };

    axios.post('http://localhost:8080/removeTokens', data, axiosConfig)
      .then(response => {
        console.log(response.data);
        localStorage.removeItem('auth_token');
        localStorage.removeItem('username');
        window.location = '/';
      })
      .catch(error => {
        setError(error.response.data.message);
    });
  }

  return (
    <header className='header-container'>
      <h1>Student Management System</h1>
      <div style={{textAlign:'right'}}>
        {isLoggedIn ? <button onClick={logout}>Logout</button> : ""}
      </div>
    </header>
  );
};

export default Header;