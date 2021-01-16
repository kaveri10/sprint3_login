import axios from "axios";

let getUserAction = (email) => {
    return async function (dispatch) {
            const res = await axios.get(
                "http://localhost:8080/myapp/admin/${email}", {
                    emailId : email

                    }, 
                    { 
                        "Content-type": "application/json; charset=UTF-8"
                    }
            );
              console.log('Response from server'+ res.data);
              dispatch({type: "GET_USER", payload: res.data});
        
        
    }
}

export default getUserAction;