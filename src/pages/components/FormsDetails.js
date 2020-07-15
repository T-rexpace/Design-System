import React, { Fragment } from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { InputString, SwitchString, CheckboxString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'

import Input from '../../components/atoms/Input'
import Switch from '../../components/atoms/Switch'
import Checkbox from '../../components/atoms/Checkbox'

const FormsDetails = () => {
    return(
        <Fragment>
            <ComponentLayout
                title="Input"
                details={
                    <p>
                        Los input estarán contenidos en el modal de suscripción 
                        y en la sección de cumpleaños
                    </p>
                }
                component={ <Input /> }
                code={ <ComponentLayoutCode 
                    title="Input"
                    jsx={ InputString.jsx }
                    sass={ InputString.sass }
                />}
            />
            <div className="mt-5"></div>
            <ComponentLayout 
                title="Switch"
                details={
                    <p>
                        El Switch se utiliza en la pantalla "Colección"
                    </p>
                }
                component={ <Switch /> }
                code={ <ComponentLayoutCode 
                    title="Switch"
                    jsx={ SwitchString.jsx }
                    sass={ SwitchString.sass }
                />}
            />
            <div className="mt-5"></div>
            <ComponentLayout 
                title="checkbox"
                details={
                    <p>
                        Este componente se implementa en el modal de la pantalla "Asteroide del Cumpleaños"
                    </p>
                }
                component={ <Checkbox /> }
                code={ <ComponentLayoutCode 
                    title="Checkbox"
                    jsx={ CheckboxString.jsx }
                    sass={ CheckboxString.sass }
                />}
            />
        </Fragment>
    )
}

export default FormsDetails