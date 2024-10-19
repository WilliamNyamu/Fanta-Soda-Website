import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone } from 'react-icons/fa'; // Make sure you import necessary icons
import { motion } from 'framer-motion'; // Import the motion component from framer-motion
import Logo from '../../assets/logo.png'; // Ensure you correctly import the logo

const Footer = () => {
  return (
    <footer className='bg-primary py-8 text-white'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {/* company details section */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-6'
          >
            <img src={Logo} alt='logo' className='max-w-[100px] invert' />
            <div>
              <p className='flex items-center gap-2'>
                <FaPhone />
                +254 722000000
              </p>
            </div>
          </motion.div>

          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-6 space-x-4'
          >
            <h1 className='text-xl font-bold'>Quick Links</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <div>
                <ul>
                  <li>Home</li>
                  <li>Products</li>
                  <li>Blogs</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-6'
          >
            <h1 className='text-xl font-bold'>Social Links</h1>
            <div className='flex items-center gap-4'>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
