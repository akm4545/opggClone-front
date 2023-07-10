import react from "react";
import SummonerRecentStats from "./SummonerRecentStats";
import SummonerRecentGame from "./SummonerRecentGame";

const SummonerMatch = ({matchList : {matches, summonerMatches, recentGameData}}) => {
    return (
        <>
            <div className="css-150oaqg e1shm8tx0">
                <div className="css-jizu2z emr8enm3">
                    <ul>
                        <li className="css-ywzb36 emr8enm1">
                            <button value="TOTAL">전체</button>
                        </li>
                        <li className="css-1oynv5f emr8enm1">
                            <button value="SOLORANKED">솔로랭크</button>
                        </li>
                        <li className="css-1oynv5f emr8enm1">
                            <button value="FLEXRANKED">자유랭크</button>
                        </li>
                        <li className="css-1oynv5f emr8enm1"><span><label className="hidden"
                                                                          htmlFor="queueType">큐 타입</label><select
                            id="queueType"><option value="TOTAL">큐 타입</option><option
                            value="NORMAL">일반 (비공개 선택)</option><option value="ARAM">무작위 총력전</option><option value="BOT">AI 상대 대전</option><option
                            value="CLASH">격전</option><option value="EVENT">이벤트 게임</option><option
                            value="URF">우르프</option></select></span></li>
                    </ul>
                    <div>
                        <div className="css-1vfqwrz emr8enm2">
                            <div className="search">
                                <label className="hidden" htmlFor="championInput">챔피언
                                    검색
                                </label>
                                <input id="championInput" name="championInput" type="text"
                                       placeholder="챔피언 검색 " autoComplete="off" value=""/>
                                <img
                                    src="https://s-lol-web.op.gg/images/icon/icon-search.svg?v=1687251121630" alt="search"/>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <div className="header">최근 플레이</div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="css-3i6n1d ehasqiv3">
                    <SummonerRecentStats recentGameData={recentGameData}/>
                    <div className="positions">
                        <div className="title">선호 포지션 (랭크)</div>
                        <ul>
                            <li>
                                <div className="bar">
                                    <div className="gauge" style={{height:"0%",}}></div>
                                </div>
                                <div className="position"><img
                                    src="https://s-lol-web.op.gg/images/icon/icon-position-top.svg?v=1687251121630"
                                    width="16" alt="TOP"/></div>
                            </li>
                            <li>
                                <div className="bar">
                                    <div className="gauge" style={{height:"0%",}}></div>
                                </div>
                                <div className="position"><img
                                    src="https://s-lol-web.op.gg/images/icon/icon-position-jungle.svg?v=1687251121630"
                                    width="16" alt="JUNGLE"/></div>
                            </li>
                            <li>
                                <div className="bar">
                                    <div className="gauge" style={{height:"0%",}}></div>
                                </div>
                                <div className="position"><img
                                    src="https://s-lol-web.op.gg/images/icon/icon-position-mid.svg?v=1687251121630"
                                    width="16" alt="MID"/></div>
                            </li>
                            <li>
                                <div className="bar">
                                    <div className="gauge" style={{height:"0%",}}></div>
                                </div>
                                <div className="position"><img
                                    src="https://s-lol-web.op.gg/images/icon/icon-position-adc.svg?v=1687251121630"
                                    width="16" alt="ADC"/></div>
                            </li>
                            <li>
                                <div className="bar">
                                    <div className="gauge" style={{height:"0%",}}></div>
                                </div>
                                <div className="position"><img
                                    src="https://s-lol-web.op.gg/images/icon/icon-position-support.svg?v=1687251121630"
                                    width="16" alt="SUPPORT"/></div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*----------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className="css-164r41r e1r5v5160">
                    <SummonerRecentGame matches = {matches} summonerMatches ={summonerMatches}
                        />

                    {/*<li className="css-1qq23jn e1iiyghw3">*/}
                    {/*    <div result="LOSE" className="css-jc3q2t e1iiyghw2">*/}
                    {/*        <div className="content">*/}
                    {/*            <div className="game-content">*/}
                    {/*                <div className="game">*/}
                    {/*                    <div className="type">무작위 총력전</div>*/}
                    {/*                    <div className="time-stamp">*/}
                    {/*                        <div className="" style={{position:"relative",}}>4일 전</div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bar"></div>*/}
                    {/*                    <div className="result">패배</div>*/}
                    {/*                    <div className="length">15분 41초</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="info">*/}
                    {/*                    <div>*/}
                    {/*                        <div className="champion">*/}
                    {/*                            <div className="icon"><a href="/champions/shen" target="_blank"*/}
                    {/*                                                     rel="noreferrer"><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Shen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&amp;v=1687251121630"*/}
                    {/*                                width="48" alt="쉔" height="48"/><span*/}
                    {/*                                className="champion-level">16</span></a></div>*/}
                    {/*                            <div className="spells">*/}
                    {/*                                <div className="spell">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerSnowball.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="표식" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="spell">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="점멸" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="runes">*/}
                    {/*                                <div className="rune">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/perk/8439.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="여진" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="rune">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/perkStyle/8100.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="지배" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="kda">*/}
                    {/*                            <div className="k-d-a"><span>16</span> / <span*/}
                    {/*                                className="d">13</span> / <span>20</span></div>*/}
                    {/*                            <div className="ratio"><span>2.77:1</span> 평점</div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="stats">*/}
                    {/*                            <div className="p-kill">*/}
                    {/*                                <div className="" style={{position:"relative",}}>킬관여 63%</div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="ward">제어 와드 0</div>*/}
                    {/*                            <div className="cs">*/}
                    {/*                                <div className="" style={{position:"relative",}}>CS 17 (1.1)</div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="average-tier">*/}
                    {/*                                <div className="" style={{position:"relative",}}>silver 1</div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="items">*/}
                    {/*                            <ul>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/2051.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="수호자의 뿔피리" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/6660.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="바미의 불씨" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3143.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="란두인의 예언" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3111.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="헤르메스의 발걸음" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3075.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="가시 갑옷" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/6662.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="얼어붙은 건틀릿" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                            </ul>*/}
                    {/*                            <div className="ward">*/}
                    {/*                                <div className="" style={{position:"relative",}}><img*/}
                    {/*                                    src="https://opgg-static.akamaized.net/meta/images/lol/item/2052.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                    width="22" alt="포로 간식" height="22"/></div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="multi-kill">더블킬</div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="participants">*/}
                    {/*                    <ul>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Lucian.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="루시안" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%BD%A9%EC%88%98%EB%8B%88%20%EA%B9%80%EB%A0%88%EC%9D%B4"*/}
                    {/*                                target="_blank" rel="noreferrer">콩수니 김레이</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Yone.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="요네" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EB%B0%B1%EC%83%89%EB%8B%AC%EB%B9%9B%EC%9D%84%EB%B3%B4%EC%95%84%EB%9D%BC"*/}
                    {/*                                target="_blank" rel="noreferrer">백색달빛을보아라</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Velkoz.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="벨코즈" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EB%AA%BD%EC%BF%A0%EA%B0%80" target="_blank"*/}
                    {/*                                rel="noreferrer">몽쿠가</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Samira.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="사미라" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EA%B1%B4%EB%93%9C%EB%A6%AC%EB%A9%B4%20%EB%AC%BC%EC%96%B4%EC%97%AC"*/}
                    {/*                                target="_blank" rel="noreferrer">건드리면 물어여</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Pantheon.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="판테온" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/zl%EC%A1%B4%EC%83%81%EC%9A%B0v" target="_blank"*/}
                    {/*                                rel="noreferrer">zl존상우v</a></div>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                    <ul>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/MasterYi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="마스터 이" height="16"/></div>*/}
                    {/*                            <div className="name"><a href="/summoners/kr/%EC%86%A1%20%EB%82%B4"*/}
                    {/*                                                     target="_blank" rel="noreferrer">송 내</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Lulu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="룰루" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%84%9C%EC%B0%BD%EC%97%AD" target="_blank"*/}
                    {/*                                rel="noreferrer">서창역</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-rea7zu e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Shen.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="쉔" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EB%9D%A0%EC%9A%B8%EC%9E%A5" target="_blank"*/}
                    {/*                                rel="noreferrer">띠울장</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jhin.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="진" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%97%AD%EB%B0%9C%EC%82%B0%EA%B8%B0%EC%8A%AD"*/}
                    {/*                                target="_blank" rel="noreferrer">역발산기슭</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Bard.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="바드" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%A7%80%ED%81%AC%EB%A6%B0%EB%8D%B0"*/}
                    {/*                                target="_blank" rel="noreferrer">지크린데</a></div>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="action">*/}
                    {/*            <button className="detail"><img*/}
                    {/*                src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-red.svg?v=1687251121630"*/}
                    {/*                width="24" alt="More" height="24"/></button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li className="css-1qq23jn e1iiyghw3">*/}
                    {/*    <div result="WIN" className="css-1shak8a e1iiyghw2">*/}
                    {/*        <div className="content">*/}
                    {/*            <div className="game-content">*/}
                    {/*                <div className="game">*/}
                    {/*                    <div className="type">무작위 총력전</div>*/}
                    {/*                    <div className="time-stamp">*/}
                    {/*                        <div className="" style={{position:"relative",}}>4일 전</div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bar"></div>*/}
                    {/*                    <div className="result">승리</div>*/}
                    {/*                    <div className="length">27분 4초</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="info">*/}
                    {/*                    <div>*/}
                    {/*                        <div className="champion">*/}
                    {/*                            <div className="icon"><a href="/champions/senna" target="_blank"*/}
                    {/*                                                     rel="noreferrer"><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Senna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&amp;v=1687251121630"*/}
                    {/*                                width="48" alt="세나" height="48"/><span*/}
                    {/*                                className="champion-level">18</span></a></div>*/}
                    {/*                            <div className="spells">*/}
                    {/*                                <div className="spell">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerBoost.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="정화" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="spell">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="점멸" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="runes">*/}
                    {/*                                <div className="rune">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/perk/8008.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="치명적 속도" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="rune">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/perkStyle/8300.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="영감" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="kda">*/}
                    {/*                            <div className="k-d-a"><span>15</span> / <span*/}
                    {/*                                className="d">10</span> / <span>42</span></div>*/}
                    {/*                            <div className="ratio"><span>5.70:1</span> 평점</div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="stats">*/}
                    {/*                            <div className="p-kill">*/}
                    {/*                                <div className="" style={{position:"relative",}}>킬관여 78%</div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="ward">제어 와드 0</div>*/}
                    {/*                            <div className="cs">*/}
                    {/*                                <div className="" style={{position:"relative",}}>CS 54 (2)</div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="items">*/}
                    {/*                            <ul>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3153.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="몰락한 왕의 검" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3009.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="신속의 장화" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/images/lol/item/7031.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="궁극의 검" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3156.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="맬모셔스의 아귀" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3094.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="고속 연사포" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/6672.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="크라켄 학살자" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                            </ul>*/}
                    {/*                            <div className="ward">*/}
                    {/*                                <div className="" style={{position:"relative",}}><img*/}
                    {/*                                    src="https://opgg-static.akamaized.net/meta/images/lol/item/2052.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                    width="22" alt="포로 간식" height="22"/></div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="multi-kill">더블킬</div>*/}
                    {/*                        <div className="badge mvp">MVP</div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="participants">*/}
                    {/*                    <ul>*/}
                    {/*                        <li className="css-rea7zu e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Senna.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="세나" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EB%9D%A0%EC%9A%B8%EC%9E%A5" target="_blank"*/}
                    {/*                                rel="noreferrer">띠울장</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Cassiopeia.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="카시오페아" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%98%A4%EA%BE%B8%EC%96%91" target="_blank"*/}
                    {/*                                rel="noreferrer">오꾸양</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Khazix.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="카직스" height="16"/></div>*/}
                    {/*                            <div className="name"><a href="/summoners/kr/BossRabbit" target="_blank"*/}
                    {/*                                                     rel="noreferrer">BossRabbit</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ziggs.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="직스" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%97%AD%EB%B0%9C%EC%82%B0%EA%B8%B0%EC%8A%AD"*/}
                    {/*                                target="_blank" rel="noreferrer">역발산기슭</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ornn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="오른" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%A7%80%ED%81%AC%EB%A6%B0%EB%8D%B0"*/}
                    {/*                                target="_blank" rel="noreferrer">지크린데</a></div>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                    <ul>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/KogMaw.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="코그모" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/D%EB%A6%AC%ED%94%84%ED%8A%B8" target="_blank"*/}
                    {/*                                rel="noreferrer">D리프트</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ahri.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="아리" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%95%8C%EA%B2%A0%EC%96%B4%EC%9A%95%ED%95%98%EC%A7%80%EB%A7%88"*/}
                    {/*                                target="_blank" rel="noreferrer">알겠어욕하지마</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Sion.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="사이온" height="16"/></div>*/}
                    {/*                            <div className="name"><a href="/summoners/kr/victory01" target="_blank"*/}
                    {/*                                                     rel="noreferrer">victory01</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Seraphine.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="세라핀" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%BA%90%ED%8B%B0%EA%B9%80" target="_blank"*/}
                    {/*                                rel="noreferrer">캐티김</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ryze.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="라이즈" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%9B%8C%EC%9A%B0%EC%96%98" target="_blank"*/}
                    {/*                                rel="noreferrer">워우얘</a></div>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="action">*/}
                    {/*            <button className="detail"><img*/}
                    {/*                src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-blue.svg?v=1687251121630"*/}
                    {/*                width="24" alt="More" height="24"/></button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li className="css-1qq23jn e1iiyghw3">*/}
                    {/*    <div result="LOSE" className="css-jc3q2t e1iiyghw2">*/}
                    {/*        <div className="content">*/}
                    {/*            <div className="game-content">*/}
                    {/*                <div className="game">*/}
                    {/*                    <div className="type">무작위 총력전</div>*/}
                    {/*                    <div className="time-stamp">*/}
                    {/*                        <div className="" style={{position:"relative",}}>4일 전</div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bar"></div>*/}
                    {/*                    <div className="result">패배</div>*/}
                    {/*                    <div className="length">22분 10초</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="info">*/}
                    {/*                    <div>*/}
                    {/*                        <div className="champion">*/}
                    {/*                            <div className="icon"><a href="/champions/ziggs" target="_blank"*/}
                    {/*                                                     rel="noreferrer"><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ziggs.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&amp;v=1687251121630"*/}
                    {/*                                width="48" alt="직스" height="48"/><span*/}
                    {/*                                className="champion-level">18</span></a></div>*/}
                    {/*                            <div className="spells">*/}
                    {/*                                <div className="spell">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerExhaust.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="탈진" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="spell">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="점멸" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="runes">*/}
                    {/*                                <div className="rune">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/perk/8128.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="어둠의 수확" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="rune">*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/perkStyle/8000.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="정밀" height="22"/></div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="kda">*/}
                    {/*                            <div className="k-d-a"><span>8</span> / <span*/}
                    {/*                                className="d">11</span> / <span>27</span></div>*/}
                    {/*                            <div className="ratio"><span>3.18:1</span> 평점</div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="stats">*/}
                    {/*                            <div className="p-kill">*/}
                    {/*                                <div className="" style={{position:"relative",}}>킬관여 73%</div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="ward">제어 와드 0</div>*/}
                    {/*                            <div className="cs">*/}
                    {/*                                <div className="" style={{position:"relative",}}>CS 34 (1.5)</div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="average-tier">*/}
                    {/*                                <div className="" style={{position:"relative",}}>gold 1</div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <div className="items">*/}
                    {/*                            <ul>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3020.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="마법사의 신발" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/3916.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="망각의 구" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/2421.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="망가진 초시계" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/4645.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="그림자불꽃" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/4637.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="악마의 포옹" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                                <li>*/}
                    {/*                                    <div className="" style={{position:"relative",}}><img*/}
                    {/*                                        src="https://opgg-static.akamaized.net/meta/images/lol/item/6653.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                        width="22" alt="리안드리의 고뇌" height="22"/></div>*/}
                    {/*                                </li>*/}
                    {/*                            </ul>*/}
                    {/*                            <div className="ward">*/}
                    {/*                                <div className="" style={{position:"relative",}}><img*/}
                    {/*                                    src="https://opgg-static.akamaized.net/meta/images/lol/item/2052.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                    {/*                                    width="22" alt="포로 간식" height="22"/></div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="multi-kill">더블킬</div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="participants">*/}
                    {/*                    <ul>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Fizz.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="피즈" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%97%90%EB%B2%A0%EB%B2%A0%EB%B2%A0%EB%B2%A0%EB%B2%A0%EB%B2%A0%EB%B2%A0"*/}
                    {/*                                target="_blank" rel="noreferrer">에베베베베베베베</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Xayah.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="자야" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EB%8B%98%EB%82%98%ED%95%9C%ED%85%8C%EC%99%9C%EA%B7%B8%EB%9E%98%EC%9A%A4"*/}
                    {/*                                target="_blank" rel="noreferrer">님나한테왜그래욤</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Seraphine.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="세라핀" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%96%B4%EB%96%BB%EA%B2%8C%EC%82%B4%EC%96%B4"*/}
                    {/*                                target="_blank" rel="noreferrer">어떻게살어</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Jinx.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="징크스" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EB%8D%B0%EC%8A%A4%EB%82%98%EC%9D%B8"*/}
                    {/*                                target="_blank" rel="noreferrer">데스나인</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Zac.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="자크" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%AB%84%EB%AF%BC%EC%8A%A4%EA%B8%B0"*/}
                    {/*                                target="_blank" rel="noreferrer">쫄민스기</a></div>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                    <ul>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Maokai.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="마오카이" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EB%8C%80%EA%B0%80%EB%A6%AC%EA%B9%A8%EC%A7%84%EB%82%A8"*/}
                    {/*                                target="_blank" rel="noreferrer">대가리깨진남</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-rea7zu e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ziggs.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="직스" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EB%9D%A0%EC%9A%B8%EC%9E%A5" target="_blank"*/}
                    {/*                                rel="noreferrer">띠울장</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Sion.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="사이온" height="16"/></div>*/}
                    {/*                            <div className="name"><a href="/summoners/kr/midenight" target="_blank"*/}
                    {/*                                                     rel="noreferrer">midenight</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Renekton.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="레넥톤" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%95%BC%EC%83%9D%ED%95%AD%EC%95%84%EB%A6%AC"*/}
                    {/*                                target="_blank" rel="noreferrer">야생항아리</a></div>*/}
                    {/*                        </li>*/}
                    {/*                        <li className="css-1ahqe5t e1iiyghw1">*/}
                    {/*                            <div className="icon" style={{position:"relative",}}><img*/}
                    {/*                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ashe.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"*/}
                    {/*                                width="16" alt="애쉬" height="16"/></div>*/}
                    {/*                            <div className="name"><a*/}
                    {/*                                href="/summoners/kr/%EC%97%AD%EB%B0%9C%EC%82%B0%EA%B8%B0%EC%8A%AD"*/}
                    {/*                                target="_blank" rel="noreferrer">역발산기슭</a></div>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    <div className="action">*/}
                    {/*            <button className="detail"><img*/}
                    {/*                src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-red.svg?v=1687251121630"*/}
                    {/*                width="24" alt="More" height="24"/></button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                </div>
                <button className="more">더 보기</button>
            </div>
        </>
    )
}

export default SummonerMatch;