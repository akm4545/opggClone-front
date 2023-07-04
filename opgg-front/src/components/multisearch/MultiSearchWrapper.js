import React from "react";
import BodyHeader from "../../components/common/bodyHeaderAD/BodyHeader";
import MultiSearchTop from "../../components/multisearch/MultiSearchTop";
import MultiSearchContent from "../../components/multisearch/MultiSearchContent";

const MultiSearchWrapper = () => {
    return <>
        <h1 className="hidden">멀티서치</h1>
        <div className="css-1lvgb3t edatb60">
            <MultiSearchTop/>
            <BodyHeader/>
            <MultiSearchContent/>
        </div>
    </>
};

export default MultiSearchWrapper;