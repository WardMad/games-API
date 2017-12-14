// src/reducers/recipes.js
import batches from  '../fixtures/batches'
import {
  TOGGLE_LIKE_BATCHES,
  FETCHED_BATCHES,
  CREATE_BATCH,
  // FETCH_ONE_BATCH,
} from '../actions/recipes'

const newId = (state) => {
  const ids = state
    .map((recipe) => recipe._id)
    .sort()
  return ['abcd', parseInt(ids[ids.length - 1].split('abcd')[1], 10) + 1].join('')
}

export default (state = batches, {type, payload} = {}) => {
  switch(type) {
    case FETCHED_BATCHES :
      return [ ...payload ]

    case CREATE_BATCH :
      return [{ ...payload, _id: newId(state) }].concat(state)

    case TOGGLE_LIKE_BATCHES :
      return state.map((recipe) => {
        if (recipe._id === payload) {
          return { ...recipe, liked: !recipe.liked }
        }

        return recipe
      })

    default :
      return state
  }
}
