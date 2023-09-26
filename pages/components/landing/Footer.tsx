import Image from 'next/image'
import styles from '@/styles/landing/Home.module.css'
import LinkedinLogo from "@/public/pics/linkedin.svg"
import TwitterLogo from "@/public/pics/twitter.svg"

export default function Footer(){
    return(
        <footer className={`${styles.footer} grid grid-cols-1 mt-36 pl-24 pt-16`}>
          <div className="flex flex-grid">
            <div className='w-12/12'>
              <p className='text-xl'>About Us</p>
              <a href='#ourgoal' className='grid grid-cols-1 text-1xl font-bold pt-2'>
                  Our Goal
              </a>
            </div>
            <div className='w-12/12 pl-16'>
              <p  className='text-xl'>Community</p>
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

          <p className='text-center font-bold text-gray-800 mt-40 mb-5'> 
              @cryptodorea
          </p>

        </footer>
    )
}