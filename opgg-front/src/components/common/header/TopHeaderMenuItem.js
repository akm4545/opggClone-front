import React from "react";

const TopHeaderMenuItem = ({title, imageSrc, link, marker}) => {
    return <>
        <li>
            {link ? (
                <a href={{link}}>
                    <TopHeaderMenuItemInfo
                        title={title}
                        imageSrc={imageSrc}
                        marker={marker}
                    />
                </a>    
            ) : (
                <span>
                    <TopHeaderMenuItemInfo
                        title={title}
                        imageSrc={imageSrc}
                        marker={marker}
                    />
                </span>
            )}
        </li>
    </>
};

const TopHeaderMenuItemInfo = ({imageSrc, title, marker}) => {
    return <>
        <img src={imageSrc} width="24" alt="전략적 팀 전투" height="24"/>
        {marker && (<span className="css-13oevom e8qzvbh0">{marker}</span>)}
        <span>
            {title}
        </span>
    </>
}

export default TopHeaderMenuItem;