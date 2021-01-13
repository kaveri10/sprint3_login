import axios from "axios";

let registerUserAction = (user) => {
    return async function (dispatch) {
            const res = await axios.post(
                "http://localhost:8080/myapp/user", {
                        name : user.name,
                        dob : user.dob,
                        emailId : user.emailId,
                        password : user.password,
                        phoneNo : user.phoneNo,
                        address : user.address,
                        univName : user.univName   
                    }, 
                    { 
                        "Content-type": "application/json; charset=UTF-8"
                    }
            ).then(response => {
                return response
             })
             .catch(error => {
                return Promise.reject(error.response)
             });
              console.log('Response from server'+ res.data);
              dispatch({type: "REGISTER", payload: res.data});
        
        
    }
}

export default registerUserAction;