import asyncRequestBase from "./asyncRequestBase";

const baseUrl = "http://127.0.0.1:8000/"

export const leaderBoardList = ({page}) => {
    return asyncRequestBase("GET", `${baseUrl}leaderBoard?page=${page}`);
}