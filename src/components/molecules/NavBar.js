import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'

import '../../scss/molecules/NavBar.scss'

const NavBar = () => {

    const turnMenu = () => {
        const $submenu = document.getElementById('submenu')
        return (
            $submenu.classList.toggle('hidde')
        )
    }

    return (
        <Fragment>
            <div className="nav">
                <a 
                    href="#"
                    className="nav__menu"
                    // onClick={ turnMenu }
                >
                    Asteroides »
                </a>
                <a 
                    href="#">
                    Memorama
                </a>
            </div>
            
            <div className="submenu" id="submenu">
                <a href="#">
                    <div className="icon"></div>
                    Colección
                </a>
                <a href="#">
                    <div className="icon"></div>
                    Cumpleaños
                </a>
                <a href="#">
                    <div className="icon"></div>
                    Gráficas
                </a>
            </div>
        </Fragment>
    )
}

export default NavBar