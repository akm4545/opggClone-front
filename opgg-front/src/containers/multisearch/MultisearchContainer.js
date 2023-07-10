import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {multisearchAction, changeValue, initForm} from "../../modules/multisearch";
import MultiSearchWrapper from "../../components/multisearch/MultiSearchWrapper";

const MultisearchContainer = () => {
    const dispatch = useDispatch();

    const onChange = (e) => {
        const {name, value} = e.target;

        dispatch(changeValue({key:name, value}));
    };

    const {multisearch, err, summonerName} = useSelector(({multisearch, err}) => ({
        multisearch: multisearch.multisearch,
        err: multisearch.err,
        summonerName: multisearch.summonerName
    }));

    const moveTop = () => {
        window.scrollTo(0, 0);
    };

    const onClick = () => {
        moveTop();
        dispatch(multisearchAction(summonerName));
    };

    useEffect(() => {
        moveTop();
        dispatch(initForm());
    }, [dispatch, summonerName, multisearch]);

    return <>
        <MultiSearchWrapper
            onChange={onChange}
            onClick={onClick}
            multisearch={multisearch}
        />
    </>
};

export default MultisearchContainer;