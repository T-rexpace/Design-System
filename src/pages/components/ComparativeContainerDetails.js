import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { ComparativeContainerString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import ComparativeContainer from '../../components/molecules/ComparativeContainer'

const ComparativeContainerDetails = () => {
    return(
        <ComponentLayout 
            title="Comparative Container"
            underline={ true }
            details={
                <p>
                    Comparative Container se mostrará en la pantalla Home,
                    y le permitirá al usuario seleccionar hasta 5 asteroides
                    de la sección para ir a las gráficas de comparación
                </p>
            }
            component={ <ComparativeContainer /> }
            code={ <ComponentLayoutCode 
                title="Comparative Container"
                jsx={ ComparativeContainerString.jsx }
                sass={ ComparativeContainerString.sass }
            />}
        />
    )
}

export default ComparativeContainerDetails