import react, {useEffect} from "react";
import SummonerWrapper from "../../components/summoner/SummonerWrapper";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {summonerSearchAction} from "../../modules/main";

const SummonerContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const summonerName = searchParams.get("summonerName");
    const {matchList, err} = useSelector(({summoner}) => ({
        matchList : summoner.matchList,
        err : summoner.err
    }));


    const dispatch = useDispatch();
    const recentPlaySummoner = () => {
        matchList.forEach(match => {
            
        })
    }

    useEffect(() => {
        console.log(matchList);
        if(!matchList){
            dispatch(summonerSearchAction({summonerName}));
        }else{

        }
    }, [dispatch, matchList])


    return(<>
        <SummonerWrapper matchList={matchList}></SummonerWrapper>
    </>)
}

export default SummonerContainer;
