import React from 'react'

import NavBar from '../molecules/NavBar'

import '../../scss/organisms/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu header-margin">
                <p>logotipo</p>
                <NavBar />
            </div>
            <div className="header-margin">
                <p>suscribirme</p>
            </div>
        </header>
    )
}

export default Header