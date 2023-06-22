import react from "react";
import SummonerHeader from "./SummonerHeader";
import SummonerNav from "./SummonerNav";
import SummonerBanner from "./SummonerBanner";
import SummonerBodyWrapper from "./SummonerBodyWrapper";
const SummonerWrapper = ({matchList}) => {
    return (
        <>
            <SummonerHeader></SummonerHeader>
            <SummonerNav></SummonerNav>
            <SummonerBanner></SummonerBanner>
            <SummonerBodyWrapper matchList={matchList}></SummonerBodyWrapper>

        </>
    )
}

export default SummonerWrapper;