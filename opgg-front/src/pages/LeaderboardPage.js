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
            <BodyHeaderMenu
                menuName={"랭킹"}
            >
                <h2 className="css-1saok50 e1v8numf0">
                    <a className="active css-r0jqv0 e1di4bas3" href="/leaderboards/tier">
                        랭킹
                    </a>
                </h2>
            </BodyHeaderMenu>
            <BodySide></BodySide>
            <BodyHeader></BodyHeader>
            <LeaderboardContainer></LeaderboardContainer>
            <OpggFooter></OpggFooter>
        </>
}

export default LeaderboardPage;