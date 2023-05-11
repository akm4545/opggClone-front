import { createAction, handleActions } from "redux-actions";
import {takeLatest, call} from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSage";

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CEHCK_FAILURE] = createRequestActionTypes('user/CHECK');
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga(){
    try{
        localStorage.removeItem('user');
    }catch(e){
        console.log('localStorage is not working');
    }
}

function* logoutSaga() {
    try{
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    }catch(e){
        console.log(e);
    }
}

export function* userSaga(){
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CEHCK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    user: null,
    checkError: null,
};

export default handleActions(
    {
        [TEMP_SET_USER]: (state, {payload: user}) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, {payload: user}) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CEHCK_FAILURE]: (state, {payload: error}) => ({
            ...state,
            user: null,
            checkError: error,
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null,
        }),
    },
    initialState,
);