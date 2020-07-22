import React, { Fragment } from 'react'

import HeaderDesignSystem from '../../components/molecules/HeaderDesignSystem'

const Grid = () => {
  return(
    <Fragment>
      <HeaderDesignSystem
        title='Grid'
      />
      <div className="wrapper">
        <div className="row">
          <div className="column-12">
            <p>
              Nos basamos en el sistema de grillas de <a href="https://webdesign.tutsplus.com/tutorials/a-simple-responsive-grid-made-even-better-with-sass--cms-21540" target="_blank">Ian Yates</a>. Este nos ofrece 
              una estructura sencilla empleando tres elementos: wrapper, row 
              y column. Para conocer más visita la documentación.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column-3 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-3</small></p>
          </div>
          <div className="column-3 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-3</small></p>
          </div>
          <div className="column-6 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-6</small></p>
          </div>
        </div>
        <div className="row">
          <div className="column-4 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-4</small></p>
          </div>
          <div className="column-4 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-4</small></p>
          </div>
          <div className="column-4 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-4</small></p>
          </div>
        </div>
        <div className="row">
          <div className="column-2 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-2</small></p>
          </div>
          <div className="column-2 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-2</small></p>
          </div>
          <div className="column-1 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>-1</small></p>
          </div>
          <div className="column-5 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-5</small></p>
          </div>
          <div className="column-1 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>-1</small></p>
          </div>
          <div className="column-1 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>-1</small></p>
          </div>
        </div>
        <div className="row">
          <div className="column-12 pt-0">
            <p className="bg-primary text-center mb-0 pb-10"><small>.column-12</small></p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Grid