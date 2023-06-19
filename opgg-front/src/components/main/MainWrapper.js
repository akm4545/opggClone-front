import react from 'react';
import MainOpggLogo from "./MainOpggLogo";
import MainSearchContainer from "./MainSearchContainer";
import MainAdBanner from "./MainAdBanner";
import MainBodyWrapper from "./MainBodyWrapper";

const MainWrapper = ({optionOnclick, onClickSearch}) => {
    return <>
        <div id="content-container" className="css-1q6fpdb e1oup1a81">
            <MainOpggLogo></MainOpggLogo>
            <MainSearchContainer
                optionOnclick={optionOnclick}
                onClickSearch={onClickSearch}
            />
            <MainAdBanner></MainAdBanner>
            <MainBodyWrapper></MainBodyWrapper>
        </div>
    </>
}

export default MainWrapper;