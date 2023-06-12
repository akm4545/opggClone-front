import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSage";
import * as leaderboardApi from "../lib/api/leaderBoard";

const [LEADERBOARD_LIST, LEADERBOARD_LIST_SUCCESS, LEADERBOARD_LIST_FAILURE] = createRequestActionTypes("leaderboard/LIST");

export const leaderboardListAction = createAction(LEADERBOARD_LIST, page => page);

const initState = {
    leaderboardList: "",
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
    })
}, initState);

export default leaderboard;

