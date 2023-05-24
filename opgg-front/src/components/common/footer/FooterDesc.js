import React from "react";

const snsItmeArray = [
    {
        link:"https://twitter.com/globalopgg/",
        imageSrc:"https://s-lol-web.op.gg/images/icon/icon-logo-twitter.svg?v=1684072072754",
    },
    {
        link:"https://www.instagram.com/opgginc/",
        imageSrc:"https://s-lol-web.op.gg/images/icon/icon-logo-instagram.svg?v=1684072072754",
    },
    {
        link:"https://www.facebook.com/lolopgg/",
        imageSrc:"https://s-lol-web.op.gg/images/icon/icon-logo-facebook.svg?v=1684072072754",
    },
];

const SnsImte = ({link, imageSrc}) => {
    return <>
        <a target="_blank" href={link} rel="noreferrer">
            <img src={imageSrc} width="24" alt="twitter account" height="24" loading="lazy"/>
        </a>
    </>;
};

const FooterDesc = () => {
    return <>
        <section>
            <small>
                © 20122023OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t reflect the
                views or opinions of Riot Games or anyone officially involved in producing or managing League of
                Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
                League of Legends © Riot Games, Inc.
            </small>
            <nav className="sns">
                {snsItmeArray.map(({link, imageSrc}) => (
                    <SnsImte
                        link={link}
                        imageSrc={imageSrc}
                    />
                ))}
            </nav>
        </section>
    </>
}

export default FooterDesc;