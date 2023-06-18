import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaderboardListAction, changeValue, initForm, leaderboardSearch } from "../../modules/leaderboard";
import LeaderBoardWrapper from "../../components/leaderboard/LeaderBoardWrapper";
import { useSearchParams } from "../../../node_modules/react-router-dom/dist/index";

const LeaderboardContainer = () => {
    const [searchParams, setSearchParames] = useSearchParams();
    const page = searchParams.get("page");

    const dispatch = useDispatch();

    const onChangeValue = (e) => {
        const {name, value} = e.target;
    
        dispatch(changeValue({key: name, value}));
    };

    const percentageOfvictoriesCalc = ({wins, losses}) => {
        const total = wins + losses;
        const divide = wins / total;
        
        return (divide * 100).toFixed(1);
    };

    const {leaderboardList, loading, err, userName} = useSelector(
        ({leaderboard, loading, err}) => ({
            leaderboardList: leaderboard.leaderboardList,
            userName: leaderboard.userName,
            err: err,
            loading: loading["leaderboard/LIST"]
        }));

    const moveTop = () => {
        window.scrollTo(0, 0);
    };

    const onKeyUp = (e) => {
        if(e.keyCode === 13){
            moveTop();
            dispatch(leaderboardSearch(userName));
        }
    };

    const onClick = () => {
        dispatch(initForm());
    };

    useEffect(() => {
        console.log(userName);

        if(userName == null){
            moveTop();
            dispatch(leaderboardListAction({page}));
            dispatch(initForm());
        }
    }, [dispatch, userName, page]);

    return (
        <>
            <LeaderBoardWrapper
                leaderboardList={leaderboardList}
                loading={loading}
                err={err}
                page={page}
                percentageOfvictoriesCalc={percentageOfvictoriesCalc}
                userName={userName}
                onChangeValue={onChangeValue}
                onKeyUp={onKeyUp}
                onClick={onClick}
            />
        </>
    );
};

export default LeaderboardContainer;
