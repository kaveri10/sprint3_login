import React from 'react';
import { useDispatch } from 'react-redux';
import registerUserAction from '../../actions/register_user';
import User from '../../models/User';

//const RegisterUser =(user) => useDispatch(registerUserAction(user));

class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fields: {},
        errors: {}
      }
      this.addProduct = this.addProduct.bind(this);

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

   
 
    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
        const userObj=new User(this.state.fields['Username'],'1999-12-12',this.state.fields['emailId']
        ,this.state.fields['password'],this.state.fields['mobileno'],"ghhg","ghj");
        //register(userObj);
        //const dispatch = useDispatch()
        console.log("in submit");
        alert("Form submitted111");

        this.addProduct(userObj);
        alert("Form submitted");

          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          

      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form name="userRegistrationForm"  >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Register"onSubmit= {this.submituserRegistrationForm}/>
        </form>
    </div>
</div>

      );
  }
  addProduct(product) {
    console.log("hello");
    const userObj=new User(this.state.fields['Username'],'1999-12-12',this.state.fields['emailId']
        ,this.state.fields['password'],this.state.fields['mobileno'],"ghhg","ghj");
    let addProductFunc =  this.props.store.dispatch(registerUserAction(userObj));
    addProductFunc.then((response)=> {
       // this.setState({products: this.props.store.getState().products});
       console.log("hello");
    });
  }
}



export default RegisterForm;



