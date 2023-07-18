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
            totalDeaths = 0, recentGameData = [], recentChampions = {}, gameKills = [];
        if(matchList?.summonerMatches){
            gameKills = teamKills(matchList.matches);
            matchList.summonerMatches.forEach(data => {
                let{win, kills, assists, deaths, championName, item0, item1, item2, item3, item4, item5, item6} = data.summoner;
                let items = [item0, item1, item2, item3, item4, item5, item6];
                if(win === true)
                    winCnt ++;
                else
                    loseCnt ++;

                totalKills += kills;
                totalAssists += assists;
                totalDeaths += deaths;

                data.summoner['items'] = items;
                recentPlayChampions(data.summoner, recentChampions);
            })
            recentGameData = averageKDA(totalKills, totalAssists, totalDeaths, matchList.summonerMatches.length);
            recentGameData['winGame'] = winCnt;
            recentGameData['loseGame'] = loseCnt;
            recentGameData['recentChampion'] = recentManyThree(recentChampions);
            matchList['totalKills'] = gameKills;
            matchList['recentGameData'] = recentGameData;

            console.log(matchList);
        }

    }

    const averageKDA = (kills, assists, deaths, gameCnt) => {
        return {averageKills : averageCalculator(kills, 0,gameCnt), averageAssists : averageCalculator(assists, 0,gameCnt), averageDeaths : averageCalculator(deaths, 0,gameCnt) , averageKDA : averageCalculator(kills, assists, deaths)} ;
    }

    const teamKills = (matches) => {
        let gameKills = [];
        let teamKills = {};
        matches.forEach(match => {
            let{info : {participants}} = match;
            let redTeam = {totalKills : 0}, blueTeam = {totalKills : 0};
            participants.forEach(participant => {
                if(participant.teamId === 100){
                    blueTeam.totalKills += participant.kills;
                }else{
                    redTeam.totalKills += participant.kills;
                }
            })
            teamKills.redTeam = redTeam;
            teamKills.blueTeam = blueTeam;
            gameKills.push(teamKills);
        })
        return gameKills;
    }

    const recentPlayChampions = ({championName, win, kills, assists, deaths}, recentChampions) => {
        let recentKda = averageCalculator(kills, assists, deaths);

        if(!recentChampions[championName]){
            let winLose = [];
            winLose.push(win);
            recentChampions[championName] = {};
            recentChampions[championName].winLose = winLose;
        }else{
            let existingValue = 0;
            let {winLose, kda} = recentChampions[championName];
            winLose.push(win);
            existingValue = parseFloat(kda);
            recentKda = averageCalculator(existingValue, recentKda, winLose.length);
        }
        recentChampions[championName].kda = recentKda;
        return recentChampions;
    }

    const averageCalculator = (value1, value2, value3) => {
        return parseFloat(((value1+value2)/value3).toFixed(2));
    }

    const recentManyThree = (obj) =>{
        let keys =  Object.keys(obj);
        let values = Object.values(obj);
        let temp = 0, result = [];
        for(let i=1; i<values.length; i++){
            for(let j =0; j<values.length-i; j++){
                if(values[j].winLose.length < values[j+1].winLose.length){
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
            let {winLose, kda} = obj[key];
            let resultObj = {};
            resultObj['championName'] = key;
            resultObj['winLose'] = winLose;
            resultObj['kda'] = kda;
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
