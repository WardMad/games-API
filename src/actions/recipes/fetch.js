import APIClient from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import { RECIPE_PLAYERS_UPDATED } from './subscribe'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'
export const FETCHED_ONE_RECIPE = 'FETCHED_ONE_RECIPE'

const api = new APIClient()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })


        api.get('/recipes')
              .then(res => dispatch({ type: FETCHED_RECIPES, payload: res.body }))
              //.catch(err => dispatch(loadError(err))) ???

            // dispatch(loading(false)) // ???
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}

export const fetchPlayers = (recipe) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.get(`/recipes/${recipe._id}/players`)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: RECIPE_PLAYERS_UPDATED,
          payload: {
            recipe,
            players: result.body
          }
        })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}

export const fetchOneRecipe = (id) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.get(`/recipes/${id}`)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_ONE_RECIPE,
          payload: result.body
        })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
