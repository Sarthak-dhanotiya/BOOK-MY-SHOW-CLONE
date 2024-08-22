import React from 'react'
import Movienavbar from '../components/navbar/movienavbar.component'

const Movielayout = (Component) => ({...props})=>{
  return (
    <div>
        <Movienavbar/>
        <Component {...props}/>
        <div>footer</div>
    </div>
  )
}

export default Movielayout