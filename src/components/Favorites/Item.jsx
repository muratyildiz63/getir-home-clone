import React from 'react'
import { LuPlus } from "react-icons/lu";
export const Item = ({item}) => {
    return (
        <div className='flex flex-col bg-white p-5 text-center text-sm font-semibold'>
            <picture className='flex items-center justify-center relative'>
                <img src={item.image} alt={item.title} />
                <div className='w-8 h-8 rounded cursor-pointer-lg border border-gray-200 flex items-center justify-center bg-white absolute top-1 right-1'>
                <LuPlus size={16} className='text-primary' />
                </div>
            </picture>
            <div className='text-primary'>${item.price}</div>
            <div className=''>{item.title}</div>
            <div className='font-semibold font-light '>{item.alt}</div>
            
        </div>
    )
}