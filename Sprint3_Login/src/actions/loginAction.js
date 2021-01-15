import axios from "axios";

let UserLoginAction = (user) => {
    
    return async function (dispatch) {
            const res = await axios.post(
                "http://localhost:8080/myapp/user/login", {
                        
                        emailId : user.emailId,
                        password : user.password
                        
                    }, 
                    { 
                        "Content-type": "application/json; charset=UTF-8"
                    }
            )
              console.log('Response from server'+ res.data);
              dispatch({type: "LOGIN", payload: res.data});
        
        
    }
}
export default UserLoginAction;




