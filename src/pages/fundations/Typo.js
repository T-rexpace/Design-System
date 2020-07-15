import React from 'react'

import ComponentLayout from '../../components/ComponentLayout'

import imgTypo from '../../images/typo.png'

const Typo = () => {
    return (
        <ComponentLayout 
            title="Tipografía"
            component={
                <a href="https://www.figma.com/proto/oob5O8j7YVKKtlLd8To6fn/design-system?node-id=323%3A1537&scaling=scale-down-width">
                    <img src={ imgTypo } alt="typo" />
                </a>
            }
            details={
                <p>
                    La tipografía de nuestra marca es Maven Pro. 
                    Esta nos brinda múltiples pesos tipográficos 
                    para tener versatilidad en su uso. A su vez, 
                    al ser una sans serif transmite modernidad.
                </p>
            }
        />
    )
}

export default Typo