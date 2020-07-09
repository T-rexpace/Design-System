import React from 'react'

import '../../scss/organisms/Footer.scss'

const Footer = () => {
    return (
        <div className="container">
          <div>
            <h1>Footer</h1>
            <hr className="hr" />
            <div className="footer">
                <p>
                    Datos de fuentes oficiales de la NASA
                </p>
                <p>
                    Hecho con <span role="img" arial-label="Amor">❤️</span> por T-<span>REX</span>PACE
                </p>
            </div>
          </div>
        </div>
    )
}

export default Footer