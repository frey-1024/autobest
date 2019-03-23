import {createAction} from 'redux-actions';
import type from '../constants/actionType';
// https://www.redux.org.cn/docs/recipes/ReducingBoilerplate.html
const getMovieList = createAction(type.MOVIE_LIST, actions.movieList)