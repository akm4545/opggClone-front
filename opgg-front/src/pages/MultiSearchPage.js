import React from "react";
import OpggHeader from "../components/common/header/OpggHeader";
import OpggFooter from "../components/common/footer/OpggFooter";
import BodySide from "../components/common/bodySideAD/BodySide";
import BodyHeader from "../components/common/bodyHeaderAD/BodyHeader";
import MultiSearchWrapper from "../components/multisearch/MultiSearchWrapper";
import MultiSearchTop from "../components/multisearch/MultiSearchTop";
import MultiSearchContent from "../components/multisearch/MultiSearchContent";

const MultiSearchPage = () => {
    return <>
        <OpggHeader></OpggHeader>
        <BodySide></BodySide>
        <MultiSearchWrapper>
            <MultiSearchTop/>
            <BodyHeader/>
            <MultiSearchContent/>
        </MultiSearchWrapper>
        <OpggFooter></OpggFooter>
    </>;
};

export default MultiSearchPage;