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
                    <p>Name</p>
                        <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div class="item">
                    <p>Phone</p>
                    <input type="text" name="phone" placeholder="### ### ####"/>
                </div>
                <div class="item">
                    <p>Date Of Birth</p>
                    <input type="date" id="dob" name="dob"/>
                </div>

                <div class="item">
                    <p>Route</p>
                    <select required>
                    <option value="1">Mumbai-Pune</option>
                    <option value="2">Pune-Mumbai</option>
                    <option value="3">Nashik-Nagpur</option>
                    <option value="4">Nagpur-Nashik</option>
                    <option value="5">Mumbai-Surat</option>
                    <option value="6">Surat-Mumbai</option>
                    </select>
                </div>
                <div class="item">
                    <p>Vehicle Type</p>
                    <select required>
                    <option value="1">Car</option>
                    <option value="2">Bus</option>
                    </select>
                </div>
                    <div class="btn-block">
                    <button type="submit" href="/">Book</button>
                    </div>
        </form>
    </div>
    );

}

export default RegisterUserComponent;