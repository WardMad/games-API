import React, { Component } from 'react'
import '../../containers/Game.css'

class Board extends Component {

  render() {
    return (
      <div className ='Board'>
        <table>
          <tbody>
            <tr>
              <td> <input type="button" onClick={ticTactoe} id="t1" value=' ' /></td>
              <td> <input type="button" onClick={ticTactoe} id="t2" value=' ' /></td>
              <td> <input type="button" onClick={ticTactoe} id="t3" value=' ' /></td>
            </tr>
            <tr>
              <td> <input type="button" onClick={ticTactoe} id="t4" value=' ' /></td>
              <td> <input type="button" onClick={ticTactoe} id="t5" value=' ' /></td>
              <td> <input type="button" onClick={ticTactoe} id="t6" value=' ' /></td>
            </tr>
            <tr>
              <td> <input type="button" onClick={ticTactoe} id="t7" value=' ' /></td>
              <td> <input type="button" onClick={ticTactoe} id="t8" value=' ' /></td>
              <td> <input type="button" onClick={ticTactoe} id="t9" value=' ' /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
    var turn = 'X';
    var xMove = [];
    var oMove = [];
    var howTowin = [
    't1/t2/t3',
    't4/t5/t6',
    't7/t8/t9',
    't1/t4/t7',
    't2/t5/t8',
    't3/t6/t9',
    't1/t5/t9',
    't3/t5/t7'
  ];
    var winner = '';
    var gameOver = false;

    function ticTactoe(){
      if (gameOver === false && this.value === ' '){
        if (turn === 'X'){
          this.value = turn;
          xMove[xMove.length] = this.id;
          turn = 'O';
        }
        else {
            this.value = turn;
            oMove[oMove.length] = this.id;
            turn = 'X';
          }
      }
      if(xMove.length >2){
        winner = endGame();
      }
      if (gameOver && winner !=='' && winner !=='draw'){
        alert(winner + ' is the winner! ');
      }
      if (!gameOver && winner === 'draw'){
        alert('It is a draw!');
      }
    }
    function endGame(){
      var winningCombinations = [];

      gameOver = true;

      for(var index = 0; index < 8; index++){
        var xCount = 0;
        var oCount = 0;
        winningCombinations = howTowin[index].split('/');

          for(var i = 0; i < 3; i++){
            console.log('winningCombinations ' + winningCombinations[i]);
            for(var j = 0; j < xMove.length; j = j + 1){
              console.log('xMove ' + xMove[j]);
              if(winningCombinations[i] === xMove[j]){
                   xCount++;
                   if(xCount === 3){
                       return 'X';
                   }
               }
           }
           for(var k = 0; k < oMove.length; k = k + 1){
             if(winningCombinations[i] === oMove[k]){
                      oCount = oCount + 1;
                      if(oCount === 3){
                          return 'O';
                      }
                  }
              }
          }
        }
        console.log('x Move Count ' + xMove.length);
        console.log('o Move Count ' + oMove.length);

        if(xCount < 3 && oCount < 3){
            gameOver = false;
        }

        if(xMove.length + oMove.length === 9){
            return 'draw';
        }
      }
    }
  }


export default Board
