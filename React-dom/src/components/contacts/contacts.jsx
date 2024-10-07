import React from 'react'
import myselfImage from '../../assets/myself.png';
function Contacts() {
  return (
   <div className='h-screen flex items-center justify-center '>
      <div className='w-[60%] h-[50%] bg-gray-700 flex flex-row justify-center rounded'>
          <div className='flex flex-col items-center w-[50%] justify-center'>
            <h1 className='text-center text-xl font-bold'> Contact</h1>
            <h2>Email:</h2><a href='mailto:kishaiyanthangaraj@gmail.com'>kishaiyanthangaraj@gmail.com</a>
          </div>
          <div className='flex flex-col items-center justify-center p-10'>
            <img src={myselfImage} width={250} className='contain'/>
            
          </div>
      </div>
   </div>
  )
}

export default Contacts