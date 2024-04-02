import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import axios from 'axios';
import '../App.css';

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const url = window.location.href;
    const splitted = url.split("/");
    const userId = splitted[splitted.length-1]

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization": "Bearer " + localStorage.getItem("auth_token"),
      }
    };

    console.log(userId)
    axios.get('http://localhost:8080/student/id/' + userId, axiosConfig)
      .then(response => {
        console.log(response.data);
        setStudent(response.data)
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Student not exist');
      });

  }, []);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Header/>
        <div className="student-profile-container">
            <div className="profile">
                <h2>Student Profile</h2>
                <div>
                <strong>Student Id:</strong> {student.studentId}
                </div>
                <div>
                <strong>Email:</strong> {student.email}
                </div>
                <div>
                <strong>First Name:</strong> {student.firstName}
                </div>
                <div>
                <strong>Middle Name:</strong> {student.middleName}
                </div>
                <div>
                <strong>Last Name:</strong> {student.lastName}
                </div>
                <div>
                <strong>Birthdate:</strong> {student.birthDate}
                </div>
                <div>
                <strong>Faculty:</strong> {student.faculty.facultyName}
                </div>
                <div>
                <strong>Department:</strong> {student.department.departmentName}
                </div>
                {/* Add more student details as needed */}
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default StudentProfile;