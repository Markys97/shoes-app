import React from 'react'
import './style/buttonMain.css'

function ButtonMain({children, position,type,handlerClick}) {
  return (
        <button onClick={()=> handlerClick!== undefined?handlerClick():''} className={`button button--main ${type !==undefined}`}>
            <div className={`button--main__row ${position !== undefined ? position:''}`}>
              <div className="button--main__text">{children}</div>
              <div className="button--main__icon">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </div>
            </div>
        </button>
  )
}

export default ButtonMain