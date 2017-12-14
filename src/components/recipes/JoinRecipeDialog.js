// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import Dialog from 'material-ui/Dialog'
// import FlatButton from 'material-ui/FlatButton'
// import RaisedButton from 'material-ui/RaisedButton'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import joinRecipe from '../../actions/recipes/join'
//
// class JoinRecipeDialog extends PureComponent {
//   static propTypes = {
//     open: PropTypes.bool,
//   }
//
//   joinRecipe = () => {
//     const { joinRecipe, recipe } = this.props
//     joinRecipe(recipe)
//   }
//
//   render() {
//     const { currentUser, open } = this.props
//
//     const actions = [
//       <Link to="/">
//         <FlatButton
//           label="No Thanks"
//           primary={true} />
//       </Link>,
//       <RaisedButton
//         label="Join Recipe"
//         primary={true}
//         keyboardFocused={true}
//         onClick={this.joinRecipe}
//       />,
//     ]
//
//     return (
//       <div>
//         <Dialog
//           title="Join Recipe"
//           actions={actions}
//           modal={false}
//           open={open}
//           onRequestClose={this.handleClose}
//         >
//           Hey <strong>{currentUser.name || 'there'}!</strong> Would you like to join this recipe?
//         </Dialog>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = ({ currentUser, recipes }, { recipeId }) => {
//   const recipe = recipes.filter((g) => (g._id === recipeId))[0]
//   const isPlayer = recipe && recipe.players.filter((p) => (p.userId === currentUser._id)) > 0
//
//   return {
//     recipe,
//     currentUser,
//     isPlayer,
//     open: recipe && !isPlayer && recipe.players.length < 2
//   }
// }
//
// export default connect(mapStateToProps, { joinRecipe })(JoinRecipeDialog)
