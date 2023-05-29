import react from "react";

const MainSearchContainer = () => {
    return <>
        <div className="search-contaienr">
            <div>
                <form className="css-a1mmp7 e11dnomr0">
                    <div><small className="label">Region</small>
                        <div className="css-chxd0y e5qh6tw3"><label className="hidden" htmlFor="kr">kr</label>
                            <select id="kr">
                                <option value="na">NA</option>
                                <option value="euw">EUW</option>
                                <option value="eune">EUNE</option>
                                <option value="oce">OCE</option>
                                <option value="kr">KR</option>
                                <option value="jp">JP</option>
                                <option value="br">BR</option>
                                <option value="las">LAS</option>
                                <option value="lan">LAN</option>
                                <option value="ru">RU</option>
                                <option value="tr">TR</option>
                                <option value="sg">SG</option>
                                <option value="ph">PH</option>
                                <option value="tw">TW</option>
                                <option value="vn">VN</option>
                                <option value="th">TH</option>
                            </select>
                        </div>
                        <div className="css-5itq5r e5qh6tw1">
                            <div>
                                <button type="button" className="css-bc9ut9 e5qh6tw2">
                                    <img
                                        src="https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-kr.svg?v=1685352893390"
                                        width="24" alt="" height="24"/>
                                    <span>Korea</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" "><label htmlFor="searchHome" className="label">Search</label>
                        <input
                            id="searchHome" name="search" autoComplete="off" type="text" placeholder="소환사명, 소환사명, ..."
                            value=""/>
                        <div className="css-1vu2yqv ecvb4lm0"></div>
                    </div>
                    <button type="submit">.GG</button>
                </form>
            </div>
            <a target="_blank" rel="noreferrer"
               href="https://op.gg/desktop/?utm_source=opgg&amp;utm_medium=button&amp;utm_campaign=korean"
               className="css-1aoc24 e1oup1a80">
                <img
                    src="https://s-lol-web.op.gg/static/images/icon/logo/icon-window-white.svg?v=1685352893390" width="24"
                    alt="window" height="24"/>
                데스크탑 무료 다운로드
            </a>
        </div>
    </>
};

export default MainSearchContainer;

