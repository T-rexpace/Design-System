import React from 'react'

import imgColors from '../../images/colors.png'

const Colors = () => {
    return (
        <div className="container">
            <h1>Colores</h1>
            <hr className="hr"/>
            <a 
            href="https://www.figma.com/proto/oob5O8j7YVKKtlLd8To6fn/design-system?node-id=582%3A2068&scaling=scale-down-width"
            >
                <img src={ imgColors } alt="colors"/>
            </a>
        </div>
    )
}

export default Colors