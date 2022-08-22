export const userReducer = (state = null, action) => {
    switch (action.type) {
        case "LOGGED_IN_USER":
            // payload contains user information
            return action.payload;

        case "LOGOUT":
            // user: {}
            return action.payload;

        default:
            return state;
    }
}


