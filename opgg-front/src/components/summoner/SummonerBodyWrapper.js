import react from "react";
import SummonerLeftSide from "./SummonerLeftSide";
import SummonerMatch from "./SummonerMatch";
const SummonerBodyWrapper = () => {
    return (
        <>
            <div id="content-container" className="css-8whjbz e8nboil1">
                <SummonerLeftSide></SummonerLeftSide>
                <SummonerMatch></SummonerMatch>
            </div>
        </>
    )
}

export default SummonerBodyWrapper;