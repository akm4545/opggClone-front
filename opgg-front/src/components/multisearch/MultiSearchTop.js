import React from "react";

const MultiSearchTop = () => {
    return <>
        <div className="header css-gkjk1a e1dgwx8n0" id="content-header">
            <div>
                <form className="FormItem">
                    <label className="hidden" htmlFor="multiInput">
                        멀티서치
                    </label>
                    <textarea 
                        id="multiInput" 
                        name="query"
                        placeholder="ROX Smeb 님이 방에 참가했습니다.
                                    ROX Peanut 님이 방에 참가했습니다.
                                    ROX Kuro 님이 방에 참가했습니다.
                                    ROX PraY 님이 방에 참가했습니다.
                                    ROX GorillA 님이 방에 참가했습니다." 
                        className="TextArea"
                        defaultValue="">
                    </textarea>
                    <div className="button-box">
                        <div className="css-1xg3bej e5qh6tw3">
                            <label className="hidden" htmlFor="kr">kr</label>
                            <select id="kr">
                                <option value="na">NA</option>
                                <option value="euw">EUW</option>
                                <option value="eune">EUNE</option>
                                <option value="oce">OCE</option>
                                <option defaultValue="" value="kr">KR</option>
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
                        <div className="css-5lti0n e5qh6tw1">
                            <div>
                                <button 
                                    type="button" 
                                    className="css-bc9ut9 e5qh6tw2">
                                        <img
                                            src="https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-kr.svg?v=1686926528598"
                                            width="24" alt="" height="24"/>
                                        <span>KR</span>
                                </button>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="css-qa085a e1g0z3cq3">
                                여러명의 소환사 이름으로 요약 검색
                        </button>
                    </div>
                </form>
                <div id="opgg-video" style={{width:"405px", height: "228px"}}>
                    <img src={"https://opgg-static.akamaized.net/logo/20230504114546.931140e7d4574a3ba63ae5783b4faa26.png?image=q_auto,f_webp,w_auto&amp;v=1684072072534"}/>
                </div>
            </div>
        </div>
    </>
};

export default MultiSearchTop;