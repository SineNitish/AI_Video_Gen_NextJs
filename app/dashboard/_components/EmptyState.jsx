import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EmptyState = () => {
  return (
    <div className='px-5 py-24 flex flex-col items-center m-5 border-2 border-dashed'>
        <h2>You have Not Yet created any video</h2>
        <Link href={'/dashboard/create-new-video'}>
        <Button>Create video</Button>
        </Link>
    </div>
  )
}

export default EmptyState