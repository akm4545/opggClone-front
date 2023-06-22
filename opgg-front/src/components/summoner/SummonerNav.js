import react from "react";
const SummonerNav = () => {

    return (
        <>
            <div className="css-19oge0q e10wh5kk3"><h2 className="hidden">종합</h2>
                <ul>
                    <li><a href="/summoners/kr/%EB%9D%A0%EC%9A%B8%EC%9E%A5" className="css-pws54h e10wh5kk2">종합</a></li>
                    <li><a href="/summoners/kr/%EB%9D%A0%EC%9A%B8%EC%9E%A5/champions"
                           className="css-2rvemq e10wh5kk2">챔피언</a></li>
                    <li>
                        <div className="" style={{position: "relative"}}><a
                            href="/summoners/kr/%EB%9D%A0%EC%9A%B8%EC%9E%A5/ingame" className="css-jnm0r8 e10wh5kk1">인게임
                            정보</a></div>
                    </li>
                    <li><a target="_blank"
                           href="https://tft.op.gg/summoners/kr/띠울장?utm_source=opgg&amp;utm_medium=button&amp;utm_campaign=click_summoner_tft"
                           className="css-92uj9b e10wh5kk0"><img
                        src="https://s-lol-web.op.gg/images/icon/icon-tft.svg?image=q_auto,f_webp,w_32&amp;v=1687251121630"
                        width="16" alt="전략적 팀 전투" height="16"/>전략적 팀 전투</a></li>
                    <div className="css-1qk57ao exklfb50">
                        <div className="header">
                            <div className="header-info">OP스코어로 더 정확한 내 실력을 확인해 보세요</div>
                            <button><img src="https://s-lol-web.op.gg/images/icon/icon-arrow-down.svg?v=1687251121630"
                                         alt="toggle"/></button>
                        </div>
                        <div className="content">
                            <div className="main">
                                <div className="title">OP스코어란?</div>
                                <div className="description">역할군과 라인전, 킬/데스/데미지/시야장악/오브젝트 파괴 등의 지표를 종합해 게임 내 활약 정도를 측정하는
                                    평점 시스템입니다.
                                </div>
                                <div className="detail">
                                    <div className="player">
                                        <div className="title">베스트 플레이어 선정</div>
                                        <div className="row">
                                            <div className="badge mvp">MVP</div>
                                            <div className="description mvp">해당 경기에서 가장 뛰어난 활약을 보여준 1명</div>
                                        </div>
                                        <div className="row">
                                            <div className="badge ace">ACE</div>
                                            <div className="description ace">팀은 비록 패배했지만 승리팀 못지 않은 활약을 보여준 1명</div>
                                        </div>
                                    </div>
                                    <div className="area">
                                        <div className="title">평점 구간
                                            <div className="" style={{position: "relative"}}><img
                                                src="https://s-lol-web.op.gg/images/icon/icon-question.svg?v=1687251121630"
                                                width="24" alt="guide"/></div>
                                        </div>
                                        <div className="graph">
                                            <div className="bar"></div>
                                            <div className="score">
                                                <div>0</div>
                                                <div>10</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sub">
                                <div>OP스코어는 현재 베타 테스트 기간으로, 각 게임의 특성에 따라 다소 부정확한 결과가 노출될 수 있습니다. 각각의 지표 또는 가중치를 지속적으로
                                    조정해 가장 객관적인 지표를 찾기 위해 개선해갈 예정이니 많은 관심과 의견 부탁드립니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default SummonerNav;