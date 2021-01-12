import React from 'react';
import {} from '../css/registerUser.css';

export const LoginUserComponent = (props) =>{
    return(
        <div class="testbox">
            <form>
                <div class="banner">
                    <h1>Login</h1>
                </div>
                <div class="item">
                    <p>EmailId</p>
                        <input type="text" name="name" placeholder="Enter your EmailId" />
                </div>
                <div class="item">
                    <p>Password</p>
                        <input type="text" name="name" placeholder="Enter your Password" />
                </div>
                <div class="btn-submit">
                    <button type="submit" href="/">Submit</button>
                </div>
            </form>
        </div>
    );

}

export default LoginUserComponent;