import APIClient from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'


export const FETCHED_BATCHES = 'FETCHED_BATCHES'
export const FETCHED_ONE_BATCH = 'FETCHED_ONE_BATCH'

const api = new APIClient()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })


        api.get('/recipes')
              .then(res => dispatch({ type: FETCHED_BATCHES, payload: res.body }))
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

export const fetchOneBatch = (id) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.get(`/butches/${id}`)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_ONE_BATCH,
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
