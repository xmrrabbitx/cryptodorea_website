import Image from 'next/image'
import Logo from "@/public/logos/doreaLogo.svg"
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Header(){

    return(
        <header>

            <div className='container max-w-full'>
                <div className='grid grid-cols-1 gap-1 mt-10'> 

                    <div className='w-12/12 xl:pl-20 pl-4 flex flow-row'>
                        <div className='w-12/12 basis-15'>
                            <Image className="xl:w-12 lg:w-12 md:w-12 sm:w-12 w-12" src={Logo} alt="no logo"  />
                        </div>
                        <div className='ml-3 mt-3.5 items-center basis-1'>
                            <span className={`${styles.titleHeader}`}>Crypto</span>
                            <span className={`${styles.titleHeader} text-orange-500 ml-1`}>Dorea</span>
                        </div>
                    </div>

                </div>
            </div>

        </header>
    )
}