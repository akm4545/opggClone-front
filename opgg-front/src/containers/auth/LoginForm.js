import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import {useNavigate} from 'react-router-dom';
import {check} from '../../modules/user';

//containers = 리덕스와 연동되어 상태를 받거나 액션을 디스패치 하는 컴포넌트

const LoginForm = () => {
    const navigate = useNavigate();

    //useState = state값 관리 useState(기본값)으로 사용
    //setError = state값을 변경하는 함수
    const [error, setError] = useState(null);

    //useDispatch() = 액션 생성 함수 반환
    const dispatch = useDispatch();

    //useSelector() = 루트 리듀서에 등록된 값을 받아온다
    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    const onChange = e => {
        const {value, name} = e.target;
        //액션 발생 함수
        dispatch(
            //액션 생성 함수(사용자 정의)
            //modules의 auth 참고 -> 생성 액션 타입은 함수 안에 정의되어 있음
            //payload로 전달할 값만 받음 
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();

        const {username, password} = form;
        //login액셩 발생 시킴
        dispatch(login({username, password}));
    };

    //특정 값이 변경되면 새로 실행될 코드
    useEffect(() => {
        //실행될 코드를 기입
        dispatch(initializeForm('login'));
    //배열로 어떤게 변경되는지 감시하고 있을 값 기입 (첫 한번 렌더링 시 실행)    
    }, [dispatch]);

    useEffect(() => {
        if(authError){
            console.log('오류 발생');
            console.log(authError);
            setError('로그인 실패');
            return;
        }

        if(auth){
            console.log('로그인 성공');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user){
            navigate('/');

            try{
                localStorage.setItem('user', JSON.stringify(user));
            }catch(e){
                console.log('localStoraage is not working');
            }
        }
    }, [navigate, user]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

//history 객체를 사용하기 위해 필요
export default LoginForm;