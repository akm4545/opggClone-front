import React from "react";
import OpggHeader from "../components/common/header/OpggHeader";
import OpggFooter from "../components/common/footer/OpggFooter";
import BodyHeaderMenu from "../components/common/bodyHeaderMenu/BodyHeaderMenu";
import BodySide from "../components/common/bodySideAD/BodySide";
import BodyHeader from "../components/common/bodyHeaderAD/BodyHeader";
import LeaderboardContainer from "../containers/leaderboard/LeaderboardContainer";

const LeaderboardPage = () => {
    return <>
            <OpggHeader></OpggHeader>
            <BodyHeaderMenu></BodyHeaderMenu>
            <BodySide></BodySide>
            <BodyHeader></BodyHeader>
            <LeaderboardContainer></LeaderboardContainer>
            <OpggFooter></OpggFooter>
        </>
}

export default LeaderboardPage;