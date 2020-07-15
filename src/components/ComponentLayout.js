import React, { Fragment } from 'react'
import HeaderDesignSystem from './molecules/HeaderDesignSystem'

const ComponentLayout = (props) => {
    return(
        <Fragment>
            <HeaderDesignSystem title={props.title}/>
            <div className="container">
                <div className="mt-5">
                    { props.component }
                </div>
                <div className="mt-5">
                    { props.details }
                </div>
                <div>
                    { props.code }
                </div>
            </div>
        </Fragment>
    )
}

export default ComponentLayout