import { createAction, handleActions } from "redux-actions";
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSage";
import * as multiSearchApi from "../lib/api/multiSearch";

const [MULTISEARCH, MULTISEARCH_SUCCESS, MULTISEARCH_FAILUER] = createRequestActionTypes("multisearch/SEARCH");
const CHAGE_VALUE = "multisearch/CHANGE_VALUE";
const INIT_FORM = "multisearch/INIT_FORM";

export const multisearchAction = createAction(MULTISEARCH, summonerName => summonerName);
export const initForm = createAction(INIT_FORM);
export const changeValue = createAction(CHAGE_VALUE, ({key, value}) => ({key, value}));

const initState = {
    multisearch: null,
    err: null,
    summonerName: null,
};

const multisearchListSaga = createRequestSaga(MULTISEARCH, multiSearchApi.multiSearch);

export function* multisearchSaga(){
    yield takeLatest(MULTISEARCH, multisearchListSaga);
};

const multisearch = handleActions({
    [MULTISEARCH_SUCCESS]: (state, {payload, code}) => ({
        ...state,
        multisearch: payload,
        err: code !== 0,    
        name: null,    
    }),
    [MULTISEARCH_FAILUER]: (state, {payload:error}) => ({
        ...state,
        err: error,
        name: null
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

export default multisearch;

