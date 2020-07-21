import React, { Fragment } from 'react'

import '../../scss/molecules/HeaderDesignSystem.scss'

const HeaderDesignSystem = (props) => (
  <Fragment>
    <header className="HeaderDesignSystem text-right">
      <h1>{ props.title }</h1>
    </header>
    { props.underline &&
      <div className="HeaderDesignSystem__underline" />
    }
  </Fragment>
)

export default HeaderDesignSystem