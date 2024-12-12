"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

const Dashboard = () => {
  const [videoList,setVideoList]=useState([]);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-2xl text-primary '>Dashboard</h1>
        <Link href={'/dashboard/create-new-video'}>
        <Button>+ Create New</Button>
        </Link>
      </div>

      {/* Empty State */}
      {
        videoList.length==0&&<div>
          <EmptyState/>
        </div>
      }
    </div>
  )
}

export default Dashboard