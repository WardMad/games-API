import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchRecipes, { fetchPlayers } from '../actions/recipes/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'
import CreateRecipeButton from '../components/recipes/CreateRecipeButton'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import WatchRecipeIcon from 'material-ui/svg-icons/image/remove-red-eye'
import JoinRecipeIcon from 'material-ui/svg-icons/social/person-add'

import WaitingIcon from 'material-ui/svg-icons/image/timelapse'
import './Lobby.css'

class Lobby extends PureComponent {
  componentWillMount() {
    this.props.fetchRecipes()
    this.props.subscribeToWebsocket()
  }

  goToRecipe = recipeId => event => this.props.push(`/play/${recipeId}`)


  isPlayer(recipe) {
    if (!this.props.currentUser) { return false }
    return recipe.players.map(p => p.userId)
      .indexOf(this.props.currentUser._id) >= 0
  }

  isPlayable(recipe) {
    return recipe.players.length === 2
  }








  render() {
    return (
      <div className="Lobby">
        <h1> </h1>
        <CreateRecipeButton />
        <Paper className="paper">
          <Menu>

          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes, currentUser }) => ({ recipes, currentUser })

export default connect(mapStateToProps, { fetchRecipes, subscribeToWebsocket, fetchPlayers, push })(Lobby)
