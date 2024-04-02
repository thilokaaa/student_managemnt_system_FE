import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization": "Bearer " + localStorage.getItem("auth_token"),
      }
    };

    axios.get('http://localhost:8080/student/get-all', axiosConfig)
      .then(response => {
        console.log(response.data);
        setStudents(response.data)
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Invalid username or password.');
      });

  }, []);

  const deleteStudent = (studentId) => {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization": "Bearer " + localStorage.getItem("auth_token"),
      }
    };

    axios.put(`http://localhost:8080/student/remove/${studentId}`,"",axiosConfig)
    
      .then(response => {
        console.log(response.data);
        setStudents(response.data)
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Invalid username or password.');
      });

  }

  return (
    <div>
        <Header />
        <div className='table-container'>
            <div style={{display: 'flex'}}>
                <div>
                    <h2>Student Details</h2>
                </div>
                <div>
                    <button className='add-student-btn'><a href="/addStudent">Add Student</a></button>
                </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Student Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birthdate</th>
                    <th>Faculty</th>
                    <th>Department</th>
                    <th>Profile</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                    <td>{student.studentId}</td>
                    <td>{student.email}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.birthDate}</td>
                    <td>{student.faculty.facultyName}</td>
                    <td>{student.department.departmentName}</td>
                    <th><button><a  href={`/studentProfile/${student.id}`}>Profile</a></button></th>
                    <th><button onClick={(id) => deleteStudent(student.id)}>Delete</button></th>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        <Footer />
    </div>
  );
};

export default StudentList;