import react from 'react';
import MainOpggLogo from "./MainOpggLogo";
import MainSearchContainer from "./MainSearchContainer";
import MainAdBanner from "./MainAdBanner";
import MainBodyWrapper from "./MainBodyWrapper";

const MainWrapper = ({optionOnclick, onClickSearch, summonerName, onChange}) => {
    return <>
        <div id="content-container" className="css-1q6fpdb e1oup1a81">
            <MainOpggLogo></MainOpggLogo>
            <MainSearchContainer
                optionOnclick={optionOnclick}
                onClickSearch={onClickSearch}
                summonerName={summonerName}
                onChange={onChange}
            />
            <MainAdBanner></MainAdBanner>
            <MainBodyWrapper></MainBodyWrapper>
        </div>
    </>
}

export default MainWrapper;