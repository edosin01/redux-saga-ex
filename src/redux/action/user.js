export const GET_USER_STATE_START = 'GET_USER_STATE_START'
export const GET_USER_STATE_SUCCESS = 'GET_USER_STATE_SUCCESS'
export const GET_USER_STATE_FAILED = 'GET_USER_STATE_FAILED'

export function getUser(payload, onSuccess, onError) {
    return {
        type: GET_USER_STATE_START,
        payload,
        onSuccess,
        onError
    }
}

// payload trả về response của API
export function getUserSuccess(payload) {
    return {
        type: GET_USER_STATE_SUCCESS,
        payload
    }
}

export function getUserFailed() {
    return {
        type: GET_USER_STATE_FAILED
    }
}
// const 
export default {
    getUser,
    getUserSuccess,
    getUserFailed
}