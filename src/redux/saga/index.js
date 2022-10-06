import { all } from "redux-saga/effects";
import watchGetUser from "./user/get-user";

export default function* rootSaga() {
    yield all ([
        watchGetUser()
    ])
}