import axios from "axios";

let unlockUserAction = (email) => {
        return async function (dispatch) {
            const res = await axios.put(
                `http://localhost:8080/myapp/admin/unlock/${email}`,
                    { 
                        "Content-type": "application/json; charset=UTF-8"
                    }
            );
              console.log('Response from server'+ res.data);
              dispatch({type: "UNLOCK", payload: res.data});
        
        
    
    }
}

export default unlockUserAction;
