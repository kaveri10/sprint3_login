import { Button } from "bootstrap"
import ViewListOfUsers from "./viewUsersList"


const AdminComponent = () => {
    return (
        <div>
                <input type="submit" onClick={ViewListOfUsers}>View All Users</input>
        </div>
    );
}



export default AdminComponent;