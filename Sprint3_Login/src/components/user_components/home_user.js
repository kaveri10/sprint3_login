//Home Component : CHECK WARNING.info FOR NOTES.....


//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 
import RegisterUserComponent from '../user_components/RegisterUser';


const HomeUserComponent = () => {
    return (
        <div>
            <RegisterUserComponent></RegisterUserComponent>
        </div>
    );
}



export default HomeUserComponent;