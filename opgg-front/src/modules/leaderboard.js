import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSage";
import * as leaderboardApi from "../lib/api/leaderBoard";

const [LEADERBOARD_LIST, LEADERBOARD_LIST_SUCCESS, LEADERBOARD_LIST_FAILURE] = createRequestActionTypes("leaderboard/LIST");
const [LEADERBOARD_SEARCH, LEADERBOARD_SEARCH_SUCCESS, LEADERBOARD_SEARCH_FAILURE] = createRequestActionTypes("leaderboard/SEARCH");
const CHAGE_VALUE = "leaderboard/CHANGE_VALUE";
const INIT_FORM = "leaderboard/INIT_FORM";

export const leaderboardListAction = createAction(LEADERBOARD_LIST, page => page);
export const changeValue = createAction(CHAGE_VALUE, ({key, value}) => ({key, value}));
export const initForm = createAction(INIT_FORM);
export const leaderboardSearch = createAction(LEADERBOARD_SEARCH, name => name);

const initState = {
    leaderboardList: "",
    page:"",
    userName: null,
    err: null,
};

const leaderboardListSaga = createRequestSaga(LEADERBOARD_LIST, leaderboardApi.leaderBoardList);
const leaderboardSearchSaga = createRequestSaga(LEADERBOARD_SEARCH, leaderboardApi.leaderBoaardSearch);

export function* leaderboardSaga(){
    yield takeLatest(LEADERBOARD_LIST, leaderboardListSaga);
    yield takeLatest(LEADERBOARD_SEARCH, leaderboardSearchSaga);
};

const leaderboard = handleActions({
    [LEADERBOARD_LIST_SUCCESS]: (state, {payload, code}) => (  
    {
        ...state,
        leaderboardList: payload.leaderBoardList,
        page: payload.page ? payload.page : 1,
        err: code !== 0,
        userName: null
    }),
    [LEADERBOARD_LIST_FAILURE]: (state, {payload: error}) => ({
        ...state,
        err: error,
        userName: null
    }),
    [LEADERBOARD_SEARCH_SUCCESS]: (state, {payload, code}) => ({
        ...state,
        leaderboardList: payload.leaderBoardList,
        page: payload.page ? payload.page : 1,
        err: code !== 0
    }),
    [LEADERBOARD_SEARCH_FAILURE]: (state, {payload: error}) => ({
        ...state,
        err: error,
    }),
    [CHAGE_VALUE]: (state, {payload: {key, value}}) => ({
        ...state,
        [key]: value
    }),
    [INIT_FORM]: (state) => ({
        ...state,
        userName: initState.userName
    })
}, initState);

export default leaderboard;

