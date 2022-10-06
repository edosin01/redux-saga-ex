import { GET_USER_STATE_FAILED, GET_USER_STATE_START, GET_USER_STATE_SUCCESS } from "../action/user"

const initialState = {
    isLoading: false,
    userList: []
}


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_STATE_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_USER_STATE_SUCCESS: 
        return {
               ...state,
                isLoading: false,
                userList: action.payload
            }
        case GET_USER_STATE_FAILED:
            return {
               ...state,
                isLoading: false
            }
        default:
            return state
    }
}