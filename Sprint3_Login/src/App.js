import './App.css';

//Internal Components
import Logo from "./logo.svg"
import HomeComponent from './components/admin_components/home_admin';
import AboutUsComponent from './components/about';


//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 
import HomeUserComponent from './components/user_components/home_user';
import WelcomeComponent from './components/user_components/welcome';
import RegisterUserComponent from './components/user_components/RegisterUserComponent';
function App() {
  return (
    <div className="App">

    {/* NAVIGATION BAR COMPONENT FROM BOOTSTRAP */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">
           Login System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/'>
              <Nav.Link href="/" active>Home</Nav.Link>
            </Link>
            <Link to='/register'>
              <Nav.Link href="/register">Register</Nav.Link>
            </Link>
            <Link to='/about'>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Link>
            <Link to='/'>
            <Nav.Link href="/">Log Out</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Some Common Components if required at all */}

      {/* Switching the content from nav operations */}
      <Switch>
        <Route path='/welcome' component={WelcomeComponent} exact />
        <Route path='/' component={HomeUserComponent} exact />
        <Route path='/about' component={AboutUsComponent} exact/>
        <Route path='/register' component={RegisterUserComponent} exact/>
       
      </Switch>
    </div>
  );
}

export default App;
