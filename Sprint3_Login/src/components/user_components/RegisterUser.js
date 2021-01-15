import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import registerUserAction from '../../actions/register_user';
import User from '../../models/User';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../css/style.css';

let dispatch;
let history;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

 const DisplayingErrorMessagesSchema = Yup.object().shape({
   name: Yup.string()
   .matches(/([a-zA-Z\\s])/,"Please provide Valid name")
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
    address: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    univname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')

 });
 
 const RegisterUserComponent = () =>{
    dispatch = useDispatch();
    history = useHistory();
    return (
        <div>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              dob: '',
              password: '',
              address: '',
              univname:'',
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
              const name = values.name;
              const phone = values.phone;
              const dob = values.dob;
              const email = values.email;
              const password = values.password;
              const address =values.address;
              const univname =values.univname;
              const userObj = new User(name, dob, email, password, phone, address,univname);
              console.log("user");
              dispatch(registerUserAction(userObj)).then(response=>{
                console.log("response:",response);
                alert("User Registered Successfully!!");                
            }) .catch(error => {
                console.log("error Response:",error.response)
                console.log("Response status got it  :"+error.response.data);
                alert("User already exists");  

                
                
            });
              history.push('/');
            }}
          >
            {({ errors, touched }) => (
              <Form>
                 
                    Name:
                    <div class="item"><Field name="name" placeholder="Enter Name"/></div>
                    {touched.name && errors.name && <div className="error">{errors.name}</div>}
              
                    Email id:
                    <div class="item"><Field name="email" placeholder="Enter email(abc@xyz.com)"/></div>
                    {touched.email && errors.email && <div  className="error">{errors.email}</div>}
           
                    Phone:
                    <div class="item"><Field name="phone" placeholder="## ## ## ## ##"/></div>
                    {touched.phone && errors.phone && <div className="error">{errors.phone}</div>}
                
                    Date of birth:
                    <div class="item"><Field name="dob" type="date"/></div>
                {touched.dob && errors.dob && <div className="error">{errors.dob}</div>}
                
                    Address:
                    <div class="item"><Field name="address" placeholder="Enter Address"/></div>
                {touched.address && errors.address && <div className="error">{errors.address}</div>}
                
                    University Name:
                    <div class="item"><Field name="univname" placeholder="Enter University Name"/></div>
                {touched.univname && errors.univname && <div className="error">{errors.univname}</div>}
              

                    Password:
                    <div class="item"><Field name="password" placeholder="Enter Password (e.g. X8df!90EO)"/></div>
               {touched.password && errors.password && <div className="error">{errors.password}</div>}
                
                <button type="submit">Submit</button>
                
              </Form>
            )}
          </Formik>
        </div>
      );
      
 } 
 export default RegisterUserComponent;

