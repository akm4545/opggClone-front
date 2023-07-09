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
    const recentGame = () => {
        let winCnt = 0;
        let loseCnt = 0;
        let totalKills = 0;
        let totalAssists = 0;
        let totalDeaths = 0;
        let recentGameData = [];
        let recentChampion = {};
        if(matchList?.summonerMatches){
            matchList.summonerMatches.forEach(data => {
                let{win, kills, assists, deaths, championName} = data.summoner;
                if(win === true)
                    winCnt ++;
                else
                    loseCnt ++;

                totalKills += kills;
                totalAssists += assists;
                totalDeaths += deaths;
                if(recentChampion[championName]){
                    recentChampion[championName]++;
                }else{
                    recentChampion[championName] = 1;
                }
            })
            recentGameData = averageKDA(totalKills, totalAssists, totalDeaths, matchList.summonerMatches.length);
            recentGameData['winGame'] = winCnt;
            recentGameData['loseGame'] = loseCnt;
            recentGameData['recentChampion'] = recentChampion;
            matchList['recentGameData'] = recentGameData;
        }

    }

    const averageKDA = (kills, assists, deaths, gameCnt) => {
        return {averageKills : kills/gameCnt.toFixed(1), averageAssists : assists/gameCnt.toFixed(1), averageDeaths :deaths/gameCnt.toFixed(1), averageKDA : (kills+assists+deaths)/gameCnt.toFixed(1)};
    }

    useEffect(() => {
        if(!matchList && summonerName){
            dispatch(summonerSearchAction({summonerName}));
        }else{
            recentGame();
        }
    }, [dispatch, matchList])


    return(<>
        <SummonerWrapper matchList={matchList}></SummonerWrapper>
    </>)
}

export default SummonerContainer;