/*import React, { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import registerUserAction from '../../actions/register_user';
import User from '../../models/User';



let dispatch;
let history;
let selectedDistrict;

const RegistrationForm = (props) => {
   
    dispatch = useDispatch();
    history = useHistory();
    
    return (
    

            <div class="row mx-0 px-sm-0 mb-4">

        <div class="col-8  pl-0 pr-5">
        <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
        <h2>Add Voter Request</h2>
        <br></br>

        <form onSubmit={handleSubmitt}>
            <div class="form-group row ">
            <label for="Name" class="col-4 col-form-label font-weight-bold">Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Name" onBlur={validateUserName} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
            Name should only contain characters
       </small>
    </div>
    </div>
    

    <div class="form-group row ">
            <label for="contactNumber" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contactNumber" onBlur={validateMobileNumber} required></input>
        <small id="numbervalid" class="form-text text-danger invalid-feedback">
            Number should only contain 10 digits
       </small>
   </div>
    </div>

    <div class="form-group row ">
            <label for="emailId" class="col-4 col-form-label font-weight-bold">Email Id :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="emailId" onBlur={validateEmailId} required></input>
        <small id="numbervalid" class="form-text text-danger invalid-feedback">
            Email Id should be in proper format
       </small>
    </div>
    </div>

    <div class="form-group row ">
            <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="constituency" onBlur={validateConstiuency} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
            Constituency should only contain characters
       </small>
    </div>
    </div>

    <div class="form-group row">
    <label for="dob" class="col-4 col-form-label mr-3 font-weight-bold">Date Of Birth :</label>
    <input type="date" id="dob" name="dob" class="col-4 " onBlur={validateDate} required></input>
    <small id="namevalid" class="form-text text-danger invalid-feedback">
                Date of Birth should be less than the current Date
        </small>
      </div>


    <Button variant="primary" name="add" value="ADD VOTER REQUEST" onClick={handleSubmitt}>ADD VOTER REQUEST</Button>
  
</form>
        </div>
        

           </div> 


</div>
)
};


let validUsername=false;
let validNumber=false;
let validEmailId=false;
let validConstituency=false;
let validDate=false;

function validateUserName(event) {
    
    const data = event.target.value;
  console.log("target",data);
 
  let regex = /[a-zA-Z]{3,15}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
   if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
     // valid(username);
     validUsername = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        // inputRequired(username, str);
        validUsername = false;


  }
}
function validateMobileNumber(event) {
    const data = event.target.value;
    console.log("target",data);
    let regex = /\d{10}$/;

    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
   
       event.target.classList.remove('custom-invalid');
       event.target.classList.add('custom-valid');
        // valid(username);
        validNumber = true;
   } 
    else {
   
       event.target.classList.remove('custom-valid');
       event.target.classList.add('custom-invalid');
       
           // inputRequired(username, str);
           validNumber = false;
   
   
     }
}

function validateEmailId(event) {
    const data = event.target.value;
    console.log("target",data);
    let regex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;  

    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
   
       event.target.classList.remove('custom-invalid');
       event.target.classList.add('custom-valid');
        // valid(username);
        validEmailId = true;
   } 
    else {
   
       event.target.classList.remove('custom-valid');
       event.target.classList.add('custom-invalid');
       
           // inputRequired(username, str);
        validEmailId = false;
   
   
     }
}

function validateConstiuency(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /[a-zA-Z]{3,15}$/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
     if (regex.test(str) && str != "") {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');
       // valid(username);
       validConstituency = true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');
      
          // inputRequired(username, str);
        validConstituency = false;
  
  
    }
}

function validateDate(event) {
    const data = event.target.value;
    console.log("target",data);
   
   
    var today = new Date();
    
    if (Date.parse(data)<Date.parse(today)) {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');
       // valid(username);
       validDate = true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');
      
          validDate = false;
  
  
    }
  }


  function handleSubmitt(event){
    event.preventDefault();

    const data = new FormData(event.target);

    const phone = data.get('contactNumber');


    const name = data.get('name');
    const dob = data.get('dob');
    const email = data.get('emailId');
    const password ="Vijay#345";
    const address ="bb";
    const univname = data.get('constituency');

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
  export default RegistrationForm;

/*

import { Container } from "react-bootstrap";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import registerUserAction from '../../actions/register_user';
import { useHistory } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import User from "../../models/User";




let dispatch;
let history;
let selectedState;
let disable=true;

const RegistrationForm= (props) => {


  dispatch = useDispatch();
  history = useHistory();
  
    
    return (
      

            <div class="row mx-0 px-sm-0 mb-4">
                              

            <div class="col-8  pl-0 pr-5">
            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
              <h2 class="addElectionTitle">Register</h2>
        <form onSubmit={handleSubmit}>
        <div class="form-group row pt-4 pb-3">
            <label for="name" class="col-4 col-form-label font-weight-bold">Name :</label>
            <div class="col-8">
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter Name" onBlur={validateName}></input>
            <small id="namevalid" class="form-text text-danger invalid-feedback">
                Name should only  contain characters 
            </small>
            </div>
        </div>
       
        <div class="form-group row pb-3">
        <label for="constituency" class="col-4 col-form-label font-weight-bold">University name :</label>
            <div class="col-8">
            <input type="text"  class="form-control" id="univame" name="univname" placeholder="Enter university name" onBlur={validateUnivName} ></input>
            <small id="namevalid" class="form-text text-danger invalid-feedback">
                Constituency name should only contain characters
            </small>
            </div>
        </div>
        <div class="form-group row pb-3">
        <label for="date" class="col-4 col-form-label mr-3 font-weight-bold">Date of birth:</label>
        <div>
        <input type="date" id="date" name="date" class="col-12" onBlur={validateDate}></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
                Election Date should not be the previous or current date
        </small>
        </div>
        
            </div>
            <button class="btn btn-primary" >ADD</button>
        </form>
        </div>
        </div>


                
        </div>
)
}

let validElectionname=false;
let validConstituency=false;
let validDate=false;


function handleChange(event) {
  selectedState = event.target.value
  console.log("selected state: ", selectedState);
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

  const userObj = new User(name, dob, email, password, phone, address,univname);
  dispatch(registerUserAction(userObj));
  history.push('/');

}

function validateName(event) {
  const data = event.target.value;
  console.log("target",data);
 
  let regex = /^[a-zA-Z]$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
     // valid(username);
     validElectionname = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        // inputRequired(username, str);
        validElectionname = false;


  }
}


function validateUnivName(event) {
  const data = event.target.value;
  console.log("target",data);
 
  let regex = /[a-zA-Z]{3,10}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
     // valid(username);
     validConstituency = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        // inputRequired(username, str);
        validConstituency = false;
  }
}


function validateDate(event) {
  const data = event.target.value;
  console.log("target",data);
 
 
  var today = new Date();
  
  if (Date.parse(data)>Date.parse(today)) {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
     // valid(username);
     validDate = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        validDate = false;


  }
}




export default RegistrationForm;*/