import Image from 'next/image'
import styles from '@/styles/landing/Home.module.css'
import LinkedinLogo from "@/public/pics/linkedin.svg"
import TwitterLogo from "@/public/pics/twitter.svg"

export default function Footer(){
    return(
        <footer className={`${styles.footer} grid grid-cols-1 xl:mt-36 lg:mt-36 md:mt-36 sm:mt-16 mt-16`}>
          <div className="flex flex-grid xl:p-16 lg:p-16 md:p-16 sm:p-5 p-5">
            <div className='w-12/12'>
              <p className='xl:text-lg lg:text-lg md:text-lg sm:text-lg text-lg'>About Us</p>
              <a href='#ourgoal' className='grid grid-cols-1 xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base font-bold pt-2'>
                  Our Goal
              </a>
            </div>
            <div className='w-12/12 pl-16'>
              <p  className='xl:text-lg lg:text-lg md:text-lg sm:text-lg text-lg'>Community</p>
              <div className='flex flex-grid items-center justify-center gap-2 pt-2'>
              
                <a href="https://linkedin.com/cryptodorea" >
                  <Image className="" width={30} height={30} src={TwitterLogo} alt="Twitter logo" />
                </a>
                <a href="https://x.com/cryptodorea" >
                  <Image className='' width={30} height={30} src={LinkedinLogo} alt="Linkedin logo" />
                </a>
              
              </div>
            </div>
           
          </div>

          <p className='text-center font-bold text-gray-800 mt-40 xl:mb-5 mb-16 xl:text-base text-xs'> 
            Copyright © 2023 by Crypto Dorea Co. All Rights Reserved. 
          </p>

        </footer>
    )
}