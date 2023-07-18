import React from "react";

const BoardHeaderMiddle = () => {
    return <>
        <div className="header-global" id="header" data-app="false">
            <header className="header">
                <div className="header-left">
                    <div className="site">
                        <div className="site-logo">
                            <nav>
                                <a href="https://talk.op.gg/s/lol" className="active">
                                    리그오브레전드
                                </a>
                                <a href="https://talk.op.gg/s/pubg" className="">
                                    배틀그라운드
                                </a>
                                <a href="https://talk.op.gg/s/ow" className="">
                                    오버워치
                                </a>
                                <a href="https://talk.op.gg/s/r6" className="">
                                    레인보우 식스 시즈
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="header-right-global">
                    <div className="header-right">
                        <a href="https://talk.op.gg/login" className="header-login__button button button--transparent">로그인</a>
                        <button type="button" id="sidebarToggleButton" className="header-sidebar__button">사이드바 열기</button>
                    </div>
                    <div className="header-right lang">
                        <div className="language-container">
                            <button className="language-toggle-button">
                                <span className="language__name">
                                    한국어
                                </span>
                                <img src="https://talk.op.gg/images/icon-dropdown-down-wh@2x.png" width="24" alt=""/>
                                <img src="https://talk.op.gg/images/icon-world.svg" width="24" alt="" className="mobile-icon"/>
                            </button>
                            <div className="gnb-dropdown">
                                <ul className="gnb-dropdown-list">
                                    <li className="gnb-dropdown-list-item">
                                        <a className="header-login__auth-button button button--list " href="#">한국어</a>
                                    </li>
                                    <li className="gnb-dropdown-list-item">
                                        <a className="header-login__auth-button button button--list " href="#">English</a>
                                    </li>
                                    <li className="gnb-dropdown-list-item">
                                        <a className="header-login__auth-button button button--list  active " href="#">자동 선택</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </>
};

export default BoardHeaderMiddle;