import React from 'react'

import './styles/Buttons.css'

const Buttons = () => (
    <div className="container">
        <h1>Botones</h1>
        <hr className="hr" />
        <div>
            <div className="containerButtons">
                <h2>Normales</h2>
                <button className="btn ormal"> 
                    Suscribirme
                </button>
                <button className="btn--normal-transparent">
                    Suscribirme
                </button>
            </div>

            <div className="containerButtons__active">
                <h2>Active</h2>
                <button className="btn--normal">
                    Suscribirme
                </button>
                <button className="btn--normal-transparent">
                    Suscribirme
                </button>
            </div>

            <div className="containerButtons__disable">
                <h2>Disabled</h2>
                <button className="btn--disable">
                    Suscribirme
                </button>
                <button className="btn--normal-transparentDisable">
                    Suscribirme
                </button>
            </div>

        </div>
    </div>
)

export default Buttons