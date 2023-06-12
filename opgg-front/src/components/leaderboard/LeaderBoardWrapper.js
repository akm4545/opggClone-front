import React from "react";
import LeaderBoardNotice from "./LeaderBoardNotice";
import LeaderBoardSearch from "./LeaderBoardSearch";
import LeaderBoardTable from "./LeaderBoardTable";

const LeaderBoardWrapper = ({leaderboardList, loading, err, percentageOfvictoriesCalc}) => {
    return <>
        <div id="content-container" className="css-wt4c1a e2v0byd0">
            <LeaderBoardNotice></LeaderBoardNotice>
            <LeaderBoardSearch></LeaderBoardSearch>
            <LeaderBoardTable
                leaderboardList={leaderboardList}
                loading={loading}
                err={err}
                percentageOfvictoriesCalc={percentageOfvictoriesCalc}
            />
        </div>
    </>
};

export default LeaderBoardWrapper;