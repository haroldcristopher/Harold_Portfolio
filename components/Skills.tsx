import { mySkills } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Skills = () => {
    return (
        <div className='py-20' id='skills'>
            <h1 className="heading">
                My
                <span className='text-purple'>
                    {' '}Skills
                </span>
            </h1>

            <div className='w-full mt-12 grid lg:grid-cols-12 grid-cols-6 gap-10'>
                {mySkills.map((card) => (
                    <Button key={card.id} duration={Math.floor(Math.random() * 10000) + 10000} borderRadius='2rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800 bg-danger'>
                        <div className='flex lg:flex-col flex-col lg:items-center items-center p-2 py-2 md:p-2 lg:p-5 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />

                            <div className=''>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <p className='text-start text-white-100 mt-3 font-semibold'>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Skills