import React from 'react'

import HeaderDesignSystem from '../components/molecules/HeaderDesignSystem'

const Home = () => {
  return (
    <>
      <HeaderDesignSystem title='Sistema de diseño de T-REXPACE' />
      <div className="wrapper">
        <div className="row">
          <div className="column-12">
            <p>Bienvenido al sistema de diseño de T-REXPACE. La madre nodriza de todos los recursos y pautas para hacer uso de la lógica de los guidelines para el producto.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home