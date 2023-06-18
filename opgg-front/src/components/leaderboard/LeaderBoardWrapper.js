import React from "react";
import LeaderBoardNotice from "./LeaderBoardNotice";
import LeaderBoardSearch from "./LeaderBoardSearch";
import LeaderBoardTable from "./LeaderBoardTable";

const LeaderBoardWrapper = ({leaderboardList, loading, err, userName, percentageOfvictoriesCalc, page, onChangeValue, onKeyUp, onClick}) => {
    return <>
        <div id="content-container" className="css-wt4c1a e2v0byd0">
            <LeaderBoardNotice></LeaderBoardNotice>
            <LeaderBoardSearch
                onChangeValue={onChangeValue}
                onKeyUp={onKeyUp}
                userName={userName}    
            />
            <LeaderBoardTable
                leaderboardList={leaderboardList}
                loading={loading}
                err={err}
                page={page}
                userName={userName}
                percentageOfvictoriesCalc={percentageOfvictoriesCalc}
                onClick={onClick}
            />
        </div>
    </>
};

export default LeaderBoardWrapper;