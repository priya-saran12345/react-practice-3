import React, { useState } from 'react'
import Button from './button/Button1'
import { useSearchParams } from 'react-router-dom'
import st1 from "./button/Priya.module.css"
import { Prev } from 'react-bootstrap/esm/PageItem'
import Tabledata from './Tabledata'
const Contact = () => {
  const [thiss, setthiss] = useState(true)
  const [data, setdata] = useState({ name: "", email: "", text: "" })
  const [err, seterr] = useState({})
const [printdata, setprintdata] = useState([])
const [seedata, setseedata] = useState(false)
const [seetable, setseetable] = useState(false)
  const emailRegex =/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/


  const chatt = () => {
    alert("we are about to chat")
  }
  const calll = () => {
    alert("we are about to call")

  }

  const handlechange = (e) => {
    const localdata = { ...data, [e.target.name]: e.target.value }
    setdata(localdata)
    console.log(data)
  }

  const validation=()=> {
    let valid=true
    let localerr = {}
    
    //name validation 
    if (data.name.length == 0) {
      localerr.name = "name is required"
      valid=false
    }
    else if (data.name.length < 8) {
      localerr.name = "name must be greater than 8 character"
      valid=false
      
      
    }
    // email validation 
    if(data.email.length===0){
      localerr.email="mail is required"
      valid=false
      
    }
    else if(!emailRegex.test(data.email))
      {
        localerr.email="email is not in correct formate"
        valid=false
        
      }
      //  text area validation
      
      if(data.text.length===0){
        localerr.text="text is required"
        valid=false
        
      }
      
      seterr(localerr);
      return valid
    }
    
    const handleclick = () => {

      if(validation()){
        let middledata=[...printdata]
        let copydata= middledata.concat(data)
        setprintdata(copydata)
        setseedata((Prev)=>!Prev)
     alert('data is submitted successfully and watch your data in below table ' )

      }
    }

const Table=()=>{
  setseetable(true)
}


  return (
    <>

    <div className='  container mt-4 pt-3 d-flex  flex-wrap  justify-content-around'>
      <div className='d-flex flex-column  gap-4 '>
        <div className='d-flex gap-5 '>

          <Button text="VIA SUPPORT CHAT" onClick={chatt} />
          <Button text="VIA CALL" onClick={calll} />
        </div>
        <Button text="VIA EMAIL FORM" thiss={thiss} />
        <div className={`d-flex  flex-column border ${st1.div_upper}`}>
          <label for="name">Name</label>
          <input type='text' id='name' name='name' placeholder='Enter name' onChange={handlechange}></input>
        </div>
          {err.name&&<p className='text-danger'>{err.name}</p>}
        <div className={`d-flex  flex-column border ${st1.div_upper}`}>
          <label for='email'>E-Mail</label>
          <input type='text' name='email' id="email" placeholder='Enter email' onChange={handlechange}></input>

        </div>
          {err.email&&<p className='text-danger'>{err.email}</p>}
        <div className={`d-flex  flex-column border ${st1.div_upper}`}>
          <label for='text'>Text</label>
          <textarea type='text' id='text' className='p-2' name='text' rows={2} placeholder='Enter text' onChange={handlechange}></textarea>

        </div>
          {err.text&&<p className='text-danger '>{err.text}</p>}
        <div className='d-flex justify-content-end'>
          <Button text="SUBMIT" onClick={handleclick} />
        </div>
      </div>
      <img src='/images/Frame 11.png ' style={{ height: "70vh" }} alt='this is the main image'></img>
    </div>
    {seedata &&<div className='text-center my-4'> <Button text="SEE DATA" onClick={Table}></Button>
    </div>
    }
    {/* <Tabledata printdata={printdata}/> */}
    {
    seetable && <Tabledata  printdata={printdata}/>
    }
    </>
  )
}

export default Contact