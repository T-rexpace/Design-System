import React, { Fragment } from 'react'

import ComponentLayout from '../../components/ComponentLayout'

import imgColors from '../../images/colors.png'

const Colors = () => {
    return (
        <ComponentLayout
            title="Colores"
            underline={ true }
            component={
                <a href="https://www.figma.com/proto/oob5O8j7YVKKtlLd8To6fn/design-system?node-id=582%3A2068&scaling=scale-down-width">
                    <img src={ imgColors } alt="colors"/>
                </a>
            }
            details={
                <Fragment>
                    <h3>La paleta de colores consta de:</h3>
                    <p>1. Color Primario con escalas de claros y oscuros</p>
                    <p>2. Color Secundario con escalas de claros y oscuros</p>
                    <p>3. Escala de grises</p>
                    <p>4. Degradado</p>
                    <p>5. Color positivo y negativo para  indicadores de acciones</p>
                </Fragment>
            }
        />
    )
}

export default Colors