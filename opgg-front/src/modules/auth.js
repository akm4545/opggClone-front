import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSage";
import {takeLatest} from 'redux-sage/effects';
import * as authAPI from '../lib/api/auth';

//modules = 리덕스 관련 코드

//액션 정의 부분
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

//여러 상태의 액션을 쉽게 만듦
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCEESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

//액션 생성 함수
export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value}) => ({
        form,
        key,
        value,
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const register = createAction(REGISTER, ({username, password}) => ({
    username,
    password,
}));
export const login = createAction(LOGIN, ({username, password}) => ({
    username,
    password,
}));

//createRequestSaga 사용
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga(){
    //takeLatest(기존 실행중이던 작업 취소하고 마지막 실행된 작업만 실행)
    //takeLatest(1.특정 조건에 실행될 액션타입, 2.실행시킬 사가)
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}

//초기값 정의
const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: ''
    },
    auth: null,
    authError: null,
};

//액션 타입에 따라 취할 행동들 정의
//handleActions(1. action에 따라 실행할 값을 가진 객체 - 업데이트 함수 
//, 2.초기값 설정)
const auth = handleActions(
    {
        //해당 함수는 state와 payload를 받게 만듦
        [CHANGE_FIELD]: (state, {payload: {form, key, value} }) => 
            //복잡한 객체의 불변성 유지를 위한 immer 라이브러리 사용
            //product(1.수정할 상태, 2.업데이트할 함수)
            //draft라는 함수를 전달하면서
            //현재 코드는 state의 form 객체의 key값인 필드를 value로 덮어 씌움
            produce(state, draft => {
                draft[form][key] = value;
            }
        ),
        //다른 값들은 ...state로 복사
        //form값을 가진 객체는 initialState의[form]객체 초기값으로 변경 
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
           ...state,
           [form]: initialState[form],
           authError: null, 
        }),
        [REGISTER_SUCCESS]: (state, {payload: auth}) => ({
            ...state,
            authError: null,
            auth,
        }),
        [REGISTER_FAILURE]: (state, {payload: error}) => ({
            ...state,
            authError: error,
        }),
        [LOGIN_SUCCEESS]: (state, {payload: auth}) => ({
            ...state,
            authError: null,
            auth,
        }),
        [LOGIN_FAILURE]: (state, {payload: error}) => ({
            ...state,
            authError: error,
        }),
    },
    //초기값
    initialState
);

export default auth;