import React from 'react'

import ComponentLayout from '../../components/ComponentLayout'

import imgSpacing from '../../images/spacing.png'

const Spacing = () => {
    return (
        <ComponentLayout 
            title="Espaciado"
            component={
                <a href="https://www.figma.com/proto/oob5O8j7YVKKtlLd8To6fn/design-system?node-id=583%3A0&scaling=scale-down-width">
                    <img src={ imgSpacing } alt="spacing" />
                </a>
            }
            details={
                <p>
                    Una unidad es equivalente a 10px, por lo cual 2 unidades 
                    equivalen a 20px en nuestro sistema de espaciado. 
                    Estas unidades definirán las dimensiones, el relleno 
                    y margen de los elementos.
                </p>
            }
        />
    )
}

export default Spacing