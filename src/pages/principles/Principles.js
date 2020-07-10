import React from 'react'

import HeaderDesignSystem from '../../components/molecules/HeaderDesignSystem'

const Principles = () => (
  <>
    <HeaderDesignSystem />
    <div className="wrapper">
      <div className="row">
        <div className="column-12">
          
          <h2>
              Control y libertad del usuario
          </h2>
          <p className="mb-5">
              El usuario debe de tener la sensación de que inicia las acciones 
              y solo el puede terminarlas, nada pasa sin que el usuario tenga el control. 
          </p>
          <h2>
              Prevención de errores
          </h2>
          <p className="mb-5">
              Debemos brindar instrucciones claras a los usuarios sobre cómo manejar el sistema.
          </p>
          <h2>
              Ayudar a los usuarios a corregir y reconocer errores
          </h2>
          <p className="mb-5">
              Debemos dar recomendaciones de posibles errores y cómo corregirlos.
          </p>
          <h2>
              Visibilidad del estado del sistema
          </h2>
          <p className="mb-5">
              Cuando un usuario este haciendo un proceso debemos darle retroalimentación de lo que está pasando.
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Principles