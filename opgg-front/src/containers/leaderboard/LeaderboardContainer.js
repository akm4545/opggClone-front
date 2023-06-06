import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaderboardListAction } from "../../modules/leaderboard";
import LeaderBoardWrapper from "../../components/leaderboard/LeaderBoardWrapper";
import { useSearchParams } from "../../../node_modules/react-router-dom/dist/index";

const LeaderboardContainer = () => {
    const [searchParams, setSearchParames] = useSearchParams();
    const page = searchParams.get("page");

    const dispatch = useDispatch();
    const {leaderBoardList, loading, err} = useSelector(
        ({leaderboardList, loading, err}) => {
            return {
                leaderBoardList: leaderboardList,
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
                leaderBoardList={leaderBoardList}
                loading={loading}
                err={err}
            />
        </>
    );
};

export default LeaderboardContainer;
