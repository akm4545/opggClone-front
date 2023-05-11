import React from "react";
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1024px;
    margin: 0 auto;

    @media(max-width: 1024px){
        width: 768px;
    }
    @media(max-width: 768px){
        width: 100%;
    }
`;

//children 값은 받아서 렌더링 하고 나머지는 컴포넌트에 전달
const Responsive = ({children, ...rest}) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;