import React from "react";

const MultiSearchUser = () => {
    return <>
        <ul className="multi-list">
            <li>
                <div className="prev-seasons">
                    <button className="active" value="21">
                        <strong>S2023 컴포넌트 분리 필요</strong>
                    </button>
                    <button className="" value="19">
                        <strong>S2022</strong>
                        <span> bronze</span>
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
                                src="https://opgg-static.akamaized.net/images/medals_new/silver.png?image=q_auto,f_webp,w_76&amp;v=1687932539766"
                                width="38" 
                                alt="" 
                                height="38"/>
                        </div>
                        <div className="most-position">
                            <img
                                src="https://s-lol-web.op.gg/static/images/site/multi/icon-position-SUPPORT@2x.png?v=1687932539766"
                                width="20" 
                                alt="" 
                                height="20"/>
                        </div>
                    </div>
                    <div className="summoner-name">
                        <a target="_blank" 
                            rel="noreferrer"
                            href="/summoners/kr/%EC%95%BC%EB%81%BC%EC%A0%95%EB%85%B8%EC%98%88">
                                야끼정노예
                        </a>
                    </div>
                    <div className="lp">silver 3 (50 LP)</div>
                    <div className="graph">
                        <div className="bar-graph">
                            <div className="base">
                                <div className="win" style={{width: "51%"}}>120승</div>
                                117패
                            </div>
                            <strong className="winratio">51%</strong>
                        </div>
                    </div>
                    <div className="win-streak win-streak--losses">6연패중</div>
                </div>
                <div className="recent-matches">
                    <div className="title">최근 플레이</div>
                    <div className="positions">
                        <div className="position">
                            <div className="position__icon">
                                <img
                                    src="https://s-lol-web.op.gg/static/images/site/multi/icon-position-SUPPORT@2x.png?v=1687932539766"
                                    width="18" 
                                    alt="" 
                                    height="18"/>
                            </div>
                            <div className="position__info">
                                <div className="role-rate role-rate--high">70%</div>
                                <div className="win-rate">
                                    W/R 
                                    <strong>14%</strong>
                                </div>
                            </div>
                        </div>
                        <div className="position">
                            <div className="position__icon">
                                <img
                                    src="https://s-lol-web.op.gg/static/images/site/multi/icon-position-ADC@2x.png?v=1687932539766"
                                    width="18" 
                                    alt="" 
                                    height="18"/>
                            </div>
                            <div className="position__info">
                                <div className="role-rate null">20%</div>
                                <div className="win-rate">W/R 
                                    <strong>50%</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="recent-games">
                        <li>
                            <div className="recent-game-image" style={{position: "relative"}}>
                                <img
                                    src="https://opgg-static.akamaized.net/meta/images/lol/champion/Irelia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                    width="20" 
                                    alt="이렐리아" 
                                    title="이렐리아" 
                                    height="20"/>
                            </div>
                            <div className="is-win is-win--false">
                                <span className="kill">2 컴포넌트 분리 필요</span>
                                 /
                                <span className="death">10</span>
                                 /
                                <span className="assist">3</span>
                            </div>
                            <div className="time-stamp">
                                <div className="tooltip" style={{position: "relative"}}>2일 전</div>
                            </div>
                        </li>
                        <li>
                            <div className="recent-game-image" style={{position: "relative"}}>
                                <img
                                    src="https://opgg-static.akamaized.net/meta/images/lol/champion/Senna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_40&amp;v=1687932539766"
                                    width="20"
                                    alt="세나" 
                                    title="세나" 
                                    height="20"/>
                                </div>
                            <div className="is-win is-win--false">
                                <span className="kill">4</span>
                                 /
                                <span className="death">8</span>
                                 /
                                <span className="assist">9</span>
                            </div>
                            <div className="time-stamp">
                                <div className="tooltip" style={{position: "relative"}}>2일 전</div>
                            </div>
                        </li>
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