import React from "react";

const laneImageConverter = (lane) => {
    if(lane === "BOTTOM"){
        return "ADC";
    }

    return lane;
};

const percentageOfvictoriesCalc = (wins, losses) => {
    console.log(wins);
    console.log(losses);

    wins = Number(wins);
    losses = Number(losses);

    const total = wins + losses;
    const divide = wins / total;
    
    return (divide * 100).toFixed(0);
};

const Position = ({lane, winCount, playCount}) => {
    return <>
        <div className="position">
            <div className="position__icon">
                <img
                    src={`https://s-lol-web.op.gg/static/images/site/multi/icon-position-${laneImageConverter(lane)}@2x.png?v=1687932539766`}
                    width="18" 
                    alt="" 
                    height="18"/>
            </div>
            <div className="position__info">
                <div className="role-rate role-rate--high">{playCount}0%</div>
                <div className="win-rate">
                    W/R
                    <strong>{percentageOfvictoriesCalc(winCount, playCount - winCount)}%</strong>
                </div>
            </div>
        </div>
    </>;
};

const PlayGameSimpleInfo = ({championName, kill, death, assist, win, ace}) => {
    return <>
        <li>
            <div className="recent-game-image" style={{position: "relative"}}>
                <img
                    src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766`}
                    width="20" 
                    alt="이렐리아" 
                    title="이렐리아" 
                    height="20"/>
            </div>
            <div className={`is-win is-win--${win}`}>
                <span className="kill">{kill}</span>
                    /
                <span className="death">{death}</span>
                    /
                <span className="assist">{assist}</span>
                {win && ace && <span className="badge mvp">M</span>}
                {!win && ace && <span className="badge ace">A</span>}
            </div>
            <div className="time-stamp">
                <div className="tooltip" style={{position: "relative"}}>2일 전</div>
            </div>
        </li>
    </>;
};

const MultiSearchUser = ({gameInfo}) => {
    const winStreakCalc = ({gameList}) => {
        const win = gameList[0].win;
        let gameCount = 0;

        for(let i=0; i<gameList.length; i++){
            let game = gameList[i];

            if(win){
                if(game.win){
                    gameCount = gameCount + 1;
                }else{
                    break;
                }            
            }else{
                if(game.win){
                    break;
                }else{
                    gameCount = gameCount + 1;
                }
            }
        }

        return gameCount;
    };

    const winStreakType = ({gameList}) => {
        if(gameList[0].win){
            return "wins";
        }else{
            return "losses";
        }
    };
    
    return <>
        <ul className="multi-list">
            <li>
                <div className="prev-seasons">
                    <button className="active" value="21">
                        <strong>S2023</strong>
                        <span> {gameInfo.tier}</span>
                    </button>                    
                </div>
                <div className="summoner-summary">
                    <div className="last-updated">
                        <div className="tooltip" style={{position: "relative"}}>
                            최근 업데이트: 4일 전
                        </div>
                    </div>
                    <div className="refresh">
                        <button type="button" className="refresh-btn">
                            <img 
                                src="https://s-lol-web.op.gg/assets/images/buttons/01-icon-icon-refresh.svg?v=1687932539766"
                                width="24" 
                                alt="Refresh" 
                                className="" 
                                height="24"/>
                        </button>
                    </div>
                    <div className="tier-position">
                        <div className="tier">
                            <img 
                                src={`https://opgg-static.akamaized.net/images/medals_new/${gameInfo.tier.toLowerCase()}.png?image=q_auto,f_webp,w_76&amp;v=1687932539766`}
                                width="38" 
                                alt="" 
                                height="38"/>
                        </div>
                        <div className="most-position">
                            <img
                                src={`https://s-lol-web.op.gg/static/images/site/multi/icon-position-${laneImageConverter(gameInfo.laneInfo.lane.lane)}@2x.png?v=1687932539766`}
                                width="20" 
                                alt="" 
                                height="20"/>
                        </div>
                    </div>
                    <div className="summoner-name">
                        <a target="_blank" 
                            rel="noreferrer"
                            href="/summoners/kr/%EC%95%BC%EB%81%BC%EC%A0%95%EB%85%B8%EC%98%88">
                                {gameInfo.name}
                        </a>
                    </div>
                    <div className="lp">{gameInfo.tier} {gameInfo.rank} ({gameInfo.leaguePoints} LP)</div>
                    <div className="graph">
                        <div className="bar-graph">
                            <div className="base">
                                <div className="win" style={{width: `${percentageOfvictoriesCalc(gameInfo.wins, gameInfo.losses)}%`}}>{gameInfo.wins}승</div>
                                {gameInfo.losses}패
                            </div>
                            <strong className="winratio">{percentageOfvictoriesCalc(gameInfo.wins, gameInfo.losses)}%</strong>
                        </div>
                    </div>
                    <div className={`win-streak win-streak--${winStreakType(gameInfo)}`}>{winStreakCalc(gameInfo)}{winStreakType(gameInfo) === "wins" ? '연승중' : '연패중'}</div>
                </div>
                <div className="recent-matches">
                    <div className="title">최근 플레이</div>
                    <div className="positions">
                        <Position
                            lane={gameInfo.laneInfo.lane.lane}
                            winCount={gameInfo.laneInfo.lane.winCount}
                            playCount={gameInfo.laneInfo.lane.playCount}
                        />
                        <Position
                            lane={gameInfo.laneInfo.subLane.lane}
                            winCount={gameInfo.laneInfo.subLane.winCount}
                            playCount={gameInfo.laneInfo.subLane.playCount}
                        />
                    </div>
                    <ul className="recent-games">
                        {gameInfo.gameList.map(game => (
                            <PlayGameSimpleInfo
                                championName={game.championName}
                                kill={game.kills}
                                death={game.deaths}
                                assist={game.assists}
                                win={game.win}
                                ace={game.ace}
                            />
                        ))}
                    </ul>
                </div>
                <ul className="most-champions">
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Senna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="세나" title="세나" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio green">3.22:1 KDA</span>
                        </div>
                        <div className="game-count">155</div>
                        <div className="win-ratio">
                            <span className="ratio ">54%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Tristana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="트리스타나" title="트리스타나" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio blue">4.09:1 KDA</span>
                        </div>
                        <div className="game-count">28</div>
                        <div className="win-ratio">
                            <span className="ratio red">68%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Fiddlesticks.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="피들스틱" title="피들스틱" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio ">2.61:1 KDA</span>
                        </div>
                        <div className="game-count">21</div>
                        <div className="win-ratio">
                            <span className="ratio ">52%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jhin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="진" title="진" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio ">2.45:1 KDA</span>
                        </div>
                        <div className="game-count">10</div>
                        <div className="win-ratio">
                            <span className="ratio ">10%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Twitch.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="트위치" title="트위치" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio ">2.88:1 KDA</span>
                        </div>
                        <div className="game-count">8</div>
                        <div className="win-ratio">
                            <span className="ratio ">25%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/AurelionSol.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="아우렐리온 솔" title="아우렐리온 솔" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio ">2.62:1 KDA</span>
                        </div>
                        <div className="game-count">3</div>
                        <div className="win-ratio">
                            <span className="ratio ">33%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Annie.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="애니" title="애니" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio ">1.87:1 KDA</span>
                        </div>
                        <div className="game-count">2</div>
                        <div className="win-ratio">
                            <span className="ratio ">50%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Xerath.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="제라스" title="제라스" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio ">2.56:1 KDA</span>
                        </div>
                        <div className="game-count">2</div>
                        <div className="win-ratio">
                            <span className="ratio ">50%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Pantheon.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="판테온" title="판테온" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio ">1.43:1 KDA</span>
                        </div>
                        <div className="game-count">2</div>
                        <div className="win-ratio">
                            <span className="ratio ">0%</span>
                        </div>
                    </li>
                    <li>
                        <div className="champion-image" style={{position: "relative"}}>
                            <img
                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/DrMundo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                width="20" alt="문도 박사" title="문도 박사" height="20"/>
                        </div>
                        <div className="kda">
                            <span className="ratio orange">5.25:1 KDA</span>
                        </div>
                        <div className="game-count">1</div>
                        <div className="win-ratio">
                            <span className="ratio red">100%</span>
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <div className="prev-seasons"></div>
                <div className="summoner-summary"></div>
                <div className="recent-matches"></div>
                <ul className="most-champions"></ul>
            </li>
            <li>
                <div className="prev-seasons"></div>
                <div className="summoner-summary"></div>
                <div className="recent-matches"></div>
                <ul className="most-champions"></ul>
            </li>
            <li>
                <div className="prev-seasons"></div>
                <div className="summoner-summary"></div>
                <div className="recent-matches"></div>
                <ul className="most-champions"></ul>
            </li>
            <li>
                <div className="prev-seasons"></div>
                <div className="summoner-summary"></div>
                <div className="recent-matches"></div>
                <ul className="most-champions"></ul>
            </li>
        </ul>
    </>
};

export default MultiSearchUser;