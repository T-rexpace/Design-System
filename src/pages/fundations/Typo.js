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
              <>
                <p>
                    La tipografía de nuestra marca es <a href="https://fonts.google.com/specimen/Maven+Pro?query=maven+pro" target="_blank">Maven Pro</a>. 
                    Esta nos brinda múltiples pesos tipográficos 
                    para tener versatilidad en su uso. A su vez, 
                    al ser una sans serif transmite modernidad.
                </p>
                <div className="mt-5 mb-5">
                  <h3>Utilities</h3>
                  <p className="text-left">
                    <code>
                      .text-left
                    </code>
                      Tu observatorio de asteroides
                  </p>
                  <p className="text-center">
                    <code>
                      .text-center
                    </code>
                      Tu observatorio de asteroides
                  </p>
                  <p className="text-right">
                    <code>
                      .text-right
                    </code>
                      Tu observatorio de asteroides
                  </p>
                  <p>
                    <code>
                      .text-lowercase
                    </code>
                    <span className="text-lowercase">
                      Tu observatorio de asteroides
                    </span>
                  </p>
                  <p>
                    <code>
                      .text-uppercase
                    </code>
                    <span className="text-uppercase">
                      Tu observatorio de asteroides
                    </span>
                  </p>
                </div>
              </>
            }
        />
    )
}

export default Typo