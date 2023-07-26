import asyncRequestBase from "./asyncRequestBase";

//const baseUrl = "http://127.0.0.1:8000/"
const baseUrl = "http://webapp:8000/"

export const AdList = () => {
    return asyncRequestBase("GET", `${baseUrl}ads`);
};

export const MainUserSearch = ({summonerName}) => {
    summonerName = encodeURIComponent(summonerName);
    return asyncRequestBase("GET", `${baseUrl}summoner/${summonerName}`);
};