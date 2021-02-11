const initialState = [];
const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return action.payload;
       case 'LOGIN':
            return action.payload;
        case 'SHOW_USERS':
            console.log(action.payload);
            return action.payload;
        case 'UNLOCK':
            return action.payload;        
        default:
            return [];
        
    }
}

export default userReducer;
