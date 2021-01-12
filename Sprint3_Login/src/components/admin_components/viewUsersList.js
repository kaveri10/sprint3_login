import { Form, Table, Jumbotron, Button } from 'react-bootstrap';


const ViewListOfUsers = () => {
    return (
        // All Final Operations and Functions
        <div>
        <h2 className="text-center">User List</h2>
       
        <br></br>
        <div className = "row">
               <table className = "table table-striped table-bordered">

                   <thead>
                       <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>University Name</th>
                            <th>Password</th>

                       </tr>
                   </thead>
                   <tbody>
                      
                   </tbody>
               </table>

        </div>

   </div>
    );
}

export default ViewListOfUsers;
