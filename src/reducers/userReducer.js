export function userReducer(state = null, action) {
    switch (action.type) {
        case "LOGGED_IN_USER":
            // payload contains user information
            return action.payload;
    }
}


