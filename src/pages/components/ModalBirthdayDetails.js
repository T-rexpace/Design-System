import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { ModalBirthdayString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import ModalBirthday from '../../components/molecules/ModalBirthday'

const ModalBirthdayDetails = () => {
    return(
        <ComponentLayout 
            title="Modal Birthday"
            underline={ true }
            details={
                <p>
                    Modal para la pantalla de Asteroide de tu cumpleaños
                </p>
            }
            component={ <ModalBirthday /> }
            code={ <ComponentLayoutCode 
                title="Modal Birthday"
                jsx={ ModalBirthdayString.jsx }
                sass={ ModalBirthdayString.sass }
            />}
        />
    )
}

export default ModalBirthdayDetails