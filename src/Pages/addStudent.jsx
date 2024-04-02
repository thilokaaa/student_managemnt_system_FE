/*import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import axios from 'axios';
import '../App.css';

const AddStudent = () => {
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [personalDetails, setPersonalDetails] = useState({ studentId: '', firstName: '', middleName: '', lastName: '', birthDate: '', faculty: '', department:'' });
  const [faculties, setFaculties] = useState([])
  const [departments, setDepartments] = useState([]) 
  const [error, setError] = useState('') 

  const handleLoginDetailsChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
    console.log(personalDetails.faculty)
 
    if (name === 'faculty' && value !== "") {
        console.log(value, faculties)
        let fac = faculties.filter(faculty => faculty.id == value);
        console.log(fac)
        setDepartments(fac[0].departments);
    }
  };

  useEffect(() => {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization": "Bearer " + localStorage.getItem("auth_token"),
      }
    };

    axios.get('http://localhost:8080/faculty/get-all', axiosConfig)
      .then(response => {
        console.log(response.data);
        setFaculties(response.data)
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Invalid username or password.');
      });

  }, []);

  const handleSubmit = () => {

    if (personalDetails.studentId !== '' && personalDetails.email !== '' && loginDetails.password !== '' && personalDetails.firstName != ''
      && personalDetails.lastName !== '' && personalDetails.birthDate !== '' && personalDetails.faculty !== '' && personalDetails.department !== '') {

        const data = {
          studentId: personalDetails.studentId,
          email: loginDetails.email,
          password: loginDetails.password,
          firstName: personalDetails.firstName,
          middleName: personalDetails.middleName,
          lastName: personalDetails.lastName,
          birthDate: personalDetails.birthDate,
          facultyId: personalDetails.faculty,
          departmentId: personalDetails.department
        }
    
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
            }
          };
    
        axios.post('http://localhost:8080/student',data, axiosConfig)
          .then(response => {
            console.log(response.data);
            window.location = "/studentList"
          })
          .catch(error => {
            setError(error.response.data.message);
          });
        console.log('Login Details:', loginDetails);
        console.log('Personal Details:', personalDetails);

      } else {
        alert("Complete all fields")
      }
  };

  return (
    <div>
        <Header />
        <div className="add-student-container">
            <div style={{display: 'flex'}}>
                <div className="card">
                    <h2>Login Details</h2>

                    <div className="input-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={loginDetails.email} onChange={handleLoginDetailsChange} />
                    </div>

                    <div className="input-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={loginDetails.password} onChange={handleLoginDetailsChange} />
                    </div>

                </div>
                <div className="card">
                    <h2>Personal Details</h2>

                    <div style={{display: 'flex'}}>
                        <div className="input-group">
                            <label>Student Id:</label>
                            <input type="text" name="studentId" value={personalDetails.studentId} onChange={handlePersonalDetailsChange} />
                        </div>

                        <div className="input-group">
                            <label>Birthday:</label>
                            <input type="date" name="birthDate" value={personalDetails.birthDate} onChange={handlePersonalDetailsChange} />
                        </div>
                    </div>

                    <div style={{display:'flex'}}>
                        <div className="input-group">
                            <label>First Name:</label>
                            <input type="text" name="firstName" value={personalDetails.firstName} onChange={handlePersonalDetailsChange} />
                        </div>

                        <div className="input-group">
                            <label>Middle Name:</label>
                            <input type="text" name="middleName" value={personalDetails.middleName} onChange={handlePersonalDetailsChange} />
                        </div>

                        <div className="input-group">
                            <label>Last Name:</label>
                            <input style={{flex:1}} type="text" name="lastName" value={personalDetails.lastName} onChange={handlePersonalDetailsChange} />
                        </div>
                    </div>
                    
                    <div style={{display:'flex'}}>
                        <div className="input-group">
                        <label>Faculty:</label>
                        <select name="faculty" value={personalDetails.faculty} onChange={handlePersonalDetailsChange}>
                            <option value="">Select Faculty</option>
                                {faculties.map((faculty) => (
                                <option key={faculty.id} value={faculty.id}>{faculty.facultyName}</option>
                            ))}
                        </select>
                        </div>

                        <div className="input-group">
                        <label>Department:</label>
                        <select name="department" value={personalDetails.department} onChange={handlePersonalDetailsChange}>
                            <option value="">Select Department</option>
                                {departments.map((department) => (
                                <option key={department.id} value={department.id}>{department.departmentName}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{textAlign:'center'}}>
            <button onClick={handleSubmit} style={{alignContent: 'center'}}>Submit</button>
        </div>
        <Footer/>
    </div>
  );
};

export default AddStudent;

*/


import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import axios from 'axios';
import '../App.css';
import { Col, Image, Form, Container, Row , Button} from "react-bootstrap";

