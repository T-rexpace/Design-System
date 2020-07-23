import React, { Fragment } from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { ButtonString } from '../../documentationComponents/ComponentCode'
import ComponentLayotCode from '../../documentationComponents/ComponentLayoutCode'
import Buttons from '../../components/atoms/Buttons'
import Button from '../../components/atoms/Button'

const ButtonsDetails = () => {
    return(
        <Fragment>
            <ComponentLayout 
                title="Botones"
                underline={ true }
                details={ 
                    <p>
                        Esta es la colección de Botones a utilizar en la aplicación.
                    </p>
                }
                component={ <Buttons /> }
            />
            <div className="mt-5"></div>
            <ComponentLayout 
                subtitle="Boton Principal"
                details={ 
                    <p>
                        El botón de suscribirse habilitará el modal 
                        para que nuestro usuario se suscriba al Newsletter
                    </p>
                }
                component={ <Button type="normal" /> }
                code={ <ComponentLayotCode 
                    title="Boton suscribirse"
                    jsx={ ButtonString.jsx }
                    sass={ ButtonString.sass }
                /> }
            />
        </Fragment>
    )
}

export default ButtonsDetails