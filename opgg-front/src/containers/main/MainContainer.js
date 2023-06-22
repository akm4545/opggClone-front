import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import summoner, {summonerSearchAction, changeValue, initForm} from "../../modules/main";
import MainWrapper from "../../components/main/MainWrapper";



const MainContainer = () => {
    const dispatch = useDispatch();

    const {summonerName, err} = useSelector(({summoner}) => ({
        summonerName : summoner.summonerName,
        err : summoner.err
    }));

    const optionOnclick = () => {
    }

    const onClickSearch = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        location.href = `/summoner/kr/${summonerName}`;
    }

    const onChange = e => {
        const {value} = e.target;
        dispatch(
            changeValue({
                key: "summonerName",
                value,
            })
        )
    }

    return(
        <>
            <MainWrapper
                optionOnclick={optionOnclick}
                summonerName = {summonerName}
                onClickSearch = {onClickSearch}
                onChange = {onChange}
            />
        </>
    )
}

export default MainContainer;