import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'

const Dashboardlayout = ({children}) => {
  return (
    <div>
    <div className='hidden md:block h-screen bg-white fixed mt-[75px] w-64'>
        <SideNav/>
    </div>
        <div>
        <Header/>   
        <div className='md:ml-64 p-10'>
        {children}
        </div>
        </div>
    </div>
  )
}

export default Dashboardlayout