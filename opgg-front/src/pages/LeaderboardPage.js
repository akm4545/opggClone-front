import React from "react";
import OpggHeader from "../components/common/header/OpggHeader";
import OpggFooter from "../components/common/footer/OpggFooter";
import BodyHeaderMenu from "../components/common/bodyHeaderMenu/BodyHeaderMenu";

const LeaderboardPage = () => {
    return <>
            <OpggHeader></OpggHeader>
            <BodyHeaderMenu></BodyHeaderMenu>
            <OpggFooter></OpggFooter>
        </>
}

export default LeaderboardPage;