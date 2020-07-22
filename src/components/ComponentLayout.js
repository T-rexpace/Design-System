import React, { Fragment } from 'react'
import HeaderDesignSystem from './molecules/HeaderDesignSystem'

const ComponentLayout = (props) => {
    return(
        <Fragment>
            <HeaderDesignSystem 
              title={ props.title }
              underline={ props.underline }
            />
            <div className="wrapper">
              <div className="row">
                <div className="column-12">
                  { props.subtitle &&
                      <h2 className="text-left h2--bb">{ props.subtitle }</h2>
                  }
                  <div className="mt-5">
                      { props.details }
                  </div>
                  <div className="mt-5">
                      { props.component }
                  </div>
                  <div>
                      { props.code }
                  </div>
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default ComponentLayout