import React, { useState } from 'react'
import PreviewModal from './PreviewModal';
import PreviewContent from './PreviewContent';


export default function FoodCard({ food }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div 
                onClick={() => setOpen(true)}
                className='food--card flex flex-col justify-center items-center w-1/2 gap-2 mt-2 max-w-[400px]'
            >
                <div>
                    <img src={food.images?.[0]} alt="" 
                    className="relative w-full h-[20vh] bg-cover bg-center"
                    />
                </div>
                <div className=' w-full flex flex-col justify-center items-start p-6 '>
                    <span className=' mb-2 text-center w-full' >{food.name}</span>
                    <span className='text-center w-full'>${food.price}</span>
                    <span onClick={() => setOpen(true)} className=' bg-yellow-500 flex items-center justify-center w-full font-bold p-3 mt-1 rounded-tl-[36px] rounded-br-[36px] '>Add to order</span>
                </div>
            </div>

            <PreviewModal open={open} setOpen={setOpen}>
                <PreviewContent food={food} setOpen={setOpen} />
            </PreviewModal>

        </>
    )
}
