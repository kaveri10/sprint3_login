import { Form, Table, Jumbotron, Button } from 'react-bootstrap';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import unlockUserAction from '../../actions/unlock';
import { useHistory } from 'react-router-dom';
let dispatch ;
let history;
const UnlockUserComponent = () => {
    dispatch = useDispatch();
    history = useHistory();
    return (
   
    <div>

           

        <Jumbotron style={{ width: 500 }}>
                <Form onSubmit={handleSubmit}>
                    
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Email Id to Unlock Account:</Form.Label>
                        <Form.Control type="email" id="email" name="email" placeholder="Enter Email" onBlur={validateUserEmail}/>
                    </Form.Group>
                

                   

                    <Form.Group controlId="formBasicButton">
                    <Button variant="dark" type="submit">Submit </Button>
                    </Form.Group>
  
                    
                </Form>
            </Jumbotron>
   </div>
    );
}


function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const email = data.get('email');
    console.log(email);
    dispatch(unlockUserAction(email)).then(response =>{
        alert("Unlocked successfully!!");
      }).catch(error => {
          alert("Error occured!!");
          return Promise.reject(error.response)
      });
    history.push('/');
 };

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
export default UnlockUserComponent;

