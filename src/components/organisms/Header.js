import React from 'react'

import NavBar from '../molecules/NavBar'
import Button from '../atoms/Button'
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
                <Button type="normal" />
            </div>
        </header>
    )
}

export default Header