const AddStudent = () => {
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [personalDetails, setPersonalDetails] = useState({ studentId: '', firstName: '', middleName: '', lastName: '', birthDate: '', faculty: '', department:'' });
  const [faculties, setFaculties] = useState([])
  const [departments, setDepartments] = useState([]) 
  const [error, setError] = useState('') 

  const handleLoginDetailsChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
    console.log(personalDetails.faculty)
 
    if (name === 'faculty' && value !== "") {
        console.log(value, faculties)
        let fac = faculties.filter(faculty => faculty.id == value);
        console.log(fac)
        setDepartments(fac[0].departments);
    }
  };

  useEffect(() => {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization": "Bearer " + localStorage.getItem("auth_token"),
      }
    };

    axios.get('http://localhost:8080/faculty/get-all', axiosConfig)
      .then(response => {
        console.log(response.data);
        setFaculties(response.data)
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Invalid username or password.');
      });

  }, []);

  const handleSubmit = () => {

    if (personalDetails.studentId !== '' && personalDetails.email !== ''  && personalDetails.firstName != ''
      && personalDetails.lastName !== '' && personalDetails.birthDate !== '' && personalDetails.faculty !== '' && personalDetails.department !== '') {

        const data = {
          studentId: personalDetails.studentId,
          email: loginDetails.email,
          firstName: personalDetails.firstName,
          middleName: personalDetails.middleName,
          lastName: personalDetails.lastName,
          birthDate: personalDetails.birthDate,
          facultyId: personalDetails.faculty,
          departmentId: personalDetails.department
        }
    
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
            }
          };
    
        axios.post('http://localhost:8080/student',data, axiosConfig)
          .then(response => {
            console.log(response.data);
            window.location = "/studentList"
          })
          .catch(error => {
            setError(error.response.data.message);
          });
        console.log('Login Details:', loginDetails);
        console.log('Personal Details:', personalDetails);

      } else {
        alert("Complete all fields")
      }
  };

  return (

    <div>
    <header>SMS</header>
     <div class="main-container">
       <div class="col-1">
         <div class="flex">
           <h1><b>ADD STUDENTS</b></h1>
           <Image src="../logo.png" />
         </div>
         <div class="form">
         <Form >
          <div >
           <div >
             <br /> <br /> 
             <Form.Group controlId="formBasicStudentId">
               <Form.Label><b>Student Id</b></Form.Label><br/>
                 <Form.Control type="text"  name="studentId" value={personalDetails.studentId} onChange={handlePersonalDetailsChange} />
                  </Form.Group><br/>
                  <Form.Group controlId="formBasicEmail">
               <Form.Label><b>Email</b></Form.Label><br/>
                 <Form.Control type="email" name="email" value={loginDetails.email} onChange={handleLoginDetailsChange}/>
                  </Form.Group><br/>
                  <Form.Group controlId="formBasicBirthDay">
                   <Form.Label><b>BirthDay</b></Form.Label><br/>
                      <Form.Control type="date" name="birthDate" value={personalDetails.birthDate} onChange={handlePersonalDetailsChange} />
                   </Form.Group>
                   <br/><br/>
                   <div style={{display:'flex'}}>

                   <Form.Group controlId="formBasicFirstName">
                   <Form.Label><b>First Name:</b></Form.Label><br/>
                      <Form.Control type="text" name="firstName" value={personalDetails.firstName} onChange={handlePersonalDetailsChange} />
                   </Form.Group>
                   <Form.Group controlId="formBasicMiddleName">
                   <Form.Label><b>Middle Name:</b></Form.Label><br/>
                      <Form.Control type="text" name="middleName" value={personalDetails.middleName} onChange={handlePersonalDetailsChange} />
                   </Form.Group>
                   <Form.Group controlId="LastName">
                   <Form.Label><b>Last Name:</b></Form.Label><br/>
                      <Form.Control style={{flex:1}} type="text" name="lastName" value={personalDetails.lastName} onChange={handlePersonalDetailsChange} />
                   </Form.Group>
                  </div><br/><br/>
                  <div style={{display:'flex', justifyContent: 'space-between'}}>

                  <Form.Group controlId="facultySelect"  style={{ width: '45%' }}>
                    <Form.Label><b>Faculty:</b></Form.Label>
                    <Form.Control 
                    as="select" 
                    name="faculty" 
                    value={personalDetails.faculty} 
                    onChange={handlePersonalDetailsChange}
                    >
                      <option value="">Select Faculty</option>
                      {faculties.map((faculty) => (
                      <option key={faculty.id} value={faculty.id}>{faculty.facultyName}</option>
                      ))}
                      </Form.Control>
                    </Form.Group>


                                                                            
                  <Form.Group controlId="departmentSelect"  style={{ width: '45%' }}>
                    <Form.Label><b>Department:</b></Form.Label>
                    <Form.Control 
                    as="select" 
                    name="department" 
                    value={personalDetails.department} 
                    onChange={handlePersonalDetailsChange}
                    >
                      <option value="">Select Department</option>
                      {departments.map((department) => (
                      <option key={department.id} value={department.id}>{department.departmentName}</option>
                      ))}
                  </Form.Control>
                </Form.Group>
                  </div>
                 
     
                     <br /> 
                   
                      
                     <div style={{ display: 'flex', justifyContent: 'center' }}>
                       <Button onClick={handleSubmit} variant="primary" type="submit" className="login-button">Submit</Button>
                    
                       </div>


                    
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

export default AddStudent;