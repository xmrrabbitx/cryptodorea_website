import Image from 'next/image'
import Logo from "@/public/logos/doreaLogo.png"
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Header(){
    return(
        <header>

            <div className='container max-w-full' >
                <div className='grid grid-cols-2 gap-1 mt-10'> 

                    <div className='w-12/12 pl-5 flex flow-row'>
                        <div className='w-12/12 basis-15'>
                            <Image className="inline" src={Logo} alt="no logo" width={50}  height={50} />
                        </div>
                        <div className='ml-3 mt-3.5 items-center basis-1'>
                            <span className={`${styles.titleHeader}`}>Crypto</span>
                            <span className={`${styles.titleHeader} text-orange-500 ml-1`}>Dorea</span>
                        </div>
                    </div>

                    <div className='w-12/12 pr-10 pt-5 text-base flex justify-end'>
                        <span>
                            <Link href="/">
                                Home
                            </Link>
                            <Link className='ml-9' href="/#prices">
                                Prices
                            </Link>
                            <Link className='ml-9' href="/docs">
                                Docs
                            </Link>
                            <Link className='ml-9' href="/aboutus">
                                About us
                            </Link>
                        </span>
                        <span>
                            <span className='bg-[#FACA43] py-2 px-5  ml-16 rounded-md text-lg'>Launch app</span>
                        </span>
                    </div>

                </div>
            </div>

        </header>
    )
}