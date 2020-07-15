import React from 'react'

import '../../scss/atoms/Checkbox.scss'

const Checkbox = () => {
    return(
        <div className="container__checkbox">
            <div className="checkbox">
                <h3>Normal</h3>
                <input type="checkbox" id="check1" />
                <label htmlFor="check1">Check me!</label>
            </div>
            <div className="checkbox--active">
                <h3>Active</h3>
                <input type="checkbox" id="check2" defaultChecked="checked" />
                <label htmlFor="check2">Check me!</label>
            </div>
        </div>
    )
}

export default Checkbox