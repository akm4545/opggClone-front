import React from "react";
import HeaderTopMenu from "./HeaderTopMenu";

const OpggHeader = () => {
    return <>
        <header className="desktop-header css-16nzi5j eto4p5w0">
            <HeaderTopMenu></HeaderTopMenu>
            <div className="css-1961c94 ee3th7h3">
                <div className="css-c9w21w ee3th7h2">
                    <a className="css-1dh5idu ee3th7h1">
                        <div className="css-ax33we e52jcm60">
                            <img src="https://opgg-static.akamaized.net/logo/20230504114546.931140e7d4574a3ba63ae5783b4faa26.png?image=q_auto,f_webp,w_auto&amp;v=1684072072534" alt="OP.GG logo (우르곳)" title="우르곳" />
                        </div>
                    </a>
                    <div className="css-14erh4u ee3th7h0">
                        <div>
                            <form className="css-1hikutr e11dnomr0">
                                <div>
                                    <div className="css-1aduixl e5qh6tw3">
                                        <label className="hidden" htmlFor="AUTOCOMPLETE-REGION">kr</label>
                                        <select id="AUTOCOMPLETE-REGION" defaultValue="kr">
                                            <option value="na" data-key="AUTOCOMPLETE-REGION" data-value="na">NA</option>
                                            <option value="euw" data-key="AUTOCOMPLETE-REGION" data-value="euw">EUW</option>
                                            <option value="eune" data-key="AUTOCOMPLETE-REGION" data-value="eune">EUNE</option>
                                            <option value="oce" data-key="AUTOCOMPLETE-REGION" data-value="oce">OCE</option>
                                            <option value="kr" data-key="AUTOCOMPLETE-REGION" data-value="kr">KR</option>
                                            <option value="jp" data-key="AUTOCOMPLETE-REGION" data-value="jp">JP</option>
                                            <option value="br" data-key="AUTOCOMPLETE-REGION" data-value="br">BR</option>
                                            <option value="las" data-key="AUTOCOMPLETE-REGION" data-value="las">LAS</option>
                                            <option value="lan" data-key="AUTOCOMPLETE-REGION" data-value="lan">LAN</option>
                                            <option value="ru" data-key="AUTOCOMPLETE-REGION" data-value="ru">RU</option>
                                            <option value="tr" data-key="AUTOCOMPLETE-REGION" data-value="tr">TR</option>
                                            <option value="sg" data-key="AUTOCOMPLETE-REGION" data-value="sg">SG</option>
                                            <option value="ph" data-key="AUTOCOMPLETE-REGION" data-value="ph">PH</option>
                                            <option value="tw" data-key="AUTOCOMPLETE-REGION" data-value="tw">TW</option>
                                            <option value="vn" data-key="AUTOCOMPLETE-REGION" data-value="vn">VN</option>
                                            <option value="th" data-key="AUTOCOMPLETE-REGION" data-value="th">TH</option>
                                        </select>
                                    </div>
                                    <div className="css-1rvu0oj e5qh6tw1">
                                        <div>
                                            <button type="button" className="css-bc9ut9 e5qh6tw2">
                                                <img src="https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-kr.svg?v=1684072072534" width="24" alt="" height="24"/>
                                                <span>KR</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className=" ">
                                    <label htmlFor="search" className="label">Search</label>
                                    <input id="search" name="search" autoComplete="off" type="text" placeholder="소환사명, 소환사명, ..." defaultValue=""/>
                                </div>
                                <button type="submit">.GG</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
        </header>
    </>
}

export default OpggHeader;