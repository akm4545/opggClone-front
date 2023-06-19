import React, {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {summonerSearchAction, changeValue, initForm} from "../../modules/main";
import {useSearchParams} from "../../../node_modules/react-router-dom/dist/index";
import MainWrapper from "../../components/main/MainWrapper";



const MainContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const optionOnclick = () => {
        console.log('클릭 이벤트 테스트');
    }

    // const {summoner}

    const onClickSearch = () => {
        // dispatch(summonerSearchAction());
    }

    // useEffect( () => {
    //     if()
    // })

    return(
        <>
            <MainWrapper
                optionOnclick={optionOnclick}
                onClickSearch = {onClickSearch}
            />
        </>
    )
}

export default MainContainer;