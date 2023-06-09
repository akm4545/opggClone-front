import React from "react";

const SummonerRecentStats = ({recentGameData: {winGame, loseGame, averageKills, averageDeaths, averageAssists, recentChampion}}) =>{
    const kdaStyleObj = {
        grey : 'css-18ljion',
        green : 'css-1mz60y0',
        blue : 'css-1uej4j6',
        orange :'css-xl4ym'
    }

    const cnt = {
        winCnt : 0,
        loseCnt : 0,
    }

    const winCnt = (winLose) => {
        let winCnt = 0;
        let loseCnt = 0;
        let odds = 0;
        winLose.forEach(result => {
            if(result){
                winCnt ++;
            }else{
                loseCnt++;
            }
        })

        cnt.winCnt = winCnt;
        cnt.loseCnt = loseCnt;


        if(loseCnt !== 0)
            odds = (winCnt / (loseCnt + winCnt))* 100;
        else
            odds = 100;

        return odds;
    }

    const KdaStyle = ({kda}) => {
        let styleName = "";
        if(kda < 3){
            styleName = 'grey';
        }else if(kda < 4){
            styleName = 'green';
        }else if(kda < 5){
            styleName = 'blue';
        }else{
            styleName = 'orange';
        }

        return <>
            <div className={`${kdaStyleObj[styleName]} ehasqiv1`} >{kda} 평점</div>
        </>
    }

    return (
        <>
            <div className="stats">
                <div className="win-lose">{winGame + loseGame}전 {winGame}승 {loseGame}패</div>
                <div className="kda">
                    <div className="chart">
                        <div className="recharts-wrapper"
                             style={{position:"relative", cursor:"default", width:"88px", height:"88px",}}>
                            <svg className="recharts-surface" width="88" height="88" viewBox="0 0 88 88"
                                 version="1.1">
                                <defs>
                                    <clipPath id="recharts3-clip">
                                        <rect x="5" y="5" height="78" width="78"></rect>
                                    </clipPath>
                                </defs>
                                <g className="recharts-layer recharts-pie">
                                    <g className="recharts-layer recharts-pie-sector">
                                        <path stroke="none" fill="#5383E8" color="#5383E8"
                                              className="recharts-sector" d="M 44,0
                                                        A 44,44,0,
                                                        1,1,
                                                        30.403252247502298,85.84648671698676
                                                      L 34.72949016875157,72.53169548885461
                                                                A 30,30,0,
                                                                1,0,
                                                                44,14 Z"></path>
                                    </g>
                                    <g className="recharts-layer recharts-pie-sector">
                                        <path stroke="none" fill="#E84057" color="#E84057"
                                              className="recharts-sector" d="M 30.403252247502298,85.84648671698676
                                                    A 44,44,0,
                                                    0,1,
                                                    43.99999999999999,0
                                                  L 43.99999999999999,14
                                                            A 30,30,0,
                                                            0,0,
                                                            34.72949016875157,72.53169548885461 Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="text"><strong>{parseInt((winGame/(winGame+loseGame)) * 100)}</strong>%</div>
                    </div>
                    <div className="info">
                        <div className="k-d-a"><span>{averageKills}</span> / <span
                            className="death">{averageDeaths}</span> / <span>{averageAssists}</span></div>
                        <div className="ratio">{((averageKills + averageAssists) / averageDeaths).toFixed(2)}:1</div>
                        <div className="kill-participantion">킬관여 71%</div>
                    </div>
                </div>
            </div>
            <div className="champions">
                <div className="title">플레이한 챔피언 (최근 20게임)</div>
                <ul className="">
                    {recentChampion.map(({championName, kda, winLose}) => (
                        <li><img
                            src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_48&amp;v=1687251121630`}
                            width="24" alt="빅토르"/>
                            <div className="win-lose">
                                <div className="" style={{position:"relative", display:"inline",}}><span
                                    className="css-1mugido ehasqiv0">{winCnt(winLose)}%</span></div>
                                 ({cnt.winCnt}승 {cnt.loseCnt}패)
                            </div>
                            <KdaStyle kda={kda}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SummonerRecentStats;