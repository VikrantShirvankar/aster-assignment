import { get } from "./https";
import * as url from "../constants/apis.constant";

export const getMovieList = (keyword: string): any => {
    const apiEndPoint = keyword ? url.SEARCH_MOVIES + '&query=' + keyword : url.GET_POPULAR_MOVIES;
    return get(apiEndPoint, {})
};
