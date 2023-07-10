import React from "react";
import MultiSearchUser from "./MultiSearchUser";

const MultiSearchDescription = () => {
    return <>
        <div className="info-box">
            <h2>멀티서치</h2>
            <div>
                <p className="content-title">채팅창의 내용을 붙여 넣으면, 게임에 참여중인 모든 유저를 요약하여 볼 수 있습니다!</p>
                <p className="content-subtitle">여러명의 소환사 이름으로 요약 검색</p><img
                    src="https://s-lol-web.op.gg/static/images/site/multi/multi-ko-png@2x.png?v=1687335464056" width="972"
                    alt="" height="333"/>
            </div>
        </div>
    </>
}

const MultiSearchContent = ({multisearch}) => {
    console.log(multisearch);

    return <>
        <div className="content" id="content-container">
            {multisearch === null ? <MultiSearchDescription/> 
                : (multisearch.map(gameInfo => (
                    <MultiSearchUser
                        key={gameInfo.name}
                        gameInfo={gameInfo}
                    />
                ))) }
        </div>
    </>
};

export default MultiSearchContent;