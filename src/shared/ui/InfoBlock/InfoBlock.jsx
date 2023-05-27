import React from 'react'
import './style/infoBlock.css'

function InfoBlock({children,img,title,text,type,textWithCOl}) {
  return (
    <div className='infoBlock'>
        <div className="infoBlock__container">
            <div className="infoBlock__content">
                <div className="infoBlock__icon">
                    <img src={`/images/icons/${img}`} alt="icon" />
                </div>
                <div className={`infoBlock__title ${type!==undefined?type:''}`}>{title}</div>
                <div className="infoBlock__text">
                   {textWithCOl!==undefined?(
                    textWithCOl.map((item,index) => <span key={index}>{item}</span>)
                   ):(
                    <span>{text}</span>
                   )}
                </div>
              <div className="infoBlock__button-wrapper">
                {children}
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default InfoBlock