import React from 'react'

import ComponentLayout from "../../components/ComponentLayout";

import imgIconSystem from '../../images/iconos.png'

const IconSystem = () => {
    return (
        <ComponentLayout 
            title="Sistema Iconográfico"
            component={
                <a href="https://www.figma.com/proto/oob5O8j7YVKKtlLd8To6fn/design-system?node-id=585%3A146&scaling=scale-down-width">
                    <img src={ imgIconSystem } alt="iconSystem" />
                </a>
            }
            details={
                <p>
                    Los iconos de nuestro sistema se basan en una
                    estructura de linea light con border orgánicos.
                </p>
            }
        />
    )
}

export default IconSystem