//Home Component : CHECK WARNING.info FOR NOTES.....

import AdminComponent from './admin';



//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 


const HomeComponent = () => {
    return (
        <div>
            <AdminComponent></AdminComponent>
        </div>
    );
}



export default HomeComponent;