import React from 'react'
import '../../scss/molecules/ModalSuscribe.scss'

import Button from '../atoms/Button'
import Input from '../atoms/Input'

const ModalSuscribe = () => {
    return(
        <div className="modalSuscribe">
            <Button type="outline" title="Logotipo" />
            <p>
                Descubre cada mes los asteroides más impresionantes
            </p>
            <Input label="Nombre completo" />
            <Input label="Correo electronico" />
            <Button type="normal" />
        </div>
    )
}

export default ModalSuscribe