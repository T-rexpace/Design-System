import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'

import IconColection from '../../images/icons/t-rex-seleccion-de-asteroides-home.svg'
import IconBirthday from '../../images/icons/t-rex-cumpleanos-home.svg'
import IconGraphs from '../../images/icons/t-rex-graficas.svg'

import '../../scss/molecules/NavBar.scss'

const NavBar = () => {

    return (
        <Fragment>
            <div className="nav">
                <a 
                    href="#"
                    className="nav__menu"
                >
                    Asteroides »
                </a>
                <a 
                    href="#">
                    Memorama
                </a>
            </div>
            
            <div className="submenu">
                <a href="#">
                    <img 
                        src={ IconColection } 
                        alt="IconnColection" 
                        className="icon"
                    />
                    Colección
                </a>
                <a href="#">
                    <img 
                        src={ IconBirthday } 
                        alt="IconnBirthday" 
                        className="icon"
                    />
                    Cumpleaños
                </a>
                <a href="#">
                    <img 
                        src={ IconGraphs } 
                        alt="IconnGraphs" 
                        className="icon"
                    />
                    Gráficas
                </a>
            </div>
        </Fragment>
    )
}

export default NavBar