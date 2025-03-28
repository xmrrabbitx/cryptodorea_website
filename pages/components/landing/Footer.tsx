import Image from 'next/image'
import styles from '@/styles/landing/Home.module.css'
import LinkedinLogo from "@/public/pics/linkedin.svg"
import TwitterLogo from "@/public/pics/twitter.svg"
import { Link } from 'react-router-dom'

export default function Footer(){

    return(
        <footer className={`${styles.footer} grid grid-cols-1 xl:mt-36 lg:mt-36 md:mt-36 sm:mt-16 mt-16`}>
          <div className="flex flex-grid xl:p-16 lg:p-16 md:p-16 sm:p-5 p-5">
            <div className='w-12/12'>
              <p className='xl:text-lg lg:text-[14px] md:text-[16px] sm:text-[16px] text-[12px] text-center'>About Us</p>
              <a href='#ourgoal' className='grid grid-cols-1 xl:text-md lg:text-md md:text-md sm:text-sm text-[12px] text-center font-bold pt-3'>
                  Our Goal
              </a>
            </div>
            <div className='w-12/12 pl-16'>
              <p  className='xl:text-lg lg:text-[14px] md:text-[16px] sm:text-[16px] text-[12px] text-center'>Community</p>
              <div className='flex flex-grid items-center justify-center mt-3'>
              
                <a href="https://www.linkedin.com/company/cryptodorea/" >
                  <Image className='' width={25} height={25} src={LinkedinLogo} alt="Linkedin logo" />
                </a>
              
              </div>
            </div>
            <div className='w-12/12 pl-16'>
              <p  className='xl:text-lg lg:text-[14px] md:text-[16px] sm:text-[16px] text-[12px] text-center'>Contact Us</p>
              <p className='mt-3 text-center'>
                  <a href='mailto:contact@cryptodorea.io' >Email</a>
              </p>
            </div>
          </div>

          <p className='text-center font-bold text-gray-800 mt-40 xl:mb-5 mb-16 xl:text-base text-xs'> 
            Copyright © 2025 by Crypto Dorea Co. All Rights Reserved. 
          </p>

        </footer>
    )
}