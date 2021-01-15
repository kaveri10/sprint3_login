
import { Button } from 'bootstrap';
import { Accordion, Card } from 'react-bootstrap';
import RegisterUserComponent from '../user_components/RegisterUser';
import LoginUserComponent from './LoginUser';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const HomeUserComponent = () => {
    return (
        <div>
    <Card>
        <Card.Header >
                    <Accordion.Toggle variant="link" eventKey="0">
                    Login
                    </Accordion.Toggle>
        </Card.Header>
        <Card.Body>
        <LoginUserComponent></LoginUserComponent>
        </Card.Body>
  </Card>
  <Card>
        <Card.Header >
                    <Accordion.Toggle variant="link" eventKey="0">
                    Register
                    </Accordion.Toggle>
        </Card.Header>
        <Card.Body>
        <RegisterUserComponent></RegisterUserComponent>
        </Card.Body>
  </Card>
        </div>
    );
}



export default HomeUserComponent;