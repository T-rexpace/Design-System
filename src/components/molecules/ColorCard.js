import React from 'react'

import '../../scss/molecules/ColorCard.scss'

const ColorCard = (props) => {
  return (
    <article className="ColorCard">
      <div className={`ColorCard__color ${props.color}`}></div>
      <div className="ColorCard__details">
        <span> { props.token } </span>
        <span> { props.hexadecimal } </span>
      </div>
    </article>
  )
}

export default ColorCard