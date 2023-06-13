import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSage";
import * as leaderboardApi from "../lib/api/leaderBoard";

const [LEADERBOARD_LIST, LEADERBOARD_LIST_SUCCESS, LEADERBOARD_LIST_FAILURE] = createRequestActionTypes("leaderboard/LIST");
const CHAGE_VALUE = "leaderboard/CHANGE_VALUE";
const INIT_FORM = "leaderboard/INIT_FORM";

export const leaderboardListAction = createAction(LEADERBOARD_LIST, page => page);
export const changeValue = createAction(CHAGE_VALUE, ({key, value}) => ({key, value}));
export const initForm = createAction(INIT_FORM);

const initState = {
    leaderboardList: "",
    search: "",
    err: null,
};

const leaderboardListSaga = createRequestSaga(LEADERBOARD_LIST, leaderboardApi.leaderBoardList);

export function* leaderboardSaga(){
    yield takeLatest(LEADERBOARD_LIST, leaderboardListSaga);
};

const leaderboard = handleActions({
    [LEADERBOARD_LIST_SUCCESS]: (state, {payload, code}) => ({
        ...state,
        leaderboardList: payload,
        err: code !== 0
    }),
    [LEADERBOARD_LIST_FAILURE]: (state, {payload: error}) => ({
        ...state,
        err: error,
    }),
    [CHAGE_VALUE]: (state, {payload: {key, value}}) => ({
        ...state,
        [key]: value
    }),
    [INIT_FORM]: (state) => ({
        ...state,
        search: initState.search
    })
}, initState);

export default leaderboard;

