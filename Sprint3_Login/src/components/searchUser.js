import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

const SearchUser = () => {
    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 700}}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Search by Valid Emailid</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email ID" id="searchParameter"/>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>User ID</th>
                            <th>Name</th>
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="submit" call>
                        Search
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default SearchUser;