import React from "react";

const HeaderBottomMenuItem = ({link, menu}) => {
    return <>
        <li className="route-item">
            <a data-key="TALK" href={link} className="css-pzz37k e19s97d50">{menu}</a>
        </li>
    </>
};

export default HeaderBottomMenuItem;