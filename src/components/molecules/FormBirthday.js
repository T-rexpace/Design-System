import React from 'react'

import Input from '../../components/atoms/Input'
import ButtonSuscribe from '../../components/atoms/ButtonSuscribe'

import '../../scss/molecules/FormBirthday.scss'

const FormBirthday = () => {
    return (
        <div className="formBirday">
            <Input 
                label="Fecha"
                placeholder="07/05/1946"
            />
            <ButtonSuscribe title="Consultar" />
        </div>
    )
}

export default FormBirthday