import React from "react";
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import palette from "../../lib/styles/palette";

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover{
        background: ${palette.gray[6]};
    }

    //props값을 사용하여 동적으로 css변경
    ${props =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `
    }

    ${props =>
        props.cyan &&
        css`
            background: ${palette.cyan[5]};
            $:hover{
                background: ${palette.cyan[4]};
            }
        `
    }
`;

//styled를 사용하여 button을 만드는데 css를 전달
const StyledButton = styled.button`${buttonStyle}`;

//Link컴포넌트를 css스타일을 전달하여 생성
const StyledLink = styled(Link)`${buttonStyle}`;

//props의 값에 따라 다른 컴포넌트를 생성
const Button = props => {
    return props.to ? (
        //props로 들어온 값에 cyan이 존재한다면 cyan을 true로 변경
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} /> 
    ) : (
        <StyledButton {...props} />
    );
};

export default Button;