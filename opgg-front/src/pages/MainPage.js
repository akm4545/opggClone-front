import React from "react";
import OpggHeader from "../components/common/header/OpggHeader";
import BodyHeaderMenu from "../components/common/bodyHeaderMenu/BodyHeaderMenu";
import BodySide from "../components/common/bodySideAD/BodySide";
import BodyHeader from "../components/common/bodyHeaderAD/BodyHeader";
import OpggFooter from "../components/common/footer/OpggFooter";
import MainWrapper from "../components/main/MainWrapper";

const MainPage = ()=> {
    return <>
        <OpggHeader></OpggHeader>
        <BodyHeaderMenu></BodyHeaderMenu>
        <BodySide></BodySide>
        <MainWrapper></MainWrapper>
        <BodyHeader></BodyHeader>
        <OpggFooter></OpggFooter>
        </>
}

export default MainPage;