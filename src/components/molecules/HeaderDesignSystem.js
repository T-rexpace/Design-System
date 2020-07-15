import React from 'react'

import '../../scss/molecules/HeaderDesignSystem.scss'

const HeaderDesignSystem = (props) => (
  <header className="HeaderDesignSystem text-right">
    <h1>{ props.title }</h1>
  </header>
)

export default HeaderDesignSystem