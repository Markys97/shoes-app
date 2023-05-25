import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './style/layoutPage.css'
import Header from '../../../widgets/components/Header/Header'
import Cart from '../../../widgets/components/Cart/Cart'

function LayoutPage() {
  return (
    <div className='layout-page'>
        <div className="layout-page__container ">
            <div className="layout-page__content">
              <Header/>
              <Outlet/>
             
            </div>
        </div>
        <Cart/>
    </div>
  )
}

export default LayoutPage