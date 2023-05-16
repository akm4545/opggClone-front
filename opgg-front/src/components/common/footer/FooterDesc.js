import React from "react";

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
                <a target="_blank" href="https://twitter.com/globalopgg/" rel="noreferrer">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-logo-twitter.svg?v=1684072072754" width="24" alt="twitter account" height="24" loading="lazy"/>
                </a>
                <a target="_blank" href="https://www.instagram.com/opgginc/" rel="noreferrer">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-logo-instagram.svg?v=1684072072754" width="24" alt="instagram account" height="24" loading="lazy"/>
                </a>
                <a target="_blank" href="https://www.facebook.com/lolopgg/" rel="noreferrer">
                    <img src="https://s-lol-web.op.gg/images/icon/icon-logo-facebook.svg?v=1684072072754" width="24" alt="facebook account" height="24" loading="lazy"/>
                </a>
            </nav>
        </section>
    </>
}

export default FooterDesc;