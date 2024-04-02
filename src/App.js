import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/loginPage';
import StudentList from './Pages/studentList';
import ProtectedRoute from './Components/protectedRoute';
import AddStudent from './Pages/addStudent';
import StudentProfile from './Pages/StudentProfile';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  console.log(isLoggedIn, role)

  useEffect(() => {
    console.log("sssssssssssssss")

    if (localStorage.getItem("auth_token")) {
      console.log("bbbbbbbbbbbbbbbbb")
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
          setRole(user.role);
        })
        .catch(error => {
          console.error('Error:', error);
          setIsLoggedIn(false)
        });
    }
  }, [isLoggedIn])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginPage/>}/>
        <Route path={"/studentList"} element={<ProtectedRoute isAllowed={isLoggedIn && (role === 'SUPER_ADMIN')} role isLoggedIn><StudentList /></ProtectedRoute>}/>
        <Route path={"/addStudent"} element={<ProtectedRoute isAllowed={isLoggedIn && (role === 'SUPER_ADMIN')} role isLoggedIn><AddStudent /></ProtectedRoute>}/>
        <Route path={"/studentProfile/:id"} element={<ProtectedRoute isAllowed={isLoggedIn && (role === 'SUPER_ADMIN')} role isLoggedIn><StudentProfile /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
