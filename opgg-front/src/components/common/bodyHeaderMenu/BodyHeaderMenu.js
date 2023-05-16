import React from "react";

const BodyHeaderMenu = () => {
    return <>
        <div id="content-header" className="css-t1a859 e13kkiig0">
            <h1>랭킹</h1>
            <nav>
                <h2 className="css-1saok50 e1v8numf0">
                    <a className="active css-r0jqv0 e1di4bas3" href="/leaderboards/tier">
                        랭킹
                    </a>
                </h2>
                <a className="css-kp9opq e1di4bas3" href="/leaderboards/champions">
                    챔피언
                </a>
                <a className="css-kp9opq e1di4bas3" href="/leaderboards/level">
                    레벨
                </a>
            </nav>
        </div>
    </>
};

export default BodyHeaderMenu;