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
import HomeAdminComponent from './components/admin_components/home_admin';
import HomeUserComponent from './components/user_components/home_user';
import { LoginUserComponent } from './components/user_components/LoginUser';
function App() {
  return (
    <div className="App">

    {/* NAVIGATION BAR COMPONENT FROM BOOTSTRAP */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">
          <img
          src={Logo} 
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{' '}
        Login System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/'>
              <Nav.Link href="#" active>Home</Nav.Link>
            </Link>
            <Link to='/about'>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
            </Link>
            <Nav.Link href="#link">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Some Common Components if required at all */}

      {/* Switching the content from nav operations */}
      <Switch>
        <Route path='/admin' component={HomeAdminComponent} exact />
        <Route path='/user' component={HomeUserComponent} exact />
        <Route path='/about' component={AboutUsComponent} exact/>
        <LoginUserComponent></LoginUserComponent>
      </Switch>
    </div>
  );
}

export default App;
