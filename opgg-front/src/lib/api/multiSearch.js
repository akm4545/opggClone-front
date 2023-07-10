import asyncRequestBase from "./asyncRequestBase";

const baseUrl = "http://127.0.0.1:8000/";

export const multiSearch = (summonerName) => {
    summonerName = encodeURIComponent(summonerName);

    return asyncRequestBase("GET", `${baseUrl}multiSearch?summonerName=${summonerName}`);
};