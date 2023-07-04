import asyncRequestBase from "./asyncRequestBase";

const baseUrl = "http://127.0.0.1:8000/";

export const multiSearch = (name) => {
    name = encodeURIComponent(name);

    return asyncRequestBase("GET", `${baseUrl}multiSearch?userName=${name}`);
};