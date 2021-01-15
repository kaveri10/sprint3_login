
import { Button } from 'bootstrap';
import { Accordion, Card } from 'react-bootstrap';
import RegisterUserComponent from '../user_components/RegisterUser';
import LoginUserComponent from './LoginUser';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const HomeUserComponent = () => {
    return (
        <div>
        <LoginUserComponent></LoginUserComponent>   
        </div>
    );
}



export default HomeUserComponent;