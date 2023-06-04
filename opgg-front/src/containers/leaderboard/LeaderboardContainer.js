import React, {useEffect} from "react";
import { useDispatch, useSelector } from "../../../node_modules/react-redux/es/exports";
import { leaderboardListAction } from "../../modules/leaderboard";
import LeaderBoardTable from "../../components/leaderboard/LeaderBoardTable";
import { useSearchParams } from "../../../node_modules/react-router-dom/dist/index";

const LeaderboardContainer = () => {
    const [searchParams, setSearchParames] = useSearchParams();
    const dispatch = useDispatch();
    const {leaderBoardList, loading, err} = useSelector(
        ({leaderboard, loading}) => {
            return {
                leaderBoardList: leaderboard,
                err: leaderboard.err,
                loading: loading["leaderboard/LIST"]
            }
        }
    ); 

    useEffect(() => {
        dispatch(leaderboardListAction());
    }, [dispatch]);

    return (
        <LeaderBoardTable
            leaderBoardList={leaderBoardList}
            loading={loading}
            err={err}
        />
    );
};

export default LeaderboardContainer;
