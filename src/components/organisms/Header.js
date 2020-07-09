import React, { Fragment } from 'react'

import NavBar from '../molecules/NavBar'
import ButtonSuscribe from '../atoms/ButtonSuscribe'
import ButtonLogo from '../atoms/ButtonLogo'

import '../../scss/organisms/Header.scss'

const Header = () => {
    return (
        <div className="container">
            <h1>Header</h1>
            <hr className="hr" />
            <header className="header">
                <div className="header__menu header-margin">
                    <ButtonLogo />
                    <NavBar />
                </div>
                <div className="header-margin">
                    <ButtonSuscribe />
                </div>
            </header>
        </div>
    )
}

export default Header