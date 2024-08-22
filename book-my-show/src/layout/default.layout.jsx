import React from 'react'
import Navbarcomponent from '../components/navbar/navbar.component';

const defaultlayout = (Component) =>({...props})=> {
  return (
    <div>
        <Navbarcomponent/>
        <Component {...props}/>
        <div>footer</div>
        </div>
  )
}

export default defaultlayout;