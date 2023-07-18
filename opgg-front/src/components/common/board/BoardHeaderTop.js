import React from "react";

const BoardHeaderTop = () => {
    return <>
        <div id="OPGG_GNB" className="OP GG">
            <div className="opgg-gnb-app opgg-gnb-app--responsive" style={{zIndex: "9999", paddingTop: "0px"}}>
                <div className="opgg-gnb-app__container">
                    <div className="opgg-gnb-app__global-container" style={{backgroundColor: "rgb(40, 52, 78)"}}>
                        <div className="opgg-gnb-logo__container">
                            <a className="opgg-gnb-logo__anchor" href="https://talk.op.gg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="16" viewBox="0 0 65 16">
                                    <title>OP.GG</title>
                                    <path fill="#FFF" fillRule="nonzero"
                                        d="M7.818 12.234c2.265 0 4.107-1.86 4.107-4.149 0-2.288-1.842-4.15-4.107-4.15S3.71 5.798 3.71 8.086c0 2.288 1.843 4.15 4.108 4.15zm0-12.046c4.31 0 7.818 3.543 7.818 7.897 0 4.355-3.507 7.897-7.818 7.897C3.508 15.982 0 12.44 0 8.085 0 3.73 3.507.188 7.818.188zm17.065 8.388c1.466 0 1.913-1.364 1.913-2.367 0-.973-.447-2.367-1.913-2.367h-4.25v4.734h4.25zm5.606-2.367c0 3.413-2.414 6.018-5.589 6.018h-4.267v3.742h-3.507V.192H24.9c3.293 0 5.589 2.622 5.589 6.017zm17.345.926c.017.196.038.509.053.947.026.734-.013 1.185-.159 2.071-.592 3.589-3.342 5.818-7.175 5.818-4.307 0-7.81-3.539-7.81-7.89 0-4.35 3.503-7.89 7.81-7.89a7.763 7.763 0 0 1 5.976 2.814l.22.264-.284.192-2.526 1.701-.211.142-.177-.183c-.799-.825-1.863-1.208-2.998-1.208-2.314 0-4.197 1.83-4.197 4.169 0 2.337 1.883 4.239 4.197 4.239 1.956 0 3.254-1.116 3.508-2.362h-3.192V7.135h6.965zm16.403.002c.016.196.038.509.053.947.026.734-.013 1.185-.16 2.071-.592 3.589-3.341 5.818-7.175 5.818-4.307 0-7.81-3.539-7.81-7.89 0-4.35 3.503-7.89 7.81-7.89a7.765 7.765 0 0 1 5.977 2.813l.22.265-.284.192-2.526 1.7-.211.143-.178-.183c-.798-.825-1.863-1.208-2.998-1.208-2.314 0-4.197 1.83-4.197 4.169 0 2.337 1.883 4.239 4.197 4.239 1.957 0 3.255-1.117 3.509-2.362h-3.192V7.137h6.965zm-33.749 5.63c.874 0 1.586.719 1.586 1.601 0 .883-.712 1.601-1.586 1.601a1.595 1.595 0 0 1-1.584-1.6c0-.883.71-1.602 1.584-1.602z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div className="opgg-gnb-platform-navigation__container">
                            <div className="opgg-gnb-platform-navigation__desktop-navi-open-container ">
                                <div className="opgg-gnb-platform-navigation__desktop-navi-open">
                                    <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                        <img
                                            className="opgg-gnb-platform-navigation__navi-thumb-img"
                                            src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg"
                                            alt="톡피지지"/>
                                    </span>
                                    톡피지지
                                </div>
                            </div>
                            <div className="opgg-gnb-platform-navigation__desktop-platform-list-container">
                                <div className="opgg-gnb-platform-navigation__desktop-platform-list-inner">
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://op.gg" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg"
                                                alt="리그오브레전드"/>
                                        </span>
                                        리그오브레전드
                                    </a>
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://op.gg/desktop/" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg"
                                                alt="데스크톱"/>
                                        </span>
                                        데스크톱
                                    </a>
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://tft.op.gg" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/img_navi_tft-whte.svg"
                                                alt="전략적 팀 전투"/>
                                        </span>
                                        <span className="opgg-gnb-platform-navigation__new-icon" style={{right: "auto"}}>
                                            <img
                                                src="https://opgg-gnb.akamaized.net/img_newmark@2x.18a11fa5.png"
                                                alt="More"/>
                                        </span>
                                        전략적 팀 전투
                                    </a>
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://valorant.op.gg" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg"
                                                alt="발로란트"/>
                                        </span>
                                        <span className="opgg-gnb-platform-navigation__beta-icon" style={{right: "auto"}}>
                                            Beta
                                        </span>
                                        발로란트
                                    </a>
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://pubg.op.gg" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg"
                                                alt="배틀그라운드"/>
                                        </span>
                                        배틀그라운드
                                    </a>
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://overwatch.op.gg" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg"
                                                alt="오버워치2"/>
                                        </span>
                                        <span className="opgg-gnb-platform-navigation__new-icon" style={{right: "auto"}}>
                                            <img
                                                src="https://opgg-gnb.akamaized.net/img_newmark@2x.18a11fa5.png"
                                                alt="More"/>
                                        </span>
                                        오버워치2
                                    </a>
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://er.op.gg" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/img_navi_bs.svg"
                                                alt="이터널 리턴"/>
                                        </span>
                                        이터널 리턴
                                    </a>
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://duo.op.gg" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-duo-gray.svg"
                                                alt="Duo"/>
                                        </span>
                                        Duo
                                    </a>
                                    <a className="opgg-gnb-platform-navigation__desktop-platform-item" href="https://esports.op.gg" target="_blank">
                                        <span className="opgg-gnb-platform-navigation__desktop-navi-thumb">
                                            <img
                                                className="opgg-gnb-platform-navigation__navi-thumb-img"
                                                src="https://opgg-gnb.akamaized.net/static/images/icons/img_navi_esports.svg"
                                                alt="이스포츠"/>
                                        </span>
                                        이스포츠
                                    </a>
                                </div>
                            </div>
                            <div className="opgg-gnb-platform-navigation__desktop-more-btn-container">
                                <button type="button" className="opgg-gnb-platform-navigation__desktop-more-btn">
                                    <img src="https://opgg-gnb.akamaized.net/icon-more.feb85963.svg" alt="More"/>
                                </button>
                            </div>
                            <div className="opgg-gnb-platform-navigation__navi-open-container ">
                                <button type="button" className="opgg-gnb-platform-navigation__navi-open">
                                    <span className="opgg-gnb-platform-navigation__navi-thumb">
                                        <img
                                            className="opgg-gnb-platform-navigation__navi-thumb-img"
                                            src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg"
                                            alt="톡피지지"/>
                                    </span>
                                    톡피지지
                                </button>
                            </div>
                            <span className="opgg-gnb-platform-navigation__layer-dim false"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </>;
};

export default BoardHeaderTop;