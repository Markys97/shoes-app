import React from 'react'
import './style/baniere.css'


function Baniere_tpl() {
  return (
    <div className="banier">
        <div className="banier__container">
            <div className="banier__content">
                <div className="banier__img">
                <img src="/images/products/baniere.jpg" alt="baniere" />
                </div>

                <div className="banier__body">
                    <div className="banier__title">
                        <span> Stan Smith</span>
                        <span>Forever!</span>
                    </div>
                    {/* component Button-simple */}
                    <button className="button button--simple">
                        <div className="button__text">Купить</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Baniere_tpl