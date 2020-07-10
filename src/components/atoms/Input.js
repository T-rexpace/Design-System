import React  from 'react'

import '../../scss/atoms/Input.scss'

const Input = () => {

    const turnSwitch = () => {
        const switchCircle = document.getElementById('switchCircle')
        const switchBox = document.getElementById('switchBox')

        switchCircle.addEventListener('click', () => {
            switchBox.classList.toggle('switch__box--active')
        })
    }

    return(
        <div className="container">
            <h1>Formularios</h1>
            <hr className="hr" />

            <div className="container__form">
                <h2>Input</h2>
                <div className="form">
                    <h2>Normal</h2>
                    <label for="name">Label</label>
                    <input 
                        placeholder="Placeholder"
                        type="text" 
                        name="user_name" 
                    />
                </div>
                <div className="form--active">
                    <h2>Active</h2>
                    <label for="name">Label</label>
                    <input 
                        placeholder="Placeholder"
                        type="text" 
                        name="user_name" 
                    />
                </div>
            </div>

            <div className="container__switch">
                <h2>Switch</h2>
                <div className="switch">
                    <div className="switch__box" id="switchBox">
                        <div 
                            className="switch__circle"
                            id="switchCircle"
                            onClick={ turnSwitch }
                        ></div>
                    </div>
                </div>
                <div className="switch--active">
                    <div className="switch__box--active">
                        <div className="switch__circle"></div>
                    </div>
                </div>
            </div>

            <div className="container__checkbox">
                <h2>checkbox</h2>
                <div className="checkbox">
                    <input type="checkbox" id="check1" />
                    <label for="check1">Check me!</label>
                </div>
                <div className="checkbox--active">
                    <input type="checkbox" id="check2" checked="checked" />
                    <label for="check2">Check me!</label>
                </div>
            </div>

        </div>
    )
}

export default Input