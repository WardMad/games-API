export const TOGGLE_LIKE_BATCH = 'TOGGLE_LIKE_BATCH'

export default (recipeId) => ({
  type: TOGGLE_LIKE_BATCH,
  payload: recipeId
})
