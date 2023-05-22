import React from "react";
import LeaderBoardNotice from "./LeaderBoardNotice";
import LeaderBoardSearch from "./LeaderBoardSearch";
import LeaderBoardTable from "./LeaderBoardTable";

const LeaderBoardWrapper = () => {
    return <>
        <div id="content-container" class="css-wt4c1a e2v0byd0">
            <LeaderBoardNotice></LeaderBoardNotice>
            <LeaderBoardSearch></LeaderBoardSearch>
            <LeaderBoardTable></LeaderBoardTable>
        </div>
    </>
};

export default LeaderBoardWrapper;