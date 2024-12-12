"use client"
import 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

  
const SelectTopic = ({onUserSelect}) =>{
    const options = ['Custom Prompt','Random AI Story','Scary Story','Historical Facts','Bed Time Story','Motivational','Fun Facts'];
    const [SelectedOption,setOption]=useState();
    return <div>
        <h2 className='text-primary text-xl font-semibold '>Content</h2>
        <p className='text-gray-500 '>What's the Topic of Your Video?</p>
        <Select onValueChange={(value)=>{setOption(value)
        value!='Custom Prompt'&&onUserSelect('topic',value)
        }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg ">
            <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
        {options.map((itme,index)=>(
            <SelectItem key={index} value={itme}>{itme}</SelectItem>
        ))}
        </SelectContent>
        </Select>
        {SelectedOption=='Custom Prompt'&&
        <div>
            <Textarea className="mt-3 "
             onChange={(e)=>(onUserSelect('topic',e.target.value))}
             placeholder="Please write the prompt that you want to genrate the video"/>
        </div>}
    </div>
}

export default SelectTopic;