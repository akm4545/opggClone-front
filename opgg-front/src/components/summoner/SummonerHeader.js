import react from "react";
import SummonerNav from "./SummonerNav";
const SummonerHeader = ({summonerName}) => {
    return(
        <>
            <div id="content-header" className="css-158fcuv e8nboil0">
                <div className="css-1gjl1u0 eioz34212">
                    <div className="wrapper">
                        <div className="header-profile-info">
                            <div className="profile-icon"><img
                                src="https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon5227.jpg?image=q_auto,f_webp,w_auto&amp;v=1687251121630"
                                alt="profile image"/>
                                <div className="level"><span className="level">272</span></div>
                            </div>
                            <div className="info">
                                <div className="tier-and-cover-img">
                                    <div className="prev-tier">
                                        <ul className="tier-list">
                                            <li>
                                                <div className="" style={{position: "relative"}}><b>S2020</b> platinum 4
                                                </div>
                                            </li>
                                            <li>
                                                <div className="" style={{position: "relative"}}><b>S9</b> platinum 4</div>
                                            </li>
                                            <li>
                                                <div className="" style={{position: "relative"}}><b>S8</b> platinum 5</div>
                                            </li>
                                        </ul>
                                        <button className="more-tier">More Season Tier</button>
                                    </div>
                                </div>
                                <div className="name"><h1 className="summoner-name">{summonerName}</h1>
                                    <button className="favorite css-1nrkspk eioz34211"><img
                                        src="https://s-lol-web.op.gg/images/icon/icon-bookmark.svg?v=1687251121630"
                                        alt="off"/></button>
                                </div>
                                <div className="css-1jgf5og eioz3426"><a
                                    href="https://member.op.gg/?redirect_url=https://member.op.gg/settings&amp;attach_redirect_url=https%3A%2F%2Fwww.op.gg%2Fsummoners%2Fkr%2F%25EB%259D%25A0%25EC%259A%25B8%25EC%259E%25A5"
                                    id="rso_induce_link" className="css-119nv7m er8eikq0"><img
                                    src="https://s-lol-web.op.gg/assets/images/icons/riot-logomark-circle-offwhite@2x.png?image=q_auto,f_webp,w_32&amp;v=1687251121630"
                                    width="16" alt="" height="16"/><span>라이엇 계정 연동하고 나만의 프로필을 설정해보세요.</span><img
                                    src="https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg?v=1687251121630"
                                    width="20" alt=">" height="20"/></a></div>
                                <div className="buttons">
                                    <button className="css-4e9tnt eapd0am1">전적 갱신</button>
                                </div>
                                <div className="last-update">
                                    <div className="" style={{position: "relative"}}> 최근 업데이트: 3일 전</div>
                                </div>
                            </div>
                        </div>
                        <div className="css-byt1mx eioz3425">
                            <div className="vm-placement css-vnx270 e17e77tq4" id="vm-av" data-format="isvideo">
                                <div>
                                    <div id="primisPlayerContainerDiv" className="primisslate">
                                        {/*<iframe*/}
                                        {/*    marginWidth="0"*/}
                                        {/*    marginHeight="0"*/}
                                        {/*    frameBorder="0"*/}
                                        {/*    scrolling="no"*/}
                                        {/*    title="Primis Frame"*/}
                                        {/*    id="google_ads_iframe_dummy_sekindoParent148"*/}
                                        {/*    sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-presentation"*/}
                                        {/*    style={{ width: "1px", height: "1px", position: "absolute" }}*/}
                                        {/*    data-gtm-yt-inspected-12="true"*/}
                                        {/*    data-gtm-yt-inspected-17="true"*/}
                                        {/*></iframe>*/}
                                        <div id="primis_container_div">
                                            <div
                                                id="placeHolder"
                                                style={{
                                                    position: "absolute",
                                                    overflow: "hidden",
                                                    width: "405px",
                                                    height: "228px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform: "translate(-50%, -50%) scale(1.62857)",
                                                        display: "none",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div
                                            id="primis_playerSekindoSPlayer6492824bc6281"
                                            style={{
                                                overflow: "hidden",
                                                position: "relative",
                                                width: "405px",
                                                height: "228px",
                                                borderRadius: "0px",
                                                display: "block",
                                                zIndex: "0",
                                            }}
                                        >
                                            <div
                                                id="Player-Div-SekindoSPlayer6492824bc6281"
                                                style={{
                                                    width: "max-content",
                                                    height: "max-content",
                                                    top: "auto",
                                                    left: "auto",
                                                    position: "static",
                                                    transform: "none",
                                                }}
                                            >
                                                <div
                                                    id="closeContainer"
                                                    style={{
                                                        display: "none",
                                                        height: "21px",
                                                        width: "100%",
                                                        position: "absolute",
                                                        pointerEvents: "none",
                                                        zIndex: "5",
                                                        top: "-21px",
                                                    }}
                                                >
                                                    <div
                                                        id="closeIcon"
                                                        style={{
                                                            height: "16px",
                                                            width: "16px",
                                                            position: "relative",
                                                            float: "left",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                pointerEvents: "auto",
                                                                width: "60px",
                                                                height: "60px",
                                                                position: "absolute",
                                                                top: "50%",
                                                                left: "50%",
                                                                transform: "translate(-50%, -50%)",
                                                                zIndex: "-1",
                                                            }}
                                                        ></div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="100%"
                                                            height="100%"
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                cursor: "pointer",
                                                            }}
                                                            viewBox="0 0 768 768"
                                                            enableBackground="new 0 0 768 768"
                                                            x="0px"
                                                            y="0px"
                                                            version="1.1"
                                                            id="Layer_1"><circle fill="#ffffff" opacity="0.25" cx="384" cy="384" r="341"></circle>
                                                                <g><path fill="#000000" d="M655.5,112.5C582.9,39.9,486.6,0,384,0S185.1,39.9,112.5,112.5S0,281.4,0,384s39.9,198.9,112.5,271.5S281.4,768,384,768 s198.9-39.9,271.5-112.5S768,486.6,768,384S728.1,185.1,655.5,112.5z M624.6,624.6C560.3,689,474.8,724.4,384,724.4 S207.7,689,143.4,624.6C10.7,492,10.7,276,143.4,143.4C207.7,79,293.2,43.6,384,43.6S560.3,79,624.6,143.4 C757.3,276,757.3,492,624.6,624.6z" className="active-path" data-old_color="#A96D6D" data-original="#000000"></path>
                                                                    <path fill="#000000"
                                                                          d="M553.2,214.8c-8.6-8.6-22.3-8.6-30.9,0L384,353.1L245.7,214.8c-8.6-8.6-22.3-8.6-30.9,0c-8.6,8.6-8.6,22.3,0,30.9 L353.1,384L214.8,522.3c-8.6,8.6-8.6,22.3,0,30.9c4.2,4.2,9.9,6.5,15.4,6.5s11.2-2.1,15.4-6.5l138.3-138.3l138.3,138.3 c4.2,4.2,9.9,6.5,15.4,6.5c5.7,0,11.2-2.1,15.4-6.5c8.6-8.6,8.6-22.3,0-30.9L414.9,384l138.3-138.3 C561.8,237.1,561.8,223.4,553.2,214.8z"
                                                                          className="active-path"
                                                                          data-old_color="#A96D6D"
                                                                          data-original="#000000"></path></g></svg>
                                                            <div id="closeIconHit"
                                                              style={{
                                                                height: "16px",
                                                                width: "16px",
                                                                pointerEvents: "auto",
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "0px",
                                                                cursor: "pointer"
                                                            }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <script
                                    src="https://live.primis.tech/live/liveView.php?playerApiId=a1dfc442-cf23-4980-8ee8-59addf353a2c&amp;s=115002&amp;subId=625fe55f1f2683613b5e0aae&amp;schain=1.0%2C1%21venatus.com%2C5a845ffb46e0fb000166c1cf%2C1"
                                    id="primisPlayerScriptId"></script>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SummonerHeader;