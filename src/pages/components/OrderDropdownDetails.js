import React from 'react'
import ComponentLayout from '../../components/ComponentLayout'
import { OrderDropdownString } from '../../documentationComponents/ComponentCode'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'
import OrderDropdown from '../../components/molecules/OrderDropdown'

const OrderDropdownDetails = () => {
    return(
        <ComponentLayout 
            title="Order Dropdown"
            underline={ true }
            details={
                <p>
                    OrderDropdown será el menú con el que el usuario podrá interactuar
                    con las cards en la pantalla de colección de cards, 
                    tendrá opciones de ordenamiento
                </p>
            }
            component={ <OrderDropdown /> }
            code= { <ComponentLayoutCode 
                title="OrderDropdown"
                jsx={ OrderDropdownString.jsx }
                sass={ OrderDropdownString.sass }
            />}
        />
    )
}

export default OrderDropdownDetails