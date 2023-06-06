import React from "react";
import {Link} from 'react-router-dom';

//index 페이지 생성 전 임시 페이지
const TempIndex = () => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/leaderboards?page=1">랭킹</Link>
                    </li> 
                    <li>
                        임시1 링크
                    </li>
                </ul> 
            </div>
        </>
    );
};

export default TempIndex;