import React from "react";

const productMenuArray = [
    {
        link: "https://op.gg",
        title:"리그오브레전드",
        imageYn:true,
    },
    {
        link: "https://op.gg/desktop/",
        title:"데스크톱",
        imageYn:true,
    },
    {
        link: "https://tft.op.gg",
        title:"전략적 팀 전투",
        imageYn:true,
    },
    {
        link: "https://valorant.op.gg",
        title:"발로란트",
        imageYn:true,
    },
    {
        link: "https://pubg.op.gg",
        title:"배틀그라운드",
        imageYn:true,
    },
    {
        link: "https://overwatch.op.gg",
        title:"오버워치2",
        imageYn:true,
    },
    {
        link: "https://er.op.gg",
        title:"이터널 리턴",
        imageYn:true,
    },
    {
        link: "https://esports.op.gg",
        title:"이스포츠",
        imageYn:true,
    },
    {
        link: "https://talk.op.gg",
        title:"톡피지지",
        imageYn:true,
    },
    {
        link: "https://duo.op.gg",
        title:"Duo",
        imageYn:true,
    },
];

const appMenuArray = [
    {
        link: "https://play.google.com/store/apps/details?id=gg.op.lol.android&amp;referrer=utm_source%3Dadblock%26utm_medium%3Dbanner",
        title:"OP.GG Android App",
        imageYn:true,
    },
    {
        link: "https://itunes.apple.com/kr/app/op-gg-%EC%98%A4%ED%94%BC%EC%A7%80%EC%A7%80/id605722237?mt=8",
        title:"OP.GG iOS App",
        imageYn:true,
    },
    {
        link: "https://play.google.com/store/apps/details?id=gg.ifi.playtime",
        title:"IFI.GG Android App",
        imageYn:false,
    },
    {
        link: "https://itunes.apple.com/kr/app/id1455300411?mt=8",
        title:"IFI.GG iOS App",
        imageYn:false,
    },
];

const FooterMenuItem = ({link, title, imageYn}) => {
    return <>
        <a href={link} target="_blank" rel="noreferrer">
            {title}
            {imageYn && (<img src="https://s-lol-web.op.gg/images/icon/icon-game.svg?v=1684072072754" width="16" alt={title} className="game" height="16"/>)}
        </a>
    </>;
};

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
                    {productMenuArray.map(({link, title, imageYn}) => (
                        <FooterMenuItem
                            link={link}
                            title={title}
                            imageYn={imageYn}
                        />
                    ))}
                </nav>
            </div>
            <div>
                <strong className="title">Apps</strong>
                <nav>
                    {appMenuArray.map(({link, title, imageYn}) => (
                        <FooterMenuItem
                            link={link}
                            title={title}
                            imageYn={imageYn}
                        />
                    ))}
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