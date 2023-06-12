import {call, put} from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

//액션타입을 생성하는 메소드
export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return [type, SUCCESS, FAILURE];
};

//api 통신 공통화
//리덕스 사가(Redux Saga)는 애플리케이션에서 전적으로 부수 효과(Side Effect)만을 담당하여 처리합니다.
//비동기 함수 호출 결과 데이터를 통해 성공, 실패 여부를 판단하고 상태를 업데이트시키는 
//등의 작업(Task)을 제어할 수 있으며, 스토어에 접근하거나 특정 액션(Action)을 
//디스패치(Dispatch) 하여 다른 사가함수를 실행시킬 수 있습니다.
export default function createRequestSaga(type, request){
    //타입별 액션 함수 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    //제네레이터 함수
    return function*(action){
        //put = 액션 disptch
        yield put(startLoading(type));

        try{
            //call = 함수 실행 (1. 실행함수, 2. 실행함수에 전달할 변수)
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data, 
                code: response.code,
                mag: response.msg,
            });
        }catch (e){
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
        }
        
        yield put(finishLoading(type));
    };
}