import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { FormBirthdayString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'

import FormBirthday from '../../components/molecules/FormBirthday'



const FormBirthdayDetails = () => {
    return(
        <ComponentLayout 
            title="Form Birthday"
            underline={ true }
            details={
                <p>
                    El formulario para cumpleaños será utilizado para la entrada de datos 
                    del usuario al interactuar con la pantalla de cunsultar el asteroide 
                    de tu cumpleaños
                </p>
            }
            component={ <FormBirthday /> }
            code={ <ComponentLayoutCode 
                title="Form Birthday"
                jsx={ FormBirthdayString.jsx }
                sass={ FormBirthdayString.sass }
            /> }
        />
    )
}

export default FormBirthdayDetails