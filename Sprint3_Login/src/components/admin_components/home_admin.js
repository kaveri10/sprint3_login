//Home Component : CHECK WARNING.info FOR NOTES.....

import AdminComponent from './admin';



//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 
import ViewListOfUsers from './viewUsersList';
import UnlockUserComponent from './unlock';


const HomeAdminComponent = () => {
    return (
        <div>
            
             <ViewListOfUsers></ViewListOfUsers> 
           <UnlockUserComponent></UnlockUserComponent>
        </div>
    );
}



export default HomeAdminComponent;