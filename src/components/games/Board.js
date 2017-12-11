import React, { Component } from 'react'
import '../../containers/Game.css'

class Board extends Component {

  render() {
    return (
      <div className ='Board'>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Board
