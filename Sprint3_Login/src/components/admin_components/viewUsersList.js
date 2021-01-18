import { Form, Table, Jumbotron, Button } from 'react-bootstrap';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import showUserAction from '../../actions/getAllUser';

const ViewListOfUsers = () => {
    
    let userList = useSelector(state => state);

    const dispatch = useDispatch();

    React.useEffect(() => {
        UserList()
      }, []);
    
      const UserList = () => {
        dispatch(showUserAction())
      }
    console.log("userList: ", userList);
    if(!Array.isArray(userList)) {
        userList = [];
        console.log("Set employeeList to blank array");
    }
    return (
   
    <div>
        <h2 className="text-center">User List</h2>
       
        <br></br>
        <div className = "row">
               <table className = "table table-striped table-bordered">

                   <thead>
                       <tr>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Date of Birth</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>University Name</th>
                            <th>Password</th>
                            <th>Role</th>

                       </tr>
                   </thead>
                   <tbody>
                   {renderTableData(userList)}
                   </tbody>
               </table>

        </div>

   </div>
    );
}


function renderTableData(userList) {
    console.log("employeeList: ", userList);
    return userList.map((user, index) => {
       const { name,dob, emailId,password,phoneNo,address,univName,role } = user //destructuring
       return (
          <tr>
             <td>{name}</td>
             <td>{emailId}</td>
             <td>{dob}</td>
             <td>{phoneNo}</td>
             <td>{address}</td>
             <td>{univName}</td>
             <td>{password}</td>
             <td>{role}</td>

          </tr>
       )
    })
 };

export default ViewListOfUsers;

