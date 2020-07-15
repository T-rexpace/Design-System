import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { HeaderString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import Header from '../../components/organisms/Header'

const HeaderDetails = () => {
    return(
        <ComponentLayout
            title="Header"
            details={
                <p>El Header se compone de 3 elementos, 
                    <br />1. El logotipo de la marca, que a su vez es un enlace hacia la pnatalla de inicio
                    <br />2. EL NavBar, que es el menú de navegación del sitio
                    <br />3. El boton de suscribirse
                </p>
            }
            component={ <Header /> }
            code={ <ComponentLayoutCode
                title="Header"
                jsx={ HeaderString.jsx }
                sass={ HeaderString.sass }
            /> }
        />
    )
}

export default HeaderDetails