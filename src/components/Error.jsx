/* eslint-disable no-unused-vars */
import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-slate-800'>
    <div className='h-80 w-80 bg-red-500 rounded-lg p-4 flex flex-col items-center justify-center'>
        <h1 className='text-black text-center text-clip font-bold text-2xl'>Opps!😒</h1>
        <h2 className='text-black text-lg text-center'>{`${error.error}`}</h2>
        <h2 className='text-black text-3xl text-center'>{`${error.status}!`}</h2>
    </div>

      
    </div>
  )
}

export default Error
