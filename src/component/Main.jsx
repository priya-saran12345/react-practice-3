import React from 'react'
import Contact from './Contact'

const Main = () => {
  return (
    <div className='container '> 
    <h1 className='mt-4 fw-bold' style={{fontSize:"47px"}}>
    CONTACT US
    </h1>
    
    
    <p className='fs-6'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
     WHETHER YOU HAVE A QUESTION, COMMENT, OR
     <br></br> JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE 
    CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR
    <br></br> SOCIAL MEDIA. 
    </p>
    <Contact/>
    </div>

  )
}

export default Main