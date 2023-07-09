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
        let winCnt = 0, loseCnt = 0, totalKills = 0, totalAssists = 0,
            totalDeaths = 0, recentGameData = [], recentChampions = {};
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

                recentPlayChampions(championName, win, recentChampions);
            })

            recentGameData = averageKDA(totalKills, totalAssists, totalDeaths, matchList.summonerMatches.length);
            recentGameData['winGame'] = winCnt;
            recentGameData['loseGame'] = loseCnt;
            recentGameData['recentChampion'] = recentManyThree(recentChampions);;
            matchList['recentGameData'] = recentGameData;

            console.log(recentGameData);
        }

    }

    const averageKDA = (kills, assists, deaths, gameCnt) => {
        return {averageKills : kills/gameCnt.toFixed(1), averageAssists : assists/gameCnt.toFixed(1), averageDeaths :deaths/gameCnt.toFixed(1), averageKDA : (kills+assists+deaths)/gameCnt.toFixed(1)};
    }

    const recentPlayChampions = (championName, win, recentChampions) => {
        if(!recentChampions[championName]){
            let winLose = [];
            recentChampions[championName] = championName;
            winLose.push(win);
            recentChampions[championName] = winLose;
        }else{
            recentChampions[championName].push(win);
        }

        return recentChampions;
    }

    const recentManyThree = (obj) =>{
        let keys =  Object.keys(obj);
        let values = Object.values(obj);
        let temp = 0, result = [];
        for(let i=1; i<values.length; i++){
            for(let j =0; j<values.length-i; j++){
                if(values[j].length < values[j+1].length){
                    temp = keys[j];
                    keys[j] = keys[j+1];
                    keys[j+1] = temp;
                    temp = values[j];
                    values[j] = values[j+1];
                    values[j+1] = temp;
                }
            }
        }

        let [one, two, three, ...remain]=keys;
        let keyArr = [one, two, three];
        keyArr.forEach(key => {
            let resultObj = {};
            resultObj['championName'] = key;
            resultObj['winLose'] = obj[key];
            result.push(resultObj);
        })

        return result;
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
