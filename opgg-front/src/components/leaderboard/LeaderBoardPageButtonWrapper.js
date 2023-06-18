import React from "react";
import { Link } from "../../../node_modules/react-router-dom/dist/index";

const LeaderBoardPageButton = ({page, currentPage, onClick}) => {
    return <>
        <Link 
            to={`/leaderboards?page=${page + 1}`} 
            className={`${page + 1 == currentPage ? "css-1ihi8rc" : "css-1unhkzz"} eykbi2q0`}
            onClick={e => onClick()}
        >
            {page + 1}
        </Link>
    </>
}

const pageButtonRendering = (page, onClick) => {
    const result = [];
    const pageBoundery = Math.floor(page / 10);

    let startPage = pageBoundery === 0 ? pageBoundery : pageBoundery + 9;
    let endPage = startPage + 10;
    
    for (startPage; startPage<endPage; startPage++){
        result.push(<LeaderBoardPageButton 
                key={startPage}
                page={startPage}
                currentPage={page}
                onClick={onClick}
            />
        );
    }

    return result;
};

const startArrowPage = (page) => {
    const pageBoundery = Math.floor(page / 10);
    let startPage = pageBoundery === 0 ? pageBoundery : pageBoundery + 9;

    return startPage;
};

const endArrowPage = (page) => {
    const pageBoundery = Math.floor(page / 10);

    let startPage = pageBoundery === 0 ? pageBoundery : pageBoundery + 9;
    let endPage = startPage + 11;

    return endPage;
};

const LeaderBoardPageButtonWrapper = ({page, onClick}) => {
    return <>
        <div className="css-12a82cm eykbi2q1">
            <p>#1 ~ #100 / 총 3,255,671 소환사</p>
            <div>
                <a href={`/leaderboards?page=${startArrowPage(page)}`} className="css-1unhkzz eykbi2q0">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-arrow-left.svg?v=1686562241342" width="24" alt="prev" height="24"/>
                </a>
                <div>
                    {pageButtonRendering(page, onClick)}
                </div>
                <a href={`/leaderboards?page=${endArrowPage(page)}`} className="css-1unhkzz eykbi2q0">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg?v=1686562241342" width="24" alt="next" height="24"/>
                </a>
            </div>
        </div>
    </>
};

export default LeaderBoardPageButtonWrapper;