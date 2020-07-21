import React, { Fragment } from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { InputString, SwitchString, CheckboxString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'

import FormsLayout from '../../components/molecules/FormsLayout'
import Input from '../../components/atoms/Input'
import Switch from '../../components/atoms/Switch'
import Checkbox from '../../components/atoms/Checkbox'

const FormsDetails = () => {
    return(
        <Fragment>
            <ComponentLayout
                title="Formularios"
                underline={ true }
                subtitle="Input"
                details={
                    <p>
                        Los input estarán contenidos en el modal de suscripción 
                        y en la sección de cumpleaños
                    </p>
                }
                component={ <Input 
                    active={ true }
                /> }
                code={ <ComponentLayoutCode 
                    title="Input"
                    jsx={ InputString.jsx }
                    sass={ InputString.sass }
                />}
            />
            <div className="mt-5"></div>
            <ComponentLayout 
                subtitle="Switch"
                details={
                    <p>
                        El Switch se utiliza en la pantalla "Colección"
                    </p>
                }
                component={ <FormsLayout 
                    normal={ <Switch /> }
                    active={ <Switch active={ true } /> }
                />}
                code={ <ComponentLayoutCode 
                    title="Switch"
                    jsx={ SwitchString.jsx }
                    sass={ SwitchString.sass }
                />}
            />
            <div className="mt-5"></div>
            <ComponentLayout 
                subtitle="checkbox"
                details={
                    <p>
                        Este componente se implementa en el modal de la pantalla "Asteroide del Cumpleaños"
                    </p>
                }
                component={ <FormsLayout 
                    normal={ <Checkbox /> }
                    active={ <Checkbox check="checked" /> }
                />}
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