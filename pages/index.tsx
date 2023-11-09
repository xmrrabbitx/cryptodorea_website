import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/landing/Home.module.css'
import titleMainPic from "@/public/pics/titleCryptoPic.svg"
import BitcoinPic from "@/public/pics/Bitcoin.svg"
import EthPic from "@/public/pics/Eth.svg"
import CashbackPic from "@/public/pics/cashback.svg"
import CreditCradPic from "@/public/pics/creditbalance.svg"
import OrderPaidPic from "@/public/pics/orderpaid.svg"
import CustomerPic from "@/public/pics/customer.svg"
import Cookies from 'js-cookie';
import { useState, useEffect, useRef  } from 'react';



const images = [
  'productSample_1.svg',
  'productSample_2.svg',
  'productSample_3.svg',
  'productSample_4.svg',
];

export default function Home(props:any) {


  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const trigger:any = document.getElementById('CustomerPic')
      if (trigger.getBoundingClientRect().top < window.innerHeight) {
        setShowContent(true)  
      }else{
        setShowContent(false)  
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const customerStyle = showContent ? 'bottom-0' : "hidden bottom-0";

  return (
    <>

      <Head>
        <title>Crypto Dorea: next generation crypto loyalty program</title>
        <meta name="description" content="crypto dorea description must be here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/doreaLogo.ico" />
      </Head>

      <main className='mt-5'>

        <div className='container max-w-full'>

          <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-1'> 
            <div className='w-12/12 2xl:pl-28 xl:pl-20 lg:pl-20 md:pl-8 sm:pl-4 pl-4'>
              <p className={`${styles.titleMain} 2xl:6xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl xl:mt-36 lg:mt-36 md:mt-16 sm:mt-28 mt-10`}>
                Crypto Cashback <br />
                to Loyal Customers
              </p>
              <p className="xl:text-lg text-sm mt-6 ">
                Create Crypto Loyalty Program for your Business
              </p>
              <p className='flex mt-4'>
                <span className='pt-1 text-sm'>get paid on:</span>
                <span><Image className='ml-2 xl:w-8 w-7' src={BitcoinPic} alt='Bitcoin image' width={35} height={35} /></span>
                <span><Image className='ml-2 xl:w-8 w-7' src={EthPic} alt='Ethereum image' width={35} height={35} /></span>
              </p>
              <div>
                  <button id={styles.joinButtonAnchore} className="w-30 p-4  pt-2.5 pb-2.5 text-center mt-5 xl:text-md/[19px]  text-sm/[17px]">
                      Join Waitlist
                  </button>
                  <input type='text' placeholder='your email address...' className='xl:text-md/[19px] text-sm xl:w-60 lg:w-60 md:w-60 sm:w-60 w-56 ml-3 pl-4 p-2 border-2 border-solid border-gray-300 rounded-lg'  />
              </div>
              <div>
                  <div></div>
              </div>
            </div>
            <div className={` w-12/12 pr-10 flex flow-row justify-center items-center`}>
              <div className='flex flow-row justify-center items-center'>
                <Image className={`${styles.titleMainPic} xl:mt-5 2xl:w-full xl:w-11/12 lg:w-full md:w-96 sm:60 xl:block lg:block md:block sm:block hidden`} src={titleMainPic} alt='title image' width={550} height={550} />  
              </div>
            </div>
          </div>

          <div className='grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-3 xl:gap-16 lg:gap-16 md:gap-16 sm:gap-16 gap-2 xl:mt-36 mt-20 p-5'>

            <div className='xl:col-span-1 xl:inline lg:inline md:inline sm:inline hidden '></div>
            <div className='col-span-1'>
              <div className={`${styles.percentsNumbers} xl:text-center lg:text-center md:text-center sm:text-center text-left text-6xl `}>21%</div>
              <div className={`${styles.percentsDescription} xl:text-center lg:text-center md:text-center sm:text-center text-left text-1x1`}>US adults hold Cryptocurrency</div>
            </div>
            <div className='col-span-1'>
              <div className={`${styles.percentsNumbers} xl:text-center lg:text-center md:text-center sm:text-center text-left text-6xl xl:m-0 mt-28`}>2K</div>
              <div className={`${styles.percentsDescription} xl:text-center lg:text-center md:text-center sm:text-center  text-left text-1xl`}>Around 2,300 businesses accept Bitcoin in the U.S</div>
            </div>
            <div className='col-span-1'>
            <div className={`${styles.percentsNumbers} xl:text-center lg:text-center md:text-center sm:text-center text-left text-6xl xl:mt-0 mt-60`}>45M</div>
              <div className={`${styles.percentsDescription} xl:text-center lg:text-center md:text-center sm:text-center text-left text-1xl`}>of Americans use crypto</div>
            </div>
            <div className='xl:col-span-1 xl:inline lg:inline md:inline sm:inline hidden '></div>

          </div>

          <div className='grid grid-cols-1 gap-16 xl:mt-16 lg:mt-16 md:mt-16 sm:mt-16 mt-10'>

            <div className={`${styles.and} col-span-1 text-center text-7xl`}>and</div>

          </div>

          <div className='grid grid-cols-4 gap-1 mt-16'> 
            <div className='col-span-1'></div>
            <div className='xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-4 xl:text-right lg:text-right md:text-right sm:text-right text-center text-9xl xl:pr-10 lg:pr-10 md:pr-10 sm:pr-10 pr-0'> 
              <span className={styles.percentsNumbers}>90%</span>
            </div>
            <div className='xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-4 text-left text-xl pt-8 p-5 font-bold'>
                <span className={styles.percentsDescription}>of American companies have some sort of Loyalty program. (<a className='text-orange-400 hover:text-orange-300' href="https://www.accenture.com/">Accensture</a>)</span>
            </div>
            <div className='col-span-1'></div>
          </div>

          <div className='flex items-center justify-center mt-8'>
              <hr className='h-0.5 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 w-8/12  ml-0 bg-gray-200 border-0 bg-black xl:mt-24 lg:mt-24 md:mt-24 sm:mt-24 mt-10 ' />
          </div>

          <div className='grid grid-cols-2 gap-1 mt-28'> 
            <div className='col-span-1 pl-28 mt-24'>
              <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>What is Crypto Dorea?</p>
              <div id={styles.doreaDefinition} className='mt-5 ml-14 pr-3 pl-7 pt-7 pb-7 rounded-md'>
                <p id={styles.doreaDefinitionText} className='text-lg font-bold'>Crypto Dorea is the new way of Loyalty Program brougth to your business using auto pay system powered by smart contract.</p>
              </div>
            </div>
            <div className='grid items-center justify-center relative'>

                <Image 
                id='CustomerPic'
                src={CustomerPic}
                className='rounded-full relative'
                width={550}
                height={550}
                alt='Crypto Dorea Customer'
                />

                <Image 
                src={OrderPaidPic}
                className={`${customerStyle} absolute right-28 opacity-0 animate-[order_2s_ease-out_forwards]`}
                width={220}
                alt='Crypto Dorea order paid'
                />
                <Image 
                src={CashbackPic}
                className={`${customerStyle} absolute right-28 opacity-0 animate-[cashback_2s_ease-out_forwards_1s]`}
                width={220}
                alt='Crypto Dorea cashback'
                />
                <Image 
                src={CreditCradPic}
                className={`${customerStyle} absolute  right-28 opacity-0 animate-[credit_2s_ease-out_forwards_3s]`}
                width={220}
                alt='Crypto Dorea credit card balance'
                />

            </div>
          </div>

          <div className='grid grid-cols-1 gap-1 mt-32'>
            <div className='w-12/12 pl-28'>
              <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>Why Crypto Dorea?</p>
                <div className='grid grid-cols-5 gap-5 mt-6'>
                  <div className={` 'w-12/12'`}></div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} w-12/12 text-lg font-bold p-8`}>
        
                  Integrated into <br /> your Website

                  </div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} w-12/12 text-lg font-bold p-8`}>Simple Auto Pay Mechanism</div>
                  <div id='infoBoxs' className={`${styles.infoBoxs}  w-12/12 text-lg font-bold p-8`}>Low Cost <br/> Blockchain Fees</div>
                  <div className={`'w-12/12'`}></div>
                </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-1 mt-16'>
            <div className='w-12/12 pl-28 mt-24'>
            <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>How it works?</p>
            <div className='grid grid-cols-5 gap-5'>
                  <div className={` 'w-12/12'`}></div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} w-12/12 text-lg font-bold p-8`}>
                    Create Crypto Giveaway Campaign
                  </div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} w-12/12 text-lg font-bold p-8`}>Customize <br/> Giveaway Campaign</div>
                  <div id='infoBoxs' className={`${styles.infoBoxs}  w-12/12 text-lg font-bold p-8`}>Auto Pay <br/> to your Customers</div>
                  <div className={`'w-12/12'`}></div>
                </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-1 mt-28'>
            <div className='w-12/12 flex items-center justify-center'>
                  <input type='text' placeholder='your email address...' className='text-md w-96 pl-4 p-3 border-2 border-solid border-gray-300 rounded-md'  />
            </div>
            <div className='w-12/12 flex items-center justify-center'>
                  <button id={styles.joinButton} className="w-12/12 pt-2 pb-2 text-center mt-3">
                      Join Waitlist
                  </button>
            </div>
          </div>

          <div className='flex items-center justify-center mt-4'>
              <hr className='h-0.5 w-8/12 ml-24 bg-gray-200 border-0 bg-black mt-24' />
          </div>

          <div className='grid grid-cols-1 gap-1 mt-20'> 
            <div className='w-8/12 pl-28'>
              <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>Our Goal?</p>
              <div id={styles.doreaDefinition} className='mt-5 ml-14 pr-3 pl-7 pt-7 pb-7 rounded-md'>
                <p id={styles.doreaDefinitionText} className='text-lg font-bold leading-10'>
                We are a team of specialists who believe everyone deserves more. So we gather together as the Dorea team to provide the best suit for your business. We aim for small- to mid-sized businesses because most crypto loyalty programs are expensive and not efficient. There is no limitation in crypto dorea; you can launch your own crypto campaign and give rewards to your most loyal customers using our Auto-Pay system at your specific date and time. We believe in privacy, so none of the information of your users will be saved in our database. All the processes are decentralized and transparent on supported blockchains.
                </p>
              </div>
            </div>
          </div>


        </div>


      </main>

    </>
  )
}

export async function getServerSideProps() {

  return {
    props:{}
  }
  
}


