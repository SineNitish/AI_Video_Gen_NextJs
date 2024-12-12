"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'

const CreateNew = () => {
  const [formData,setFormData]=useState([])
  const onHandleInputChnage = (filedName,filedValue)=>{
      
      setFormData(prev=>({
        ...prev,
        [filedName]:filedValue,
      }))
      console.log(formData);
  }
  const onClickCreateHandler = ()=>{
    getVideoScript();
  }
  // Get video Script 

  const getVideoScript = async ()=>{
    const prompt = 'write a script to generate '+formData.Duration +' video on topic : Interesting '+formData.topic+' story along with ai image prompt in '+formData.ImageStyle+' format for each scene and give me result in JSON format with Image Prompt and Content text as field '
    console.log(prompt);
    const result = await axios.post('/api/get-video-script',{prompt:prompt}).then(resp=>{
      console.log(resp.data);
    })
  }

  return (
    <div>
      <h1 className='md:20px text-bold font-bold text-primary text-2xl text-center'> Create Video </h1>
      <div className='mt-10 shadow-lg p-10 '>
      {/* Select Topic */}
      <SelectTopic onUserSelect={onHandleInputChnage} />
      {/* Select Style */}
      <SelectStyle onUserSelect={onHandleInputChnage}/>
      {/* Select Duration */}
      <SelectDuration onUserSelect={onHandleInputChnage} />
      {/* Create Button */}
      <Button className="w-full bg-primary mt-7" onClick={onClickCreateHandler} >Create Button</Button>
      </div>
    </div>
  )
}

export default CreateNew