import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { ModalSuscribeString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import ModalSuscribe from '../../components/molecules/ModalSuscribe'

const ModalSuscribeDetails = () => {
    return(
        <ComponentLayout 
            title="Modal Suscribe"
            underline={ true }
            details={
                <p>
                    Este modal será la entrada para que el usuairo 
                    se suscriba al newsletter
                </p>
            }
            component={ <ModalSuscribe /> }
            code={ <ComponentLayoutCode
                title="Modal Suscribe"
                jsx={ ModalSuscribeString.jsx }
                sass={ ModalSuscribeString.sass }
            />}
        />
    )
}

export default ModalSuscribeDetails