import { SAVE_USER } from "../config/constant"

const initialState = {
    user: null,
    isPending: true
}

const ApplicationReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case `${SAVE_USER}_PENDING`:
            return initialState
        case `${SAVE_USER}_FULFILLED`:
            return {
                isPending: false,
                user: action.payload
            }
        default: return state;
    }
}

export default ApplicationReducer;