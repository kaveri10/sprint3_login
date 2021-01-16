import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserLoginAction from '../../actions/loginAction';
import Login from '../../models/Login';
import {} from '../css/registerUser.css';

let dispatch;
let history;

export const LoginUserComponent = (props) =>{
    dispatch = useDispatch();
    history = useHistory();

    return(
        <div class="testbox">
                <form onSubmit={handleSubmit}>
                <div class="banner">
                    <h1>Login</h1>
                </div>
                
                <div class="item">
                    Email Id
                    <input type="emailId" id="emailId" name="emailId" placeholder="e.g. abc12@yahoo.com" required/>
                </div>
                <div class="item">
                    Password
                        <input type="password" name="password" id="password" placeholder="Enter password" />
                </div>
                <div class="btn-submit">
                    <button type="submit" href="/">Submit</button>
                </div>
            </form>
            
        </div>
    );

}

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const emailId = data.get('emailId');
    const password = data.get('password');
    if(emailId==='' || emailId===null) {
        alert("emailId cannot be blank");
        return;
    }
    else if(password==='' || password===null) {
        alert("password cannot be blank");
        return;
    }
    
    const userObj = new Login(emailId, password);
    dispatch(UserLoginAction(userObj));
    history.push('/');
}
export default LoginUserComponent;

