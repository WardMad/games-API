// // src/components/games/CreateGameButton.js
// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import createGame from '../../actions/games/create'
//
// class Board extends PureComponent {
//   static propTypes = {
//     signedIn: PropTypes.bool,
//   }
//
//   render() {
//     if (!this.props.signedIn) return null
//
//     return (
//       <div className="CreateGameButton">
//         <RaisedButton
//           label="Create Game"
//           primary={true}
//           onClick={this.props.createGame}
//           icon={<StarIcon />} />
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = ({ currentUser }) => ({
//   signedIn: !!currentUser && !!currentUser._id,
// })
//
// export default connect(mapStateToProps, { createGame })(CreateGameButton)
