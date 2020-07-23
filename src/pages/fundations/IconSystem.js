import React, { Fragment } from 'react'

import HeaderDesignSystem from "../../components/molecules/HeaderDesignSystem";
import IconCard from '../../components/molecules/IconCard'

const IconSystem = () => {
  return (
    <Fragment>
      <HeaderDesignSystem
        title="Iconografía"
      />
      <div className="wrapper">
        <div className="row">
          <div className="column-12">
            <p>
              Los iconos de nuestro sistema se basan en una
              estructura de línea <em>light</em> con bordes orgánicos.
            </p>
            <p>
              Han sido creados como componentes bajo los siguientes nombres:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column-3">
            <IconCard
              link="#"
              name="<Arrow />"
            />
          </div>
          <div className="column-3">
            <IconCard
              link="#"
              name="<ArrowUp />"
            />
          </div>
          <div className="column-3">
            <IconCard
              link="#"
              name="<Close />"
            />
          </div>
          <div className="column-3">
            <IconCard
              link="#"
              name="<Star />"
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default IconSystem