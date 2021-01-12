import { Form, Table, Jumbotron, Button } from 'react-bootstrap';


const ViewListOfUsers = () => {
    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label> View List of Users Registered</Form.Label>
                        <br></br>
                        <br></br>
                        <Button variant="dark" type="submit" call>
                            Search
                        </Button>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Address</th>
                           
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default ViewListOfUsers;
