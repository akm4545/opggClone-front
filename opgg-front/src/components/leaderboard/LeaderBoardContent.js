import React from "react";

const LeaderBoardContent = ({leaderboard, percentageOfvictories, userName, leaderBoardIndex}) => {
    return <>
        <tr id={leaderboard.summonerName} className={`${userName === leaderboard.summonerName ? "css-17j1uco": "css-1kk0pwf"} e1g3wlsd10`}>
            <td className="css-oqjmdl e1g3wlsd9">{leaderBoardIndex}</td>
            <td className="css-1vdhwjr e1g3wlsd8">
                <a href="/summoners/kr/%EB%8C%95%EC%B2%AD%EC%9E%87">
                    <img
                        src="https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon4206.jpg?image=q_auto,f_webp,w_64&amp;v=1684731456767"
                        width="32" alt="profile_image" className="icon" height="32"/>
                        <strong className="summoner-name">{leaderboard.summonerName}</strong>
                </a>
            </td>
            <td className="css-1gm6o8r e1g3wlsd7">{leaderboard.tier}</td>
            <td className="css-1oq0a1y e1g3wlsd6">{leaderboard.leaguePoints}</td>
            <td className="css-4qokog e1g3wlsd3">
                <a href="/champions/Rakan">
                    <div style={{position: "relative"}} className="">
                        <img
                            src="https://opgg-static.akamaized.net/meta/images/lol/champion/Rakan.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_64&amp;v=1684731456767"
                            width="32" alt="라칸" height="32"/>
                    </div>
                </a>
                <a href="/champions/Ashe">
                    <div style={{position: "relative"}} className="">
                        <img
                            src="https://opgg-static.akamaized.net/meta/images/lol/champion/Ashe.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_64&amp;v=1684731456767"
                            width="32" alt="애쉬" height="32"/>
                    </div>
                </a>
                <a href="/champions/Renata">
                    <div style={{position: "relative"}} className="">
                        <img
                            src="https://opgg-static.akamaized.net/meta/images/lol/champion/Renata.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_64&amp;v=1684731456767"
                            width="32" alt="레나타 글라스크" height="32"/>
                    </div>
                </a>
            </td>
            <td className="css-j6nsb0 e1g3wlsd5">282</td>
            <td className="css-oa0foq e1g3wlsd4">
                <div className="css-12hhsu4 e1qp7b622">
                    <div className="chart">
                        <div className="win" style={{width: `${percentageOfvictories}%`}}></div>
                        <div className="w">{leaderboard.wins}W</div>
                        <div className="l">{leaderboard.losses}L</div>
                    </div>
                    <div className="text">{percentageOfvictories}%</div>
                </div>
            </td>
        </tr>
    </>;
};

export default LeaderBoardContent;