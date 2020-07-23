import React from 'react'

import ComponentLayout from '../../components/ComponentLayout'
import ColorCard from '../../components/molecules/ColorCard'

const Colors = () => {
    return (
        <ComponentLayout
            title="Colores"
            underline={ true }
            details={
              <div className="wrapper">
                <div className="row">
                  <h2 className="h2--bb">Colores primarios</h2>
                  <p>
                    Se mostrará con mayor frecuencia en las páginas 
                    y componentes de nuestra aplicación.
                  </p>
                  <p>
                    Cuenta con diferentes variantes con la finalidad de generar 
                    contraste en los elementos de la interfaz del usuario.
                  </p>
                  <div className="column-4">
                    <ColorCard
                      color="primary"
                      token='$Color-Primary'
                      hexadecimal='#3F245E'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="primary-2"
                      token='$Color-Primary-2'
                      hexadecimal='#75B843'
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column-4">
                    <ColorCard
                      color="primary-light-1"
                      token='$Color-Primary-Light-1'
                      hexadecimal='#402C5C'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="primary-light-2"
                      token='$Color-Primary-Light-2'
                      hexadecimal='#4B3866'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="primary-light-3"
                      token='$Color-Primary-Light-3'
                      hexadecimal='#604D7A'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="primary-dark-1"
                      token='$Color-Primary-Dark-1'
                      hexadecimal='#2B1A42'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="primary-dark-2"
                      token='$Color-Primary-Dark-2'
                      hexadecimal='#23123B'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="primary-dark-3"
                      token='$Color-Primary-Dark-3'
                      hexadecimal='#1E0F33'
                    />
                  </div>
                </div>
                <div className="row">
                  <h2 className="h2--bb mt-5">Colores secundarios</h2>
                  <p>
                    Nos permite destacar elementos determinados. Principalmente, 
                    los relacionados a acciones del usuario.
                  </p>
                  <div className="column-4">
                    <ColorCard
                      color="secondary"
                      token='$Color-Secondary'
                      hexadecimal='#D1066A'
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column-4">
                    <ColorCard
                      color="secondary-light-1"
                      token='$Color-Secondary-Light-1'
                      hexadecimal='#C2387A'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="secondary-light-2"
                      token='$Color-Secondary-Light-2'
                      hexadecimal='#C94484'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="secondary-light-3"
                      token='$Color-Secondary-Light-3'
                      hexadecimal='#D4508F'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="secondary-dark-1"
                      token='$Color-Secondary-Dark-1'
                      hexadecimal='#AB1D61'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="secondary-dark-2"
                      token='$Color-Secondary-Dark-2'
                      hexadecimal='#9C1455'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="secondary-dark-3"
                      token='$Color-Secondary-Dark-3'
                      hexadecimal='#870E48'
                    />
                  </div>
                </div>
                <div className="row">
                  <h2 className="h2--bb mt-5">Positive & Negative</h2>
                  <p>
                    Estos colores serán usados en todo mensaje 
                    de alerta: éxito y error.
                  </p>
                  <div className="column-4">
                    <ColorCard
                      color="positive"
                      token='$Color-Positive'
                      hexadecimal='#45D567'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="negative"
                      token='$Color-Negative'
                      hexadecimal='#D81C1C'
                    />
                  </div>
                </div>
                <div className="row">
                  <h2 className="h2--bb mt-5">Degradado</h2>
                  <div className="column-4">
                    <ColorCard
                      color="gradient"
                      token='$Gradient'
                      hexadecimal='#EA5246 -> #D1066A'
                    />
                  </div>
                </div>
                <div className="row">
                  <h2 className="h2--bb mt-5">Escala de grises</h2>
                  <div className="column-4">
                    <ColorCard
                      color="color-grayscale-1"
                      token='$Color-Grayscale-1'
                      hexadecimal='#ffffff'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="color-grayscale-2"
                      token='$Color-Grayscale-2'
                      hexadecimal='#F0EEF3'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="color-grayscale-3"
                      token='$Color-Grayscale-3'
                      hexadecimal='#DBD9DD'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="color-grayscale-4"
                      token='$Color-Grayscale-4'
                      hexadecimal='#B6B2BB'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="color-grayscale-5"
                      token='$Color-Grayscale-5'
                      hexadecimal='#948F9B'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="color-grayscale-6"
                      token='$Color-Grayscale-6'
                      hexadecimal='#736C7C'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="color-grayscale-7"
                      token='$Color-Grayscale-7'
                      hexadecimal='#4D4459'
                    />
                  </div>
                  <div className="column-4">
                    <ColorCard
                      color="color-grayscale-8"
                      token='$Color-Grayscale-8'
                      hexadecimal='#2A1F38'
                    />
                  </div>
                </div>
              </div>
            }
        />
    )
}

export default Colors