import React from "react";

const FooterMenu = () => {
    return <>
        <section>
            <strong className="title">
                <a href="/">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-opgglogo-gray.svg?v=1684072072754" width="99" alt="OP.GG" height="24" loading="lazy"/>
                </a>
            </strong>
            <div>
                <strong className="title">OP.GG</strong>
                <nav>
                    <a href="/about">About OP.GG</a>
                    <a href="https://log.op.gg/about-company" target="_blank" rel="noreferrer">Company</a>
                    <a href="https://log.op.gg/" target="_blank" rel="noreferrer">Blog</a>
                    <a href="/logos">로고 히스토리</a>
                </nav>
            </div>
            <div>
                <strong className="title">Products</strong>
                <nav>
                    <a href="https://op.gg" target="_blank" rel="noreferrer">
                        리그오브레전드
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="리그오브레전드" className="game" height="16"/>
                    </a>
                    <a href="https://op.gg/desktop/" target="_blank" rel="noreferrer">
                        데스크톱<img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="데스크톱" className="game" height="16"/>
                    </a>
                    <a href="https://tft.op.gg" target="_blank" rel="noreferrer">전략적 팀 전투
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="전략적 팀 전투" className="game" height="16"/>
                    </a>
                    <a href="https://valorant.op.gg" target="_blank" rel="noreferrer">
                        발로란트
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="발로란트" className="game" height="16"/>
                    </a>
                    <a href="https://pubg.op.gg" target="_blank" rel="noreferrer">
                        배틀그라운드
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="배틀그라운드" className="game" height="16"/>
                    </a>
                    <a href="https://overwatch.op.gg" target="_blank" rel="noreferrer">
                        오버워치2
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="오버워치2" className="game" height="16"/>
                    </a>
                    <a href="https://er.op.gg" target="_blank" rel="noreferrer">
                        이터널 리턴
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="이터널 리턴" className="game" height="16"/>
                    </a>
                    <a href="https://esports.op.gg" target="_blank" rel="noreferrer">
                        이스포츠
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="이스포츠" className="game" height="16"/>
                    </a>
                    <a href="https://talk.op.gg" target="_blank" rel="noreferrer">
                        톡피지지<img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="톡피지지" className="game" height="16"/>
                    </a>
                    <a href="https://duo.op.gg" target="_blank" rel="noreferrer">
                        Duo
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="Duo" className="game" height="16"/>
                    </a>
                </nav>
            </div>
            <div>
                <strong className="title">Apps</strong>
                <nav>
                    <a href="https://play.google.com/store/apps/details?id=gg.op.lol.android&amp;referrer=utm_source%3Dadblock%26utm_medium%3Dbanner" target="_blank" rel="noreferrer">OP.GG Android App
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="game" className="game" height="16"/>
                    </a>
                    <a href="https://itunes.apple.com/kr/app/op-gg-%EC%98%A4%ED%94%BC%EC%A7%80%EC%A7%80/id605722237?mt=8" target="_blank" rel="noreferrer">
                        OP.GG iOS App
                        <img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt="game" className="game" height="16"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=gg.ifi.playtime" target="_blank" rel="noreferrer">
                        IFI.GG Android App
                    </a>
                    <a href="https://itunes.apple.com/kr/app/id1455300411?mt=8" target="_blank" rel="noreferrer">
                        IFI.GG iOS App
                    </a>
                </nav>
            </div>
            <div>
                <strong className="title">Resources</strong>
                <nav>
                    <a href="/policies/privacy">
                        <strong>개인정보처리방침</strong>
                    </a>
                    <a href="/policies/agreement">이용약관</a>
                    <a href="https://opggkr.helpscoutdocs.com/collection/121-opgg" target="_blank" rel="noreferrer" className="ko_KR">도움말</a>
                    <a href="mailto:service@op.gg">이메일 문의하기</a>
                    <a>FAQ/피드백</a>
                </nav>
            </div>
            <div>
                <strong className="title">More</strong>
                <nav>
                    <a href="mailto:contact@op.gg">제휴</a>
                    <a href="https://opgg.notion.site/d69942ba46e1484b8d0259282ae257e3">광고</a>
                    <a href="https://ko.opgg.team/" target="_blank" rel="noopener noreferrer">채용</a
                ></nav>
            </div>
        </section>
    </>
};

export default FooterMenu;