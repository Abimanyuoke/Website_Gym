import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg  from '../../assets/dumbell.png'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight } from '../../utility/animation';
import ShapeImg  from '../../assets/shape.png'


const Hero = () => {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
            {/* Brand Info */}
            <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                <div className='text-center md:text-left space-y-6 '>
                    <motion.h1 
                    initial="hidden"
                    variants = {SlideRight(0.6)} 
                    animate="visible" 
                    className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>
                        Gym Gives you the perfect{" "}<span className='text-primary'>Health</span>{" "}
                    </motion.h1>
                    <motion.p
                    initial="hidden"
                    variants = {SlideRight(1.2)} 
                    animate="visible" 
                    className='text-gray-600 xl:max-w-[500px]'>
                        it is a long established fact that a reader will be by readable content of a page when are the best product
                    </motion.p>
                    {/* button section */}
                    <motion.div
                    initial="hidden"
                    variants = {SlideRight(1.5)} 
                    animate="visible"  
                    className='flex justify-center items-center gap-8 md:justify-start'>
                        <button className='primary-btn flex items-center gap-2'>
                        {" "}
                        Order Now
                        </button>
                        <button className='flex justify-center items-center gap-2'>
                            <div className='py-4 px-4 bg-white rounded-full flex justify-center items-center drop-shadow shadow-black'>
                                <FaPlay className='text-primary'/>
                            </div>Watch Now</button>
                    </motion.div>
                </div>
            </div>
            {/* Hero Image */}
            <div className='flex justify-center items-center'>
                <motion.img
                initial= "hidden"
                variants = {SlideLeft(1.5)} 
                animate="visible" 
                src={HeroImg} alt="" className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'/>
            </div>
            {/* Hero Image */}
                <img src={ShapeImg} alt="" className='w-[250px] md:w-[550px] xl:w-[600px] drop-shadow -top-28 -left-72 absolute'/>
        </div>
    </section>
  )
}

export default Hero