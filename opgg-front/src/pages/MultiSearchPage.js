import React from "react";
import OpggHeader from "../components/common/header/OpggHeader";
import OpggFooter from "../components/common/footer/OpggFooter";
import BodySide from "../components/common/bodySideAD/BodySide";
import MultisearchContainer from "../containers/multisearch/MultisearchContainer";

const MultiSearchPage = () => {
    return <>
        <OpggHeader></OpggHeader>
        <BodySide></BodySide>
        <MultisearchContainer>
        </MultisearchContainer>
        <OpggFooter></OpggFooter>
    </>;
};

export default MultiSearchPage;