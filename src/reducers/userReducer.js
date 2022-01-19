import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
    user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER: 
        return {
            ...state,
            user: action.user,
        };
        default:
            return state;
    }
};

export default userReducer;

//stateUpdater

//it make an increase on the count when I hit the like button or another