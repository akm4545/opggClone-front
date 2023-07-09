import react from "react";
import SummonerHeader from "./SummonerHeader";
import SummonerNav from "./SummonerNav";
import SummonerBanner from "./SummonerBanner";
import SummonerBodyWrapper from "./SummonerBodyWrapper";
import Error from "../common/error/Error";
const SummonerWrapper = ({matchList}) => {
    return (
        <>
            {matchList?.recentGameData  ? (
                <>
                    <SummonerHeader></SummonerHeader>
                    <SummonerNav></SummonerNav>
                    <SummonerBanner></SummonerBanner>
                    <SummonerBodyWrapper matchList={matchList}></SummonerBodyWrapper>
                </>
            ) : (
                <>
                    <Error></Error>
                </>)}
        </>
    )
}

export default SummonerWrapper;