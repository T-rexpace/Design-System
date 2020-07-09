import React from 'react'

import '../../scss/atoms/Buttons.scss'

const Buttons = () => (
    <div className="container">
        <h1>Botones</h1>
        <hr className="hr" />
        <div className="container__buttons">

            <section className="container__buttons-normal">
                <h2>Normal</h2>
                <button className="btn btn__normal"> 
                    Suscribirme
                </button>
                <button className="btn btn__outline">
                    Suscribirme
                </button>
            </section>

            <section className="container__buttons-active">
                <h2>Active</h2>
                <button className="btn btn__normal--active"> 
                    Suscribirme
                </button>
                <button className="btn btn__outline--active">
                    Suscribirme
                </button>
            </section>

            <section className="container__buttons-disabled">
                <h2>Disabled</h2>
                <button className="btn btn__normal--disabled"> 
                    Suscribirme
                </button>
                <button className="btn btn__outline--disabled">
                    Suscribirme
                </button>
            </section>

            <section className="container__buttons-facebook">
                <h2>Facebook</h2>
                <button className="btn btn__facebook">
                    Compartir
                </button>
            </section>

        </div>
    </div>
)

export default Buttons