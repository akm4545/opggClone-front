import React from "react";

const LeaderBoardTable = () => {
    return <>
        <div className="css-ndvmk6 elfnyy5m0">
            <table class="css-147gr6a exo2f213">
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
            </table>
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
        </div>
    </>
};

export default LeaderBoardTable;