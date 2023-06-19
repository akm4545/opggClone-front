import React from "react";

const Error = () => {
    return <>
        <div className="css-1pdmpbt ec4h2cv0">
            <div className="title">다시 한번 확인해 주세요!</div>
            <div className="description">지금 입력하신 주소의 페이지는
                사라졌거나 다른 페이지로 변경되었습니다.
                주소를 다시 확인해주세요.

                관련 문의사항은 <a>오피지지 고객센터</a>에 알려주시면
                친절하게 안내해 드리겠습니다.</div>
            <div className="logo"><img src="https://s-lol-web.op.gg/images/site/error/img-404@2x.png?v=1686926528622" alt=""/></div>
            <div className="actions"><button>이전 페이지</button><a href="/">홈</a></div>
        </div>
    </>
};

export default Error;