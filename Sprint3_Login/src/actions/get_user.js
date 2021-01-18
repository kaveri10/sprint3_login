
import axios from "axios";

let getUserAction=(emailId)=>{
    return async function (dispatch){
        
        const res=await axios.get(
            `http://localhost:8080/myapp/admin/${emailId}`,{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin":"*"
                } 
               
            } 
            
        )
        .then(response=>{
            console.log("response:",response);
            dispatch({type:"GET_USER",payload:response.data});

            
        }) .catch(error => {
            console.log("error Response:",error.response)
            console.log("data:",error.response.data.message);
            alert(error.response.data.message);
            
        });
       
    }
}
export default getUserAction;