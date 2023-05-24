import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './style/layoutPage.css'
import Header from '../../../widgets/components/Header/Header'

function LayoutPage() {
  return (
    <div className='layout-page'>
        <div className="layout-page__container ">
            <div className="layout-page__content">
              <Header/>
              <Outlet/>
             
            </div>
        </div>
    </div>
  )
}

export default LayoutPage