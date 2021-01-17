import { Form, Table, Jumbotron, Button } from 'react-bootstrap'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import registerUserAction from '../../actions/register_user';
import User from '../../models/User';
import '../css/style.css';



let dispatch;
let history;
let name;
let dob;
let email; 
let password;
let phone;
let address;
let univname;

const RegisterUserComponent = () => {

    dispatch = useDispatch();
    history = useHistory();

  return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }} classNamee="col-md-4">
            <Jumbotron style={{ width: 500 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Register</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" id="name" name="name" placeholder="Enter name" onBlur={validateUserName}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicLocation">
                    <Form.Label>Enter DOB</Form.Label>
                    <Form.Control type="date" id="dob" name="dob" >
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="email" id="email" name="email" placeholder="Enter Email" onBlur={validateUserEmail}/>
                    </Form.Group>

                    
                    <Form.Group controlId="formBasicPhoneNo.">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control type="Number"  id="phone" name="phone" onBlur={validatePhoneNumber}/>
                    </Form.Group>                    

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Enter address</Form.Label>
                        <Form.Control type="text" id="address" name="address" placeholder="Enter address" onBlur={validateAddress}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicUnivName">
                        <Form.Label>Enter univname</Form.Label>
                        <Form.Control type="text" id="univname" name="univname" placeholder="Enter univname" onBlur={validateUnivname}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password" id="pwd" name="pwd" placeholder="Enter Password" onBlur={validateUserPassword}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicButton">
                    <Button variant="dark" type="submit">Submit </Button>
                    </Form.Group>
  
                    
                </Form>
            </Jumbotron>
        </div>
    );
}
function validateUserName(event)
 {
     const data = event.target.value;

     let regex = /^([A-Z][a-zA-Z]{3,})$/;
     let str = data;
     console.log(regex, str);

     if(regex.test(str) && str != "" && str != null)
     {
     }
     else
     {
         alert("Enter valid name, it should only contain characters and cannot be null or blank!");
     }
 }

 function validateUserEmail(event)
 {
     const data = event.target.value;

     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let str = data;

     if(regex.test(str) && str != "" && str != null)
     {
        // console.log("valid");
     }
     else
     {
         alert("Enter valid Email");
     }
 }

 function validateUserPassword(event)
 {
     const data = event.target.value;

     let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
     let str = data;

     if(regex.test(str) && str != "" && str != null)
     {
     }
     else
     {
         alert("Enter valid password and Password must contain a number.");
     }
 }

 function validatePhoneNumber(event)
 {
    const data = event.target.value;

    let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let str = data;

    if(regex.test(str) && str != "")
    {
    }
    else
    {
        alert("Enter valid PhoneNumber!");
    }
 }

 function validateAddress(event)
 {
     const data = event.target.value;

     let regex = /^([A-Z][a-zA-Z]{3,})$/;
     let str = data;

     if(regex.test(str) && str !== "" && str != null)
     {
     }
     else
     {
         alert("Enter valid name, it should only contain characters and cannot be null or blank!");
     }
 }

 function validateUnivname(event)
 {
    const data = event.target.value;

     let regex = /^([A-Z][a-zA-Z]{3,})$/;
     let str = data;

     if(regex.test(str) && str !== "" && str != null)
     {
     }
     else
     {
        //alert("Enter valid UnivName, it should only contain characters and cannot be null or blank!");
     }
 }
 



 function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get('name');
    const phone = data.get('phone');
    const dob = data.get('dob');
    const email = data.get('email');
    const password = data.get('pwd');
    const address = data.get('address');
    const univname = data.get('univname');
    const role = 'User';
    console.log(role);
    const userObj = new User(name, dob, email, password, phone, address,univname,role);
    dispatch(registerUserAction(userObj)).then(response =>{
        alert("Registered successfully!!");
      }).catch(error => {
          alert("You are already registered!!");
          return Promise.reject(error.response)
      });
    history.push('/');
}

export default RegisterUserComponent;