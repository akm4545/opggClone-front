import react from "react";
import OpggHeader from "../components/common/header/OpggHeader";
import BodyHeaderMenu from "../components/common/bodyHeaderMenu/BodyHeaderMenu";
import BodySide from "../components/common/bodySideAD/BodySide";
import OpggFooter from "../components/common/footer/OpggFooter";
import BodyHeader from "../components/common/bodyHeaderAD/BodyHeader";
import SummonerContainer from "../containers/summoner/SummonerContainer";

const SummonerPage = () => {
    return <>
        <OpggHeader></OpggHeader>
        <BodyHeaderMenu></BodyHeaderMenu>
        {/*<BodySide></BodySide>*/}
        {/*메인 컨테이너 들어갈 위치*/}
        {/*<BodyHeader></BodyHeader>*/}
        <SummonerContainer></SummonerContainer>
        <OpggFooter></OpggFooter>
    </>
}

export default SummonerPage;