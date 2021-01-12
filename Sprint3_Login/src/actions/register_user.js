let registerUserAction = (user) => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/myapp/user", { 
                method: "POST", 
                body: JSON.stringify({
                    name : user.name,
                    dob : user.dob,
                    emailId : user.emailId,
                    password : user.password,
                    phoneNo : user.phoneNo,
                    address : user.address,
                    univName : user.univName   
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          const data = await res.json();
          dispatch({type: "REGISTER", payload: data});
    }
}

export default registerUserAction;