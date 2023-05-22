import React from "react";

const LeaderBoardSearch = () => {
    return <>
        <div class="css-1pyzh3d e1fnyy5m1">
            <div>
                <div>
                    <div class="css-1b00rv8 e5qh6tw3">
                        <label class="hidden" for="kr">kr</label>
                        <select id="kr">
                            <option value="na">NA</option>
                            <option value="euw">EUW</option>
                            <option value="eune">EUNE</option>
                            <option value="oce">OCE</option>
                            <option selected="" value="kr">KR</option>
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
                    <div class="css-uurdic e5qh6tw1">
                        <div>
                            <button type="button" class="css-bc9ut9 e5qh6tw2">
                                <img src="https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-kr.svg?v=1684731456767" width="24" alt="" height="24"/>
                                <span>KR</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <label class="hidden" for="summonerNameInput">소환사명</label>
                <input type="text" id="summonerNameInput" name="summonerNameInput" autocomplete="off" placeholder="소환사명" value=""/>
            </form>
        </div>
    </>
};

export default LeaderBoardSearch;