import React from "react";

const HeaderBottomMenu = () => {
    return <>
        <div className="css-4llake e19s97d51">
            <nav className="route-nav">
                <ul className="route-list">
                    <li className="route-item">
                        <a data-key="HOME" href="/" className="css-pzz37k e19s97d50">홈</a>
                    </li>
                    <li className="route-item">
                        <a data-key="CHAMPION" href="/champions" className="css-pzz37k e19s97d50">챔피언 분석</a>
                    </li>
                    <li className="route-item"><a data-key="GAME_MODE" href="/modes/aram" className="css-7tvz64 e19s97d50">게임 모드</a>
                    </li>
                    <li className="route-item"><a data-key="STATISTICS" href="/statistics/champions"
                            className="css-pzz37k e19s97d50">통계</a></li>
                    <li className="route-item"><a data-key="LEADERBOARDS" href="/leaderboards/tier"
                            className="css-182n78j e19s97d50">랭킹</a></li>
                    <li className="route-item"><a data-key="SPECTATE" href="/spectate/live/pro-gamer"
                            className="css-pzz37k e19s97d50">프로관전</a></li>
                    <li className="route-item"><a data-key="MULTI_SEARCH" href="/multisearch"
                            className="css-pzz37k e19s97d50">멀티서치</a></li>
                    <li className="route-item"><a data-key="TALK" href="https://talk.op.gg/s/lol/all?sort=popular"
                            className="css-pzz37k e19s97d50">커뮤니티</a></li>
                </ul>
            </nav>
        </div>
    </>
};

export default HeaderBottomMenu;