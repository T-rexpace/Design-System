import React  from 'react'

import '../../scss/atoms/Input.scss'

const Input = () => {
    return(
        <div className="container__form">
            <div className="form">
                <h3>Normal</h3>
                <label>Label</label>
                <input 
                    placeholder="Placeholder"
                    type="text" 
                    name="user_name" 
                />
            </div>
            <div className="form--active">
                <h3>Active</h3>
                <label>Label</label>
                <input 
                    placeholder="Placeholder"
                    type="text" 
                    name="user_name" 
                />
            </div>
        </div>
    )
}

export default Input