import React from 'react'
import imgIconSystem from '../../images/iconos.png'

const IconSystem = () => {
    return (
        <div className="container">
            <h1>Sistema Iconográfico</h1>
            <hr className="hr"/>
            <p>
                Los iconos de nuestro sistema se basan en una
                estructura de linea light con border org'anicos.
            </p>
            <a 
            href="https://www.figma.com/proto/oob5O8j7YVKKtlLd8To6fn/design-system?node-id=585%3A146&scaling=scale-down-width"
            >
                <img src={ imgIconSystem } alt="iconSystem" />
            </a>
        </div>
    )
}

export default IconSystem