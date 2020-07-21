import React from 'react'

import ComponentLayout from '../../components/ComponentLayout'
import ComponentLayoutCode from '../../documentationComponents/ComponentLayoutCode'

import imgSpacing from '../../images/spacing.png'

const Spacing = () => {
    return (
      <ComponentLayout 
        title="Espaciado"
        underline={ true }
        component={
          <a href="https://www.figma.com/proto/oob5O8j7YVKKtlLd8To6fn/design-system?node-id=583%3A0&scaling=scale-down-width">
              <img src={ imgSpacing } alt="spacing" />
          </a>
        }
        details={
          <>
            <p>
                Las reglas de espaciado se manejan en base a unidades. 
                Una unidad es equivalente a 10px, por lo cual 2 unidades 
                equivalen a 20px en nuestro sistema de espaciado. 
                Estas unidades definirán las dimensiones, el relleno 
                y margen de los elementos.
            </p>
            <div className="mt-5 mb-5">
              <h3>Opciones de unidades</h3>
              <code>
                $Spacing-ExtraSmall: 10px;
              </code><br /><br />
              <code>
                $Spacing-Small: 20px;
              </code><br /><br />
              <code>
                $Spacing-Normal: 30px;
              </code><br /><br />
              <code>
                $Spacing-Large: 40px;
              </code><br /><br />
              <code>
                $Spacing-ExtraLarge: 50px;
              </code>
            </div>
          </>
        }
      />
    )
}

export default Spacing