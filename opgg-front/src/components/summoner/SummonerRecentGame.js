import react from "react";

const SummonerRecentGame = ({matches, summonerMatches}) => {
    const multiKill = {
        "2" : '더블킬',
        "3" : '트리플킬',
        '4' : '쿼드라킬',
        '5' : '펜타킬'
    }

    const ItemSet = ({items}) => {
        return (
            <>
                {items !== 0 ? (
                    <>
                    <li>
                        <div className="" style={{position:"relative",}}><img
                            src={`https://opgg-static.akamaized.net/meta/images/lol/item/${items}.png?image=q_auto,f_webp,w_44&amp;v=1687251121630`}width="22" alt="마법사의 신발" height="22"/>
                        </div>
                    </li>
                    </>
                ) : (
                    <>
                        <li></li>
                    </>
                )}
            </>
            )
    }

    const removeTag = (tag) => {
    }

    return (
        <>
            {summonerMatches.map(({summoner : {championId, assists, championName, deaths, items, kills,
                largestMultiKill, participantId, summoner1Id, summoner2Id, summonerLevel, summonerName, teamId, win}}) => (
                <li className="css-1qq23jn e1iiyghw3">
                    <div result={win ? "WIN": "LOSE"} className={win ? "css-1shak8a e1iiyghw2" : "css-jc3q2t e1iiyghw2"}>
                        <div className="content">
                            <div className="game-content">
                                <div className="game">
                                    <div className="type">무작위 총력전</div>
                                    <div className="time-stamp">
                                        <div className="" style={{position:"relative"}}>4일 전</div>
                                    </div>
                                    <div className="bar"></div>
                                    <div className="result">{win ? '승리' : '패배'}</div>
                                    <div className="length">14분 27초</div>
                                </div>
                                <div className="info">
                                    <div>
                                        <div className="champion">
                                            <div className="icon"><a href="/champions/viktor" target="_blank"
                                                                     rel="noreferrer"><img
                                                src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&amp;v=1687251121630`}
                                                width="48" alt="빅토르" height="48"/><span
                                                className="champion-level">16</span></a></div>
                                            <div className="spells">
                                                <div className="spell">
                                                    <div className="" style={{position:"relative",}}><img
                                                        src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"
                                                        width="22" alt="유체화" height="22"/></div>
                                                </div>
                                                <div className="spell">
                                                    <div className="" style={{position:"relative",}}><img
                                                        src="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"
                                                        width="22" alt="점멸" height="22"/></div>
                                                </div>
                                            </div>
                                            <div className="runes">
                                                <div className="rune">
                                                    <div className="" style={{position:"relative",}}><img
                                                        src="https://opgg-static.akamaized.net/meta/images/lol/perk/8369.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"
                                                        width="22" alt="선제공격" height="22"/></div>
                                                </div>
                                                <div className="rune">
                                                    <div className="" style={{position:"relative",}}><img
                                                        src="https://opgg-static.akamaized.net/meta/images/lol/perkStyle/8200.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"
                                                        width="22" alt="마법" height="22"/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="kda">
                                            <div className="k-d-a"><span>{kills}</span> / <span
                                                className="d">{deaths}</span> / <span>{assists}</span></div>
                                            <div className="ratio"><span>{((kills+assists)/deaths).toFixed(2)}:1</span> 평점</div>
                                        </div>
                                        <div className="stats">
                                            <div className="p-kill">
                                                <div className="" style={{position:"relative",}}>킬관여 93%</div>
                                            </div>
                                            <div className="ward">제어 와드 0</div>
                                            <div className="cs">
                                                <div className="" style={{position:"relative",}}>CS 29 (2)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="items">
                                            <ul>
                                                {items.map((item) => (
                                                    <ItemSet items = {item} />
                                                ))}
                                            </ul>
                                            {/*<div className="ward">*/}
                                            {/*    <div className="" style={{position:"relative",}}><img*/}
                                            {/*        src="https://opgg-static.akamaized.net/meta/images/lol/item/2052.png?image=q_auto,f_webp,w_44&amp;v=1687251121630"*/}
                                            {/*        width="22" alt="포로 간식" height="22"/></div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="multi-kill">{largestMultiKill > 1 ? multiKill[largestMultiKill] : removeTag(this)}</div>
                                        <div className="badge mvp">MVP</div>
                                    </div>
                                </div>
                                <div className="participants">
                                    <ul>
                                        <li className="css-rea7zu e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Viktor.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="빅토르" height="16"/></div>
                                            <div className="name"><a
                                                href="/summoners/kr/%EB%9D%A0%EC%9A%B8%EC%9E%A5" target="_blank"
                                                rel="noreferrer">띠울장</a></div>
                                        </li>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Alistar.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="알리스타" height="16"/></div>
                                            <div className="name"><a href="/summoners/kr/TopLinerToday"
                                                                     target="_blank"
                                                                     rel="noreferrer">TopLinerToday</a></div>
                                        </li>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Teemo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="티모" height="16"/></div>
                                            <div className="name"><a
                                                href="/summoners/kr/%EB%88%84%EB%82%98%EC%97%AC%EA%B8%B0%EB%A7%90%EA%B3%A0%EA%B1%B0%EA%B8%B0"
                                                target="_blank" rel="noreferrer">누나여기말고거기</a></div>
                                        </li>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Caitlyn.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="케이틀린" height="16"/></div>
                                            <div className="name"><a href="/summoners/kr/Wyborne" target="_blank"
                                                                     rel="noreferrer">Wyborne</a></div>
                                        </li>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Rumble.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="럼블" height="16"/></div>
                                            <div className="name"><a
                                                href="/summoners/kr/%EC%97%AD%EB%B0%9C%EC%82%B0%EA%B8%B0%EC%8A%AD"
                                                target="_blank" rel="noreferrer">역발산기슭</a></div>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Maokai.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="마오카이" height="16"/></div>
                                            <div className="name"><a
                                                href="/summoners/kr/%EC%98%86%EC%A7%91%EB%88%84%EB%82%98%EC%8A%A4%EA%B3%A0%EC%9D%B4"
                                                target="_blank" rel="noreferrer">옆집누나스고이</a></div>
                                        </li>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Kalista.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="칼리스타" height="16"/></div>
                                            <div className="name"><a
                                                href="/summoners/kr/Always%20%ED%8B%B0%EB%AA%A8" target="_blank"
                                                rel="noreferrer">Always 티모</a></div>
                                        </li>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ashe.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="애쉬" height="16"/></div>
                                            <div className="name"><a
                                                href="/summoners/kr/%EC%84%9C%EB%8F%84%EC%B2%A0" target="_blank"
                                                rel="noreferrer">서도철</a></div>
                                        </li>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Sion.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="사이온" height="16"/></div>
                                            <div className="name"><a
                                                href="/summoners/kr/%EA%B2%80%EC%9D%80%20%EB%B0%94%EB%9E%8C"
                                                target="_blank" rel="noreferrer">검은 바람</a></div>
                                        </li>
                                        <li className="css-1ahqe5t e1iiyghw1">
                                            <div className="icon" style={{position:"relative",}}><img
                                                src="https://opgg-static.akamaized.net/meta/images/lol/champion/Yuumi.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&amp;v=1687251121630"
                                                width="16" alt="유미" height="16"/></div>
                                            <div className="name"><a
                                                href="/summoners/kr/%EC%98%A4%EC%9E%A5%EC%9C%A1%EB%B6%80%20%EC%A0%81%EC%B6%9C"
                                                target="_blank" rel="noreferrer">오장육부 적출</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="action">
                            <button className="detail"><img
                                src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-blue.svg?v=1687251121630"
                                width="24" alt="More" height="24"/></button>
                        </div>
                    </div>
                </li>

            ))}
        </>
    )
}

export default SummonerRecentGame;