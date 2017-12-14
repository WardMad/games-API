import React, { PureComponent } from 'react'
import HeartGrey from '../../images/heart-grey.svg'
import HeartRed from '../../images/heart-red.svg'
import './LikeButton.sass'

class LikeButton extends PureComponent {
  classNames() {
    const { liked } = this.props

    let classes = 'LikeButton'

    if (liked) { classes += ' liked' }

    return classes
  }

  render() {


    return (
      <p className={ this.classNames() }>

      </p>
    )
  }
}

export default LikeButton
