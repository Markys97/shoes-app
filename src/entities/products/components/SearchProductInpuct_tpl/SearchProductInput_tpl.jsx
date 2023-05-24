import React from 'react'
import './style/searchProductInput.css'

function SearchProductInput_tpl() {
  return (
    <div className="form__search">
        <input className='form__search-input' type="text" placeholder='Поиск...'/>
        <div className="form__search-icon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.25 15.8466L11.8855 12.5215L15.25 15.8466ZM13.75 8.07763C13.75 9.74563 13.0784 11.3453 11.8828 12.5248C10.6873 13.7042 9.06576 14.3668 7.375 14.3668C5.68424 14.3668 4.06274 13.7042 2.86719 12.5248C1.67165 11.3453 1 9.74563 1 8.07763C1 6.40964 1.67165 4.80996 2.86719 3.63051C4.06274 2.45106 5.68424 1.78845 7.375 1.78845C9.06576 1.78845 10.6873 2.45106 11.8828 3.63051C13.0784 4.80996 13.75 6.40964 13.75 8.07763V8.07763Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
    </div>
  )
}

export default SearchProductInput_tpl