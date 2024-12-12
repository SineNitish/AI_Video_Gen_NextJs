"use client"
import { CircleUser, FileVideo, PanelsTopLeft, ShieldIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuOptions = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/dashboard',
        icon: PanelsTopLeft
    },
    {
        id: 2,
        name: 'Create New',
        path: '/dashboard/create-new-video',
        icon: FileVideo
    },
    {
        id: 3,
        name: 'Upgrade',
        path: '/upgrade',
        icon: ShieldIcon
    },
    {
        id: 4,
        name: 'Account',
        path: '/account',
        icon: CircleUser
    },
]

const SideNav = () => {
    const currentPath = usePathname();
    return (
        <div className='shadow-lg w-64 h-screen p-5 '>
            <div className='grid gap-3'>
                {MenuOptions.map((item) => (
                    <Link href={item.path} key={item.id}>
                        <div className={`flex items-center gap-2 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer ${currentPath === item.path && 'bg-primary text-white'}`}>
                            <item.icon />
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav
