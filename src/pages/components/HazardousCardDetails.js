import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { HazardousIndicatorString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import HazardousIndicatorCard from '../../components/molecules/HazardousIndicatorCard'
import DemoData from '../../components/DemoData'

const HazardousCardDetails = () => {
    return(
        <ComponentLayout 
            title="Hazardous Indicator Card"
            underline={ true }
            details={
                <p>
                    Hazardous Indicator Card será utilizada en la pantalla
                    de las graficas, recibira un array de nombre de asteroides 
                    y renderizará los nombres en una lista de acuerdo a si es
                    potencialmente peligroso o no
                </p>
            }
            component={ <HazardousIndicatorCard 
                data={ DemoData } 
                peligroso={ false }
            />}
            code={ <ComponentLayoutCode 
                title="Hazardous Indicator Card"
                jsx={ HazardousIndicatorString.jsx }
                sass={ HazardousIndicatorString.sass }
            />}
        />
    )
}

export default HazardousCardDetails