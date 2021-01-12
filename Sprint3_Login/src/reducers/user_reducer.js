const initialState = [];
const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return action.payload;
       /* case 'SHOW_EMPLOYEES':
            return action.payload;
        case 'SHOW_DEPARTMENTS':
            return action.payload;*/
        default:
            return [];
    }
}

export default userReducer;
