import React from "react";

const BoardSubHeader = () => {
    return <>
        <div className="sub-header">
            <div className="sub-header-info" style={{zIndex: "1000"}}>
                <h2 className="sub-header__title">
                    <a href="https://talk.op.gg/s/lol/all">전체</a>
                </h2>
                <ul className="sub-header-button">
                    <li className="sub-header-button__item sub-header-button__item--search">
                        <button id="search-toggle-button" className="button">검색하기</button>
                    </li>
                    <li className="sub-header-button__item">
                        <a href="https://talk.op.gg/s/lol/all/write">
                            <img src="https://talk.op.gg/images/icon-write@2x.png" alt="글쓰기" width="24"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sub-link" id="sub-menu" style={{zIndex: "1000", position: "static", top: "auto"}}>
                <ul className="sub-link__list">
                    <li className="sub-link__item sub-link__item--active">
                        <a href="https://talk.op.gg/s/lol/all?sort=popular">
                            <img src="https://talk.op.gg/images/icon-hot-on@2x.png" width="24" alt=""/>
                            <span>인기</span>
                        </a>
                    </li>
                    <li className="sub-link__item ">
                        <a href="https://talk.op.gg/s/lol/all">
                            <img src="https://talk.op.gg/images/icon-new@2x.png" width="24" alt=""/>
                            <span>최신</span>
                        </a>
                    </li>
                    <li className="sub-link__item ">
                        <a href="https://talk.op.gg/s/lol/all?sort=top">
                            <img src="https://talk.op.gg/images/icon-top@2x.png" width="24" alt=""/>
                            <span>TOP</span>
                        </a>
                        <div data-v-36596628="" className="container" id="sort-dropdown">
                            <button data-v-36596628="" className="active">
                                전체
                                <i data-v-36596628="" className="fa fa-angle-down"></i>
                            </button>
                            <nav data-v-36596628="" className="navigation">
                                <a data-v-36596628="" href="https://talk.op.gg/s/lol/all?sort=top-day" className="">
                                    지난 1일
                                </a>
                                <a data-v-36596628="" href="https://talk.op.gg/s/lol/all?sort=top-week" className="">
                                    지난 1주
                                </a>
                                <a data-v-36596628="" href="https://talk.op.gg/s/lol/all?sort=top-month" className="">
                                    지난 1개월
                                </a>
                                <a data-v-36596628="" href="https://talk.op.gg/s/lol/all?sort=top-year" className="">
                                    지난 1년
                                </a>
                                <a data-v-36596628="" href="https://talk.op.gg/s/lol/all?sort=top" className="">
                                    전체
                                </a>
                            </nav>
                        </div>
                    </li>
                    <li className="sub-link__item ">
                        <a href="https://talk.op.gg/s/lol/all?sort=10">
                            <img src="https://talk.op.gg/images/icon-boost@2x.png" width="24" alt=""/>
                            <span>10추</span>
                        </a>
                    </li>
                </ul>
                <div className="sub-header-search">
                    <form action="" id="sub-search">
                        <label>
                            <select name="target" className="sub-header-search__select">
                                <option value="title">제목</option>  
                                <option value="user_name">작성자</option>
                            </select>
                        </label>
                        <input type="text" name="q" className="sub-header-search__input" id="search-input" placeholder="검색"/>
                        <button className="sub-header-search__button">
                            <img src="https://talk.op.gg/images/icon-search@2x.png" width="24" alt="검색"/>
                        </button>
                    </form>
                </div>
            </div>
            <div style={{display: "none", width: "728px", height: "48px", float: "none"}}></div>
        </div>
    </>
};

export default BoardSubHeader;