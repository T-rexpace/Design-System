import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { FooterString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import Footer from '../../components/molecules/Footer'

const FooterDetails = () => {
    return(
        <ComponentLayout
            title="Footer"
            details={ 
                <p>
                    El Footer se mostrará en todas las pantallas de la aplicacion, 
                    enseguida semuestra el código del componente
                </p>
            }
            component={ <Footer /> }
            code={ <ComponentLayoutCode
                title="Footer"
                jsx={ FooterString.jsx }
                sass={ FooterString.sass }
            /> }
        />
    )
}

export default FooterDetails