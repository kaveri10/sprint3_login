const initialState = [];
const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return action.payload;
       case 'LOGIN':
            return action.payload;
        case 'GET_USER':
            return action.payload;
        default:
            return [];
    }
}

export default userReducer;
