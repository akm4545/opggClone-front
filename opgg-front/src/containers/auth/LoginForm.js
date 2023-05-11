import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import {withRouter} from 'react-router-dom';
import {check} from '../../modules/user';

//containers = 리덕스와 연동되어 상태를 받거나 액션을 디스패치 하는 컴포넌트

const LoginForm = ({history}) => {
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
        dispatch(
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
        dispatch(login({username, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
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
            history.push('/');

            try{
                localStorage.setItem('user', JSON.stringify(user));
            }catch(e){
                console.log('localStoraage is not working');
            }
        }
    }, [history, user]);

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

export default withRouter(LoginForm);