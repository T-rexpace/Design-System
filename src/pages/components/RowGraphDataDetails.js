import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { RowGraphDataString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import RowGraphData from '../../components/molecules/RowGraphData'

const RowGraphDataDetails = () => {
    return(
        <ComponentLayout 
            title="Row Graph Data"
            underline={ true }
            details={
                <p>
                    El componente RowGraphData formará parte 
                    de la tabla de asteroides a comparar en la
                    pantalla de gráficas
                </p>
            }
            component={ <RowGraphData /> }
            code={ <ComponentLayoutCode 
                title="RowGraphData"
                jsx={ RowGraphDataString.jsx }
                sass={ RowGraphDataString.sass }
            />}
        />
    )
}

export default RowGraphDataDetails