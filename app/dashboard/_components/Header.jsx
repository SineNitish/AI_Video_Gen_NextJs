import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-3 px-5 flex items-center justify-between shadow-md'>
        <div>
            <Image src='/sineai-logo.png' alt='' width={100} height={50} />
        </div>
        <div className='flex gap-3 items-center'>
            <Button>Dashboard</Button>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header