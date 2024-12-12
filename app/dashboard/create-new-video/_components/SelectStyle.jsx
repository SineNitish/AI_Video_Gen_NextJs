"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const SelectStyle = ({onUserSelect}) => {
    const options = [
        {
            title : "Cartoon",
            location:"/cartoon.jpg",
        },
        {
            title : "Comic",
            location:"/comic.jpg",
        },
        {
            title : "GTA",
            location:"/gta.jpg",
        },
        {
            title : "Histroic",
            location:"/histroic.jpg",
        },
        {
            title : "Real",
            location:"/real.jpg",
        },
        {
            title : "Water Color",
            location:"/watercolor.png",
        },
    ]

    const [SelectedOption , setOption] = useState()
  return (
    <div>
        <h2 className='text-primary font-semibold text-xl mt-4'>Style</h2>
        <p className='text-gray-500'> Please Select the Style of your Video</p>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-1' >
        {
            options.map((item,index)=>(
                <div key={index} >
                    <div className = {`relative hover:scale-105 transition-all rounded-xl cursor-pointer
                         ${SelectedOption==item.title&&'border-4 border-primary '}`} onClick={() => {
                            setOption(item.title)
                            onUserSelect('ImageStyle' ,item.title)
                         }}
                         >
                        <Image className='h-48 w-full rounded-xl shadow-lg' src={item.location} alt='' width={100} height={100}/> 
                        <p className='absolute bottom-0 p-1 bg-black text-white w-full text-center rounded-b-xl '>{item.title}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default SelectStyle