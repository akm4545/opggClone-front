import React from "react";
import BoardSideBar from "../common/board/BoardSideBar";
import BoardSideRight from "../common/board/BoardSideRight";
import BoardSubHeader from "../common/board/BoardSubHeader";
import BoardArticle from "./BoardArticle";

const BoardContent = ({children}) => {
    return <>
        <div className="l-content">
            <div className="game-info">
                <div className="game-info__background" style={{backgroundImage: "url('https://talk.op.gg/images/game/bg_lol.jpg')"}}></div>
                <div className="content">
                    <div className="game-info-content">
                        <a href="https://talk.op.gg/s/lol">
                            <img src="https://talk.op.gg/images/game/icon-community-lol.png" alt="" className="game-info__icon"/>
                                <h1 className="game-info__name">리그오브레전드</h1>
                        </a>
                    </div>
                    <form className="game-info-search" method="get" data-game-type="lol">
                        <input className="game-info-search__input" type="text" name="summonerName" placeholder="소환사 검색"/>
                        <button className="game-info-search__button">
                            <img src="https://talk.op.gg/images/btn-lol@2x.png" width="50" alt=""/>
                        </button>
                    </form>
                </div>
            </div>
            <div className="content">
                <BoardSideBar></BoardSideBar>
                <div id="content">
                    <BoardSubHeader></BoardSubHeader>
                    <div class="ads__gpt__728-90__mid">
                        <div style={{height: "90px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            margin: "0 auto",
                            overflow: "hidden"
                        }}>
                            <div id="div-gpt-ad-1562917435090-0">
                            </div>
                        </div>
                    </div>
                    <section className="article-list article-list--fixed"></section>
                    <BoardArticle></BoardArticle>
                </div>
                <BoardSideRight></BoardSideRight>
            </div>
        </div>
    </>;
};

export default BoardContent;