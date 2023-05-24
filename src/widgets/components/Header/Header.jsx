import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../../shared/ui/Menu/Menu'
import LogoSite from '../../../shared/ui/LogoSite/LogoSite'

import './style/header.css'

function Header() {
  return (

    <header className="header">
        <div className="header__container wrapper">
            <div className="header__content">
                <div className="header__row">
                    <div className="header__item">
                    {/* component SiteLogo */}
                        <LogoSite/>
                    
                    </div>
                    <div className="header__item">
                    {/* component Menu */}
                        <Menu/>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header