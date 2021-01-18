import { Button } from 'bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserAction from '../../actions/get_user';


let dispatch;

let userlist;
const ViewUserList =(props)=>{    
     userlist= useSelector(state=>state.userReducer);
     dispatch =useDispatch();
    console.log("List outside:",userlist);
    return (
    <div>


       
            <div class="col-8  pl-0 pr-5">

            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">

             
                 <form onSubmit={handleSearch}>
                     <div class='form-group row pt-4 pb-3'>
                         <div class="form-inline col-5">
                             <label htmlFor="id" class="col-form-label font-weight-bold">Enter email id:</label>
                             <input type='text' class='form-control' id='id' name='id' placeholder='Enter value' onBlur={validateId} required onKeyUpCapture={EnableDisable}></input>
                         <small id='validid' class="form-text text-danger invalid-feedback">
                            Please enter a valid email id
                         </small>
                         </div>
                        
                         <div class='col-2'>
                             <button  className="btn btn-primary" id="btnsubmit" disabled="disabled">Search</button>
                         </div>   
                     </div>
                 </form>
                     <h2 class='font-weight-bold'>Voter Id List</h2>
                     <table class= 'table table-border table-striped'>
                         <thead>
                             <tr>
                             
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>University Name</th>
                                <th>Password</th>
                                <th>Role</th>
                             </tr>
                         </thead>
                         <tbody>
                             {renderTableData(userlist)}
                         </tbody>
                     </table>
                   </div> 
            </div>
     
</div>
);
};
let validId=false;


function EnableDisable(id){
    var btnsubmit=document.getElementById("btnsubmit");
    if(id.value!=""){
        btnsubmit.disabled=false;
    }
    else{
        btnsubmit.disabled=true;
    }

}
function renderTableData(userlist){

    console.log("list inside:",userlist);
        return(
            <tr>
                <td>{userlist.name}</td>
                <td>{userlist.dob}</td>
                <td>{userlist.emailId}</td>
                <td>{userlist.phone}</td>
                <td>{userlist.address}</td>
                <td>{userlist.univName}</td>
                <td>{userlist.password}</td>
                <td>{userlist.role}</td>
           </tr>
        )
    };

function handleSearch(event){
    event.preventDefault();
  const data = new FormData(event.target);
 
  console.log("in handle submit:",data)
  const value = data.get('id');
    console.log("value:",value)
    dispatch(getUserAction(value));
}

function validateId(event){
    const data=event.target.value;
    console.log("target",data);
    

    let regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    let inputdata=data;
    let str=inputdata.trim();
    console.log(regex,str);
    if(regex.test(str)&&str!=""){
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
        validId=true;
    }else{
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');

        validId=false;
    }
}
export default ViewUserList;