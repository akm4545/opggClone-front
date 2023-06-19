import { createAction, handleActions} from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSage";
import * as summonerApi from "../lib/api/main";

const [SUMMONER_SEARCH, SUMMONER_SEARCH_SUCCESS, SUMMONER_SEARCH_FAILURE ] = createRequestActionTypes("summoner/SEARCH");
const CHANGE_VALUE = "summoner/CHANGE_VALUE";
const INIT_FORM = "summoner/INIT_FORM";



export const summonerSearchAction = createAction(SUMMONER_SEARCH);

export const changeValue = createAction(CHANGE_VALUE, ({key, value}) => ({key, value}));

export const initForm = createAction(createAction(INIT_FORM));

const initState = {
    summonerName : null,
    err : null
};

const summonerSearchSaga = createRequestSaga(SUMMONER_SEARCH, summonerApi);

export function* summonerSaga(){
    yield takeLatest(SUMMONER_SEARCH, summonerSearchSaga);
}

const summoner = handleActions({
    [SUMMONER_SEARCH_SUCCESS] : (state, {payload, code}) => ({
        ...state,
        summonerName: payload.summonerName,
        err: code !== 0,
    }),
    [SUMMONER_SEARCH_FAILURE]: (state, {payload, err}) => ({
        ...state,
        err
    }),
    [CHANGE_VALUE]:(state, {payload: {key, value}}) => ({
        ...state,
        [key]: value
    }),
    [INIT_FORM]: (state) => ({
        ...state,
        summonerName: initState.summonerName
    })
}, initState);

export default summoner;
