import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import registerUserAction from '../../actions/register_user';
import User from '../../models/User';
import {} from '../css/registerUser.css';

let dispatch;
let history;

export const RegisterUserComponent = (props) =>{
    dispatch = useDispatch();
    history = useHistory();
    
    return(
        <div class="testbox">
            <form onSubmit={handleSubmit}>
                <div class="banner">
                    <h1>Register</h1>
                </div>
                <div class="item">
                Name      <input type="text" name="name" id="name" placeholder="Enter your name" />
                </div>
                <div class="item">
                    Phone
                    <input type="text" name="phone" id="phone" placeholder="### ### ####"/>
                </div>
                <div class="item">
                Date Of Birth
                <input type="date" id="dob" name="dob"/>
                </div>
                <div class="item">
                    Email Id
                    <input type="email" id="email" name="email" placeholder="e.g. abc12@yahoo.com" required/>
                </div>
                <div class="item">
                    Address
                        <input type="text" name="address" id="address" placeholder="Enter your Address" />
                </div>
                <div class="item">
                    University Name
                        <input type="text" name="univname" id="univname" placeholder="Enter university name" />
                </div>
                <div class="item">
                    Password
                        <input type="password" name="pwd" id="pwd" placeholder="Enter password" />
                </div>
                
                    <div class="btn-block">
                    <button type="submit" href="/">Register</button>
                    </div>
        </form>
    </div>
    );

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

    if(name==='' || name===null) {
        alert("Name cannot be blank");
        return;
    }
    else if(!Number(phone)) {
        alert("Phone must be a number");
        return;
    }
    const userObj = new User(name, dob, email, password, phone, address,univname);
    dispatch(registerUserAction(userObj));
    history.push('/');
}


export default RegisterUserComponent;

