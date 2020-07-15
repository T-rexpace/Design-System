import React from 'react'

import '../../scss/atoms/ButtonSuscribe.scss'

const ButtonSuscribe = () => {
    const handleClick = () => {
        const $btnSuscribe = document.getElementById('btnSuscribe')
        $btnSuscribe.classList.add('active')
        setTimeout(() => $btnSuscribe.classList.remove('active'), 200)
    }
    return (
        <button 
        className="btn btn__normal"
        id="btnSuscribe"
        onClick={ handleClick }> 
            Suscribirme
        </button>    
    )
}

export default ButtonSuscribe