import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUser } from "../../../api";
import { getUserFailed, getUserSuccess, GET_USER_STATE_START } from "../../action/user";

function* doGetUser(action) {
    try {
        const response = yield call(fetchUser);
        yield put(getUserSuccess(response))
        if(action?.onSuccess){
            action.onSuccess(response)
        }
    } 
    catch(err) {
        yield put(getUserFailed());
        if(action?.onError){
            action.onError(err)
        }
    }
}

export default function* watchGetUser() {
    yield takeLatest(GET_USER_STATE_START, doGetUser);
}