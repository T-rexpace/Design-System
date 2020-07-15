import React from 'react'

import NavBar from '../molecules/NavBar'
import ButtonSuscribe from '../atoms/ButtonSuscribe'
import ButtonLogo from '../atoms/ButtonLogo'

import '../../scss/organisms/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu header-margin">
                <ButtonLogo />
                <NavBar />
            </div>
            <div className="header-margin">
                <ButtonSuscribe />
            </div>
        </header>
    )
}

export default Header