import asyncRequestBase from "./asyncRequestBase";

const baseUrl = "http://127.0.0.1:8000/"

export const AdList = () => {
    return asyncRequestBase("GET", `${baseUrl}ads`);
};

export const MainUserSearch = (name) => {
    name = encodeURIComponent(name);
    return asyncRequestBase("GET", `${baseUrl}summoner/${name}`);
};