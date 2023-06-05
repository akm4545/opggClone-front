import React from "react";
import LeaderBoardNotice from "./LeaderBoardNotice";
import LeaderBoardSearch from "./LeaderBoardSearch";
import LeaderBoardTable from "./LeaderBoardTable";

const LeaderBoardWrapper = ({leaderBoardList, loading, err}) => {
    return <>
        <div id="content-container" className="css-wt4c1a e2v0byd0">
            <LeaderBoardNotice></LeaderBoardNotice>
            <LeaderBoardSearch></LeaderBoardSearch>
            <LeaderBoardTable
                leaderBoardList={leaderBoardList}
                loading={loading}
                err={err}
            ></LeaderBoardTable>
        </div>
    </>
};

export default LeaderBoardWrapper;