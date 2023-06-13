import React from "react";

const LeaderBoardPageButton = () => {
    return <>
        <div className="css-12a82cm eykbi2q1">
            <p>#1 ~ #100 / 총 3,255,671 소환사</p>
            <div>
                <a href="/leaderboards/tier?page=1" className="css-1unhkzz eykbi2q0">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-arrow-left.svg?v=1686562241342" width="24" alt="prev" height="24"/>
                </a>
                <div>
                    <a href="/leaderboards/tier?page=1" className="css-1ihi8rc eykbi2q0">1</a>
                    <a href="/leaderboards/tier?page=2" className="css-1unhkzz eykbi2q0">2</a>
                    <a href="/leaderboards/tier?page=3" className="css-1unhkzz eykbi2q0">3</a>
                    <a href="/leaderboards/tier?page=4" className="css-1unhkzz eykbi2q0">4</a>
                    <a href="/leaderboards/tier?page=5" className="css-1unhkzz eykbi2q0">5</a>
                    <a href="/leaderboards/tier?page=6" className="css-1unhkzz eykbi2q0">6</a>
                    <a href="/leaderboards/tier?page=7" className="css-1unhkzz eykbi2q0">7</a>
                    <a href="/leaderboards/tier?page=8" className="css-1unhkzz eykbi2q0">8</a>
                    <a href="/leaderboards/tier?page=9" className="css-1unhkzz eykbi2q0">9</a>
                    <a href="/leaderboards/tier?page=10" className="css-1unhkzz eykbi2q0">10</a>
                </div>
                <a href="/leaderboards/tier?page=11" className="css-1unhkzz eykbi2q0">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg?v=1686562241342" width="24" alt="next" height="24"/>
                </a>
            </div>
        </div>
    </>
};

export default LeaderBoardPageButton;