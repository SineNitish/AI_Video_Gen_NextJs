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

const SelectDuration = ({onUserSelect}) =>{
    const [SelectedOption,setOption]=useState();
    return <div className='mt-7'>
        <h2 className='text-primary text-xl font-semibold '>Duration</h2>
        <p className='text-gray-500 '>Please Select Duration </p>
        <Select onValueChange={(value)=>{setOption(value)
        value!='Custom Prompt'&&onUserSelect('Duration',value)
        }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg ">
            <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="30 Seconds">30 Seconds</SelectItem>
            <SelectItem value="60 Seconds">60 Seconds</SelectItem>
        </SelectContent>
        </Select>
        </div>
}

export default SelectDuration ;