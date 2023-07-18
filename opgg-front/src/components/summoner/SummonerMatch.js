import react from "react";
import SummonerRecentStats from "./SummonerRecentStats";
import SummonerRecentGame from "./SummonerRecentGame";

const SummonerMatch = ({matchList : {matches, summonerMatches, recentGameData, totalKills}}) => {
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
                                        totalKills = {totalKills}
                        />
                </div>
                <button className="more">더 보기</button>
            </div>
        </>
    )
}

export default SummonerMatch;