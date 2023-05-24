import React from 'react'
import './style/logoSite.css'

function LogoSite() {
  return (
        <div className="logo-site">
            <div className="logo-site__content">
                <div className="logo-site__row">
                    <div className="logo-site__img">
                        <img src="/images/icons/logo.png" alt="site logo" />
                    </div>
                    <div className="logo-site__body">
                        <div className="logo-site__title">REACT SNEAKERS</div>
                        <div className="logo-site__subtitle">Магазин лучших кроссовок</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LogoSite