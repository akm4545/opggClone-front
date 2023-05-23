import React from "react";
import LeaderBoardNotice from "./LeaderBoardNotice";
import LeaderBoardSearch from "./LeaderBoardSearch";
import LeaderBoardTable from "./LeaderBoardTable";
import LeaderBoardContent from "./LeaderBoardContent";

const LeaderBoardWrapper = () => {
    return <>
        <div id="content-container" className="css-wt4c1a e2v0byd0">
            <LeaderBoardNotice></LeaderBoardNotice>
            <LeaderBoardSearch></LeaderBoardSearch>
            <LeaderBoardTable>
                <LeaderBoardContent></LeaderBoardContent>
            </LeaderBoardTable>
        </div>
    </>
};

export default LeaderBoardWrapper;