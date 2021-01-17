
import { Button } from 'bootstrap';
import { Accordion, Card } from 'react-bootstrap';
import LoginUserComponent from './LoginUser';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MultipleLoginComponent from './MultiLogin';

const HomeUserComponent = () => {
    return (
        <div>
       {/*<LoginUserComponent></LoginUserComponent>*/}
       <MultipleLoginComponent></MultipleLoginComponent>
        </div>
    );
}



export default HomeUserComponent;