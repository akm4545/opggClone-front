import React from "react";
import TopHeaderMenuItem from "./TopHeaderMenuItem";
import HeaderThemeButton from "./HeaderThemeButton";

const topMenu = [
    {
        title: "리그오브레전드",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"",
        marker:"",
    },
    {
        title: "데스크톱",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://op.gg/desktop/",
        marker:"",
    },
    {
        title: "전략적 팀 전투",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img_navi_tft-whte.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://tft.op.gg",
        marker:"N",
    },
    {
        title: "발로란트",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://valorant.op.gg",
        marker:"B",
    },
    {
        title: "배틀그라운드",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://pubg.op.gg",
        marker:"",
    },
    {
        title: "오버워치2",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://overwatch.op.gg",
        marker:"N",
    },
    {
        title: "이터널 리턴",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img_navi_bs.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://er.op.gg",
        marker:"",
    },
    {
        title: "이스포츠",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img_navi_esports.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://esports.op.gg",
        marker:"",
    },
    {
        title: "톡피지지",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-talk-white.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://talk.op.gg",
        marker:"",
    },
    {
        title: "Duo",
        imageSrc: "https://opgg-gnb.akamaized.net/static/images/icons/img-navi-duo-gray.svg?image=q_auto,f_webp,w_48&amp;v=1684072072754",
        link:"https://duo.op.gg",
        marker:"",
    },
]

const HeaderTopMenu = () => {
    return <>
        <div className="css-v5x69j e8qzvbh1">
            <a className="logo" href="/">
                <img src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1684072072754" width="65" alt="OP.GG" height="16"/>
            </a>
            <nav>
                <ul>
                    {topMenu.map(({title, imageSrc, link, marker}) => 
                        (<TopHeaderMenuItem
                            key={title}
                            title={title}
                            imageSrc={imageSrc}
                            link={link}
                            marker={marker}
                    />))}
                </ul>
            </nav>
            <div className="css-h3ax4d ex7daql2">
                <button className="css-3dgn5c ex7daql1">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-more.svg?v=1684072072754" width="24" alt="more" height="24"/>
                </button>
            </div>
            <HeaderThemeButton className={"css-1d0m9ic e2826cc0"}/>
            <HeaderThemeButton 
                className={"css-zx4hnl e13z6i6i0"}
                marginLeft={"8px"}
            />
            <div className="css-1i10ah0 eunllsz0">
                <img src="https://s-lol-web.op.gg/images/icon/icon-world-light-blue.svg?v=1684072072754" width="24" alt="" height="24" />
                <div className="css-1mkbl4u e5qh6tw3">
                    <label className="hidden" htmlFor="ko_KR">
                        ko_KR
                    </label>
                    <select id="ko_KR" defaultValue="ko_KR">
                        <option value="en_US">English</option>
                        <option value="ko_KR">한국어</option>
                        <option value="ja_JP">日本語</option>
                        <option value="pl_PL">język polski</option>
                        <option value="fr_FR">français</option>
                        <option value="de_DE">Deutsch</option>
                        <option value="es_ES">español</option>
                        <option value="nl_NL">Nederlands</option>
                        <option value="da_DK">dansk</option>
                        <option value="sv_SE">Svenska</option>
                        <option value="no_NO">Norsk</option>
                        <option value="ru_RU">русский язык</option>
                        <option value="hu_HU">magyar</option>
                        <option value="fi_FI">suomi</option>
                        <option value="tr_TR">Türkçe</option>
                        <option value="ro_RO">limba română</option>
                        <option value="pt_BR">português</option>
                        <option value="zh_CN">简体中文</option>
                        <option value="zh_TW">繁體中文</option>
                        <option value="sr_CS">српски језик</option>
                        <option value="it_IT">italiano</option>
                        <option value="th_TH">ไทย</option>
                        <option value="vi_VN">Tiếng Việt</option>
                    </select>
                </div>
                <div className="css-102sadh e5qh6tw1">
                    <div>
                        <button type="button" className="css-13itnp3 e5qh6tw2">
                            <span>한국어</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="css-c5yhti ev0b1ki1">
                <a href="https://member.op.gg/?redirect_url=https://www.op.gg/leaderboards/tier"
                    className="css-6c6v7u ev0b1ki0">
                    로그인
                </a>
            </div>
        </div>
    </>
};

export default HeaderTopMenu;