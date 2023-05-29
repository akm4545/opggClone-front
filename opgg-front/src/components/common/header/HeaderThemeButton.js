import React from "react";

const HeaderThemeButton = ({marginLeft, className}) => {
    return <>
        <div style={{position:"relative",fontSize:0,marginLeft:marginLeft}} className="">
            <button className={className}>
                <span className="hidden">
                    Theme Button
                </span>
            </button>
        </div>
    </>
};

export default HeaderThemeButton;