import React from "react";

const BoardSideBar = () => {
    return <>
        <div className="sidebar">
            <div className="sidebar__inner" style={{position: "relative", transform: "translate3d(0px, 0px, 0px)"}}>
                <div className="sidebar-dimmed"></div>
                <div className="sidebar-content-wrap">
                    <div className="sidebar-content-top">
                        <button className="sidebar__close">닫기</button>
                    </div>
                    <div className="sidebar-content-header">
                        <div className="sidebar-button">
                            <div className="sidebar-button__item">
                                <a href="https://talk.op.gg/login" className="button button--green">로그인</a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <div className="sidebar-menu">
                            <div className="sidebar-menu__title">홈</div>
                                <ul className="sidebar-menu__list">
                                    <li className="sidebar-menu__item sidebar-menu__item--active">
                                        <a href="https://talk.op.gg/s/lol/all?sort=popular">
                                            전체
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-menu">
                                <div className="sidebar-menu__title">정보</div>
                                <ul className="sidebar-menu__list">
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/opgg">
                                            OP.GG 기획
                                        </a>
                                    </li>
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/user-news">
                                            유저 뉴스
                                        </a>
                                    </li>
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/tip">
                                            팁과 노하우
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-menu">
                                <div className="sidebar-menu__title">커뮤니티</div>
                                <ul className="sidebar-menu__list">
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/free">
                                            자유
                                        </a>
                                    </li>
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/humor">
                                            유머
                                        </a>
                                    </li>
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/videos">
                                            영상
                                        </a>
                                    </li>
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/lfg">
                                            유저 찾기
                                        </a>
                                    </li>
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/issues">
                                            사건 사고
                                        </a>
                                    </li>
                                    <li className="sidebar-menu__item ">
                                        <a href="https://talk.op.gg/s/lol/fan-art">
                                            팬 아트
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div className="ads__gpt__300-250">
                    <div style={{height: "250px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        position: "relative",
                        margin: "0 auto",
                        overflow: "hidden"
                    }}>
                        <div id="div-gpt-ad-1582778243855-0" style={{width: "300px", height: "250px"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default BoardSideBar;