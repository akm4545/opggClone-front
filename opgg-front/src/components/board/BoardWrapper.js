import React from "react";
import BoardHeaderTop from "../common/board/BoardHeaderTop";
import BoardHeaderMiddle from "../common/board/BoardHeaderMiddle";
import BoardHeaderBanner from "../common/board/BoardHeaderBanner";
import BoardContent from "./BoardContent";
import BoardFooter from "../common/board/BoardFooter";
import "../../lib/css/app.css";
import "../../lib/css/index.css";

const BoardWrapper = () => {
    return <>
        <div className="l-wrap--list" data-logged-in="false">
            <BoardHeaderTop></BoardHeaderTop>
            <BoardHeaderMiddle></BoardHeaderMiddle>
            <BoardHeaderBanner></BoardHeaderBanner>
            <BoardContent></BoardContent>
            <BoardFooter></BoardFooter>
        </div>
    </>;
};

export default BoardWrapper;