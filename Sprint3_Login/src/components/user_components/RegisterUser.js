import React from 'react';
import {} from '../css/registerUser.css';

export const RegisterUserComponent = (props) =>{
    return(
        <div class="testbox">
            <form>
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
                </div><div class="item">
                    University Name
                        <input type="text" name="univname" id="univname" placeholder="Enter university name" />
                </div>
                
                    <div class="btn-block">
                    <button type="submit" href="/">Register</button>
                    </div>
        </form>
    </div>
    );

}

export default RegisterUserComponent;