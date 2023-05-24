import React from 'react'
import './style/buttonSimple.css'

function ButtonSimple({children,onClickController}) {
  return (
    <button onClick={()=> onClickController()} className="button button--simple">
        <div className="button__text">{children}</div>
    </button>
  )
}

export default ButtonSimple