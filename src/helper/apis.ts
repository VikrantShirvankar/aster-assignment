import { get } from "./https";
import * as url from "../constants/apis.constant";

export const getPopularMovies = (): any => get(url.GET_POPULAR_MOVIES, {});

export const searchMovies = (keyword: string): any => get(url.GET_POPULAR_MOVIES, {});
