import { fakeRequest } from "../fakeRequest.js";

export const fetchArticles = () => {
    const mockArticleData = sessionStorage.getItem("users-articles") ? JSON.parse(sessionStorage.getItem("users-articles"))
    : [];
    return fakeRequest(mockArticleData, 1000).then(response => response);
};

export const addArticle = articleData => {
    return fakeRequest(articleData, 1000).then(response => response);
};