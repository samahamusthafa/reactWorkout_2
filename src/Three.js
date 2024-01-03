import React from 'react'
import Two from './Two'

function Three(props) {
  return (
    <div style={{backgroundColor:'blue',width:'500px'}}>
      <h1>Layer Three</h1>
      <Two/>
    </div>
  )
}

export default Three
