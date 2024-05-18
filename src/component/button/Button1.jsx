import React from 'react'
import st from './Priya.module.css'
const Button1 = ({thiss ,text , ...rest}) => {
   
  return (
    <>
        <button className={thiss?st.btn2:st.btn1} {...rest}>
        {text}</button>
    </>
  )
}

export default Button1