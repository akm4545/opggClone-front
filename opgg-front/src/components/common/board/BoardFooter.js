import React from "react";

const BoardFooter = () => {
    return <>
        <div class="l-footer">
            <footer class="footer">
                <div class="footer-link">
                    <ul class="footer-link-list">
                        <li class="footer-link-list__item footer-link-list__item--mobile-hide">
                            <a href="http://www.op.gg/about/" target="_blank">
                                회사소개
                            </a>
                        </li>
                        <li class="footer-link-list__item ">
                            <a href="http://www.op.gg/about/agreement/" target="_blank">
                                이용약관
                            </a>
                        </li>
                        <li class="footer-link-list__item">
                            <a href="http://www.op.gg/about/privacy/" target="_blank">
                                개인정보처리방침
                            </a>
                        </li>
                        <li class="footer-link-list__item">
                            <a href="http://www.op.gg/about/youthPolicy/" target="_blank">
                                청소년 보호정책
                            </a>
                        </li>
                        <li class="footer-link-list__item footer-link-list__item--mobile-hide">
                            <a href="mailto:contact@op.gg">
                                제휴
                            </a>
                        </li>
                        <li class="footer-link-list__item">
                            <a href="mailto:service@op.gg">
                                문의/피드백
                            </a>
                        </li>
                        <li class="footer-link-list__item footer-link-list__item--mobile-hide">
                            <a href="http://log.op.gg/op-gg-recruit-wanted/" target="_blank">
                                채용
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <div class="corp-info">
                        <img src="https://talk.op.gg/images/img-logo-footer@2x.png" alt="OP.GG" class="corp-info__logo"/>
                        서울특별시 강남구 테헤란로 507 1층, 2층
                        <br/>
                        Tel: 02-455-9903 / Fax: 02-455-9904 ㈜오피지지 "대표자 : 최상락"
                        <br/> 
                        사업자등록번호 : 295-88-00023
                        <br/>
                        <br/>
                        © OP.GG. All rights reserved
                    </div>
                    <div class="corp-sns">
                        <ul class="corp-sns-list">
                            <li class="corp-sns-list__item">
                                <a href="https://twitter.com/GlobalOPGG" target="_blank">
                                    <img src="https://talk.op.gg/images/img-footer-twitter@2x.png" alt="Twitter"/>
                                </a>
                            </li>
                            <li class="corp-sns-list__item">
                                <a href="https://www.instagram.com/opgginc/" target="_blank">
                                    <img src="https://talk.op.gg/images/img-footer-instagram@2x.png" alt="Instagram"/>
                                </a>
                            </li>
                            <li class="corp-sns-list__item">
                                <a href="https://facebook.com/lolopgg" target="_blank">
                                    <img src="https://talk.op.gg/images/img-footer-facebook@2x.png" alt="Facebook"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    </>;
};

export default BoardFooter;