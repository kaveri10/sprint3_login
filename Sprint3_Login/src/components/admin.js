//Admin Services Component : CHECK WARNING.info FOR NOTES.....


import SearchEmployee from './searchUser'

import { Accordion, Card, Button } from 'react-bootstrap'
import ViewListOfUsers from './viewUsersList';
import { Tab, Tabs } from 'react-bootstrap'

const AdminComponent = () => {
    return (
        <div>
            <h1>Admin Services</h1>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Search an User
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    {/* Search an Employee component */}
                    <Card.Body><SearchEmployee></SearchEmployee></Card.Body>
                    {/* Search an Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Show All Users
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewListOfUsers></ViewListOfUsers></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
            
            </Accordion>
        </div>
    );
}



export default AdminComponent;