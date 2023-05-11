import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../containers/auth/LoginForm";

//pages = container들을 모아 완성된 페이지를 이루는 컴포넌트

const LoginPage = () => {
    return (
        <AuthTemplate>
            <LoginForm/>
        </AuthTemplate>
    );
};

export default LoginPage;