import React from "react";
import HeaderTopMenu from "./HeaderTopMenu";
import HeaderMiddleSearchBar from "./HeaderMiddleSearchBar";
import HeaderBottomMenu from "./HeaderBottomMenu";

const OpggHeader = () => {
    return <>
        <header className="desktop-header css-16nzi5j eto4p5w0">
            <HeaderTopMenu></HeaderTopMenu>
            <HeaderMiddleSearchBar></HeaderMiddleSearchBar>
            <HeaderBottomMenu></HeaderBottomMenu>
        </header>
    </>
}

export default OpggHeader;