import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaderboardListAction } from "../../modules/leaderboard";
import LeaderBoardWrapper from "../../components/leaderboard/LeaderBoardWrapper";
import { useSearchParams } from "../../../node_modules/react-router-dom/dist/index";

const percentageOfvictoriesCalc = ({wins, losses}) => {
    const total = wins + losses;
    const divide = wins / total;
    
    return (divide * 100).toFixed(1);
}

const LeaderboardContainer = () => {
    const [searchParams, setSearchParames] = useSearchParams();
    const page = searchParams.get("page");

    const dispatch = useDispatch();
    const {leaderboardList, loading, err} = useSelector(
        ({leaderboard, loading, err}) => {
            return {
                leaderboardList: leaderboard.leaderboardList,
                err: err,
                loading: loading["leaderboard/LIST"]
            }
        }
    ); 

    useEffect(() => {
        dispatch(leaderboardListAction({page}));
    }, [dispatch, page]);

    return (
        <>
            <LeaderBoardWrapper
                leaderboardList={leaderboardList}
                loading={loading}
                err={err}
                percentageOfvictoriesCalc={percentageOfvictoriesCalc}
            />
        </>
    );
};

export default LeaderboardContainer;
