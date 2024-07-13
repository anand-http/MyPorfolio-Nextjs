import React from 'react'
import { SocialMedia } from '../components';


const AppWrap2 = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`${classNames}`}>
      <div className='app__flex'>
        <Component />
      </div>

      <SocialMedia />

      <div className="copyright">
        <p className="p-text"> Copyright @ 2023 Anand All rights reserved</p>
      </div>

    </div>
  )
}

export default AppWrap2;