import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserLoginAction from '../../actions/loginAction';
import Login from '../../models/Login';
import {} from '../css/registerUser.css';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

let dispatch;
let history;
let email; 
let password;

 
export const MultipleLoginComponent = (props) =>{
    dispatch = useDispatch();
    history = useHistory();

    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Login</Form.Label>
                    </Form.Group>

                    <Form.Control size="sm" as="select" id="role">
                        <option>Admin</option>
                        <option>HR</option>
                        <option>User</option>
                    </Form.Control>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="text" id="Email" name="Email" placeholder="Enter Email" onBlur={validateUserEmail}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password" id="Password" name="Password" placeholder="Enter Password" onBlur={validateUserPassword}/>
                    </Form.Group>

                    
                    <Form.Group controlId="formBasicButton">
                    <Button variant="dark" type="submit">Submit </Button>
                    </Form.Group>
  
                    
                </Form>
            </Jumbotron>
        </div>
    );

}

function validateUserEmail(event)
 {
     const data = event.target.value;

     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let str = data;

     if(regex.test(str) && str != "" && str != null)
     {
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
function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const emailId = data.get('emailId');
    const password = data.get('password');
    const role = data.get('role');

    const userObj = new Login(emailId, password,role);
    dispatch(UserLoginAction(userObj)).then(response => {
        alert("Login Successful!!");
        history.push('/welcome');
     })
     .catch(error => {
        return Promise.reject(error.response)
     });;
    
}
export default MultipleLoginComponent;