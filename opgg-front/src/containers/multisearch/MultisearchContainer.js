import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {multisearchAction, changeValue, initForm} from "../../modules/multisearch";
import MultiSearchWrapper from "../../components/multisearch/MultiSearchWrapper";

const MultisearchContainer = () => {
    return <>
        <MultiSearchWrapper></MultiSearchWrapper>
    </>
};

export default MultisearchContainer;