import React from "react";
import HeaderBottomMenuItem from "./HeaderBottomMenuItem";

const headerBottomMenuArray = [
    {
        link:"/",
        menu:"홈"
    },
    {
        link:"/champions",
        menu:"챔피언 분석"
    },
    {
        link:"/modes/aram",
        menu:"게임 모드"
    },
    {
        link:"/statistics/champions",
        menu:"통계"
    },
    {
        link:"/leaderboards/tier",
        menu:"랭킹"
    },
    {
        link:"/spectate/live/pro-gamer",
        menu:"프로관전"
    },
    {
        link:"/multisearch",
        menu:"멀티서치"
    },
    {
        link:"/board",
        menu:"커뮤니티"
    },
]

const HeaderBottomMenu = () => {
    return <>
        <div className="css-4llake e19s97d51">
            <nav className="route-nav">
                <ul className="route-list">
                    {headerBottomMenuArray.map(({link, menu}) => (
                        <HeaderBottomMenuItem
                            key={menu}
                            link={link}
                            menu={menu}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    </>
};

export default HeaderBottomMenu;