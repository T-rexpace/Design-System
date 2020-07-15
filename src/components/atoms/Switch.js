import React from 'react'

import '../../scss/atoms/Switch.scss'

const Switch = () => {
    const turnSwitch = () => {
        const switchBox = document.getElementById('switchBox')
        switchBox.classList.toggle('switch__box--active')
    }

    return(
        <div className="container__switch">
            <div className="switch">
                <h3>Normal</h3>
                <div className="switch__box" id="switchBox">
                    <div 
                        className="switch__circle"
                        onClick={ turnSwitch }
                    ></div>
                </div>
            </div>
            <div className="switch--active">
                <h3>Active</h3>
                <div className="switch__box--active">
                    <div className="switch__circle"></div>
                </div>
            </div>
        </div>
    )
}

export default Switch