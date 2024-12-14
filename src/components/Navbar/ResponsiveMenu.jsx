import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence>       
    {
        open && (
            <motion.div
            initial= {{ opacity : 0 }}
            animate= {{ opacity : 1 }}
            exit= {{ opacity : 0 }}
            className = "fixed top-0 left-0 w-full h-full bg-black/60 z-10"
            >
            <div>

            </div>
            </motion.div>
        )
    }
    </AnimatePresence>       
  )
}

export default ResponsiveMenu