import React from 'react'
import  style from './cs.module.css'

function Box1({box}) {

    const boxStyle = {
        height: box.size +'px',
        width:box.size +'px',
        background:box.color
      }
    
      return (
        <div className={style.box} style={boxStyle}></div>
        
      )
    }
    

export default Box1