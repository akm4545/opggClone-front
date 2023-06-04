import { combineReducers } from "redux";
import {all} from 'redux-saga/effects';
import auth, {authSaga} from './auth';
import loading from "./loading";
import user, {userSaga} from './user';
import leaderboard, {leaderboardSaga} from "./leaderboard";

//루트 사가에 등록
const rootReducer = combineReducers({
    auth,
    loading,
    user,
    leaderboard
});

export function* rootSaga(){
    yield all([authSaga(), userSaga(), leaderboardSaga()]);
};

export default rootReducer;