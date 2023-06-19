import React from "react";
import OpggHeader from "../components/common/header/OpggHeader";
import OpggFooter from "../components/common/footer/OpggFooter";
import BodyHeaderMenu from "../components/common/bodyHeaderMenu/BodyHeaderMenu";
import Error from "../components/common/error/Error";

const ErrorPage = () => {
    return <>
        <OpggHeader></OpggHeader>
        <BodyHeaderMenu></BodyHeaderMenu>
        <Error></Error>
        <OpggFooter></OpggFooter>
    </>
};

export default ErrorPage;