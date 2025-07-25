import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "motion/react"

const NavSection = () => {
const MotionNavLink = motion(NavLink);

  return (
    <motion.div className='NavSection'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}>
        <MotionNavLink whileHover={{ scale: 1.05 }}  to={"/"} className='HomeLink'>Home</MotionNavLink>
        <MotionNavLink whileHover={{ scale: 1.05 }} to={"/product"} className='ProductLink'>Product</MotionNavLink>
        <MotionNavLink whileHover={{ scale: 1.05 }} to={"/productDetail"} className='DetailLink'>Produc Details</MotionNavLink>
        <MotionNavLink whileHover={{ scale: 1.05 }} to={"/about"} className='StoryLink'>Our Story</MotionNavLink>
        <MotionNavLink whileHover={{ scale: 1.05 }} to={"/cart"} className='DetailLink'>Cart</MotionNavLink>
        <MotionNavLink whileHover={{ scale: 1.05 }} to={"/login"} className='LoginLink'>Log In</MotionNavLink>
    </motion.div>
  )
}

export default NavSection