import React from "react";

const BodyHeaderMenu = ({menuName, children}) => {
    return <>
        <div id="content-header" className="css-t1a859 e13kkiig0">
            <h1>{menuName}</h1>
            <nav>
                {children}
            </nav>
        </div>
    </>
};

export default BodyHeaderMenu;