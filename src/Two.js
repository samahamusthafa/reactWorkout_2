import React, { useContext } from 'react'
import One from './One'
import { AppContext } from './AppContext'

function Two(props) {
  const {data} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'red',width:'300px'}}>
      <h1>Layer Two {data}</h1>
      <One/>
    </div>
  )
}

export default Two
