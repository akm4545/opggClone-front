import React from "react";
import BodyHeader from "../../components/common/bodyHeaderAD/BodyHeader";
import MultiSearchTop from "../../components/multisearch/MultiSearchTop";
import MultiSearchContent from "../../components/multisearch/MultiSearchContent";

const MultiSearchWrapper = ({onChange, onClick, multisearch}) => {
    return <>
        <h1 className="hidden">멀티서치</h1>
        <div className="css-1lvgb3t edatb60">
            <MultiSearchTop
                onClick={onClick}
                onChange={onChange}
            />
            <BodyHeader/>
            <MultiSearchContent
                multisearch={multisearch}
            />
        </div>
    </>
};

export default MultiSearchWrapper;