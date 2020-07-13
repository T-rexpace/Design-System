import React from 'react'
import imgSpacing from '../../images/spacing.png'

const Spacing = () => {
    return (
        <div className="container">
            <h1>Espaciado</h1>
            <hr className="hr"/>
            <p>
                Una unidad es equivalente a 10px, por lo cual 2 unidades 
                equivalen a 20px en nuestro sistema de espaciado. 
                Estas unidades definirán las dimensiones, el relleno 
                y margen de los elementos.
            </p>
            <a 
            href="https://www.figma.com/proto/oob5O8j7YVKKtlLd8To6fn/design-system?node-id=583%3A0&scaling=scale-down-width"
            >
                <img src={ imgSpacing } alt="spacing" />
            </a>
        </div>
    )
}

export default Spacing