import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg  from '../../assets/dumbell.png'

const Hero = () => {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
            {/* Brand Info */}
            <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                <div className='text-center md:text-left space-y-6 '>
                    <h1 className='text-6xl lg:text-7xl leading-relaxed xl:leading-normal font-bold'>
                        Gym Gives you the perfect <span className='text-primary'>Health</span>{" "}
                    </h1>
                    <p className='text-gray-600 xl:max-w-[500px]'>
                        it is a long established fact that a reader will be by readable content of a page when are the best product
                    </p>
                    {/* button section */}
                    <div className='flex justify-center items-center gap-8 md:justify-start'>
                        <button className='primary-btn flex items-center gap-2'>
                        {" "}
                        Order Now
                        </button>
                        <button className='flex justify-center items-center gap-2'>
                        <FaPlay/> Watch Now</button>
                    </div>
                </div>
            </div>
            {/* Hero Image */}
            <div className='flex justify-center items-center'>
                <img src={HeroImg} alt="" className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'/>
            </div>
        </div>
    </section>
  )
}

export default Hero