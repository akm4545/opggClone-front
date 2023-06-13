import React from "react";
import LeaderBoardContent from "./LeaderBoardContent";
import LeaderBoardPageButton from "./LeaderBoardPageButton";

const LeaderBoardTable = ({leaderboardList, loading, err, percentageOfvictoriesCalc}) => {
    return <>
        <div className="css-ndvmk6 elfnyy5m0">
            <table className="css-147gr6a exo2f213">
                <caption>소환사 랭킹</caption>
                <colgroup>
                    <col width="40"/>
                    <col width="*"/>
                    <col width="110"/>
                    <col width="60"/>
                    <col width="130"/>
                    <col width="50"/>
                    <col width="172"/>
                </colgroup>
                <thead>
                <tr>
                    <th align="left" scope="col">#</th>
                    <th align="left" scope="col">소환사</th>
                    <th align="left" scope="col">티어</th>
                    <th align="left" scope="col">LP</th>
                    <th align="left" scope="col">모스트 챔피언</th>
                    <th align="left" scope="col">레벨</th>
                    <th align="left" scope="col">승률</th>
                </tr>
            </thead>
            <tbody>
                {leaderboardList && (leaderboardList.map(leaderboard => (
                    <LeaderBoardContent
                        key={leaderboard.summonerName}
                        leaderboard={leaderboard}
                        percentageOfvictories={percentageOfvictoriesCalc(leaderboard)}
                    />
                )))}
                {loading && (<tr></tr>)}
            </tbody>
            </table>
            <LeaderBoardPageButton></LeaderBoardPageButton>
        </div>
    </>
};

export default LeaderBoardTable;