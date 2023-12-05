import Head from 'next/head'
import Image from 'next/image'
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home(props:any) {

  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const trigger:any = document.getElementById('CustomerPic')
      if (trigger.getBoundingClientRect().top < (window.innerHeight/1.5)) {
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


  // email address
  const [emailAddress, setEmailAddress] = useState("");

  
  // handle email submission
  const EmailSubmit = async (event:any) => {

    event.preventDefault();

    const response = await fetch("http://localhost:3000/api/email/sendWelcomeEmail",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({emailAddress}),

    });

    const resp = await response.json();
    
    // error and response of email
    if(resp.error){
        toast.error(resp.error);
    }else{
        toast.success(resp.success);
    }

  }

  return (
    <>

      <Head>
        <title>Crypto Dorea: next generation crypto loyalty program</title>
        <meta name="description" content="crypto dorea description must be here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/doreaLogo.ico" />
      </Head>

        <div className='container max-w-full mt-5'>
          <ToastContainer />
          <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-1'> 
            <div className='w-12/12 2xl:pl-28 xl:pl-20 lg:pl-20 md:pl-8 sm:pl-4 pl-4'>
              <p className={`${styles.titleMain} 2xl:6xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl xl:mt-36 lg:mt-36 md:mt-16 sm:mt-18 mt-10`}>
                Crypto Cashback <br />
                to Loyal Customers
              </p>
              <p className={`${styles.titleCaption} xl:text-lg text-sm mt-6 `}>
                Create Crypto Loyalty Program for your Business
              </p>
              <p className='flex mt-4'>
                <span className={`${styles.titleCaption} pt-1 text-sm`}>get paid on:</span>
                <span><Image className='ml-2 xl:w-8 w-7' src={BitcoinPic} alt='Bitcoin image' width={35} height={35} /></span>
                <span><Image className='ml-2 xl:w-8 w-7' src={EthPic} alt='Ethereum image' width={35} height={35} /></span>
              </p>
              <div>
                <form onSubmit={EmailSubmit}> 
                  <button id={styles.joinButtonAnchore} className="w-30 p-4 xl:ml-0 lg:mr-3 md:mr-3 sm:mr-3 mr-3 pt-2.5 pb-2.5 text-center mt-5 xl:text-md/[19px]  text-sm/[17px]">
                      Join Waitlist
                  </button>
                  <input 
                  onChange={(event)=>setEmailAddress(event.target.value)}
                  type='text' 
                  placeholder='your email address...' 
                  className='xl:text-md/[19px] text-sm xl:w-60 lg:w-60 md:w-40 sm:w-40 w-46 mt-5 pl-4 p-2 border-2 border-solid border-gray-300 rounded-lg'  />
                </form>
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

          <div className='grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 xl:gap-16 lg:gap-16 md:gap-16 sm:gap-16 gap-6 xl:mt-36 mt-16 p-5 word-break'>

            <div className='xl:col-span-1 xl:inline lg:inline md:hidden sm:hidden hidden '></div>
            <div className='xl:col-span-1 col-span-1'>
              <div className={`${styles.percentsNumbers} xl:text-center lg:text-center md:text-center sm:text-center xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl text-center`}>21%</div>
              <div className={`${styles.percentsDescription} xl:text-center lg:text-center md:text-center sm:text-center text-center xl:text-base lg:text-base md:text-base sm:text-base text-[12px]`}>US adults hold Cryptocurrency</div>
            </div>
            <div className='xl:col-span-1 col-span-1'>
              <div className={`${styles.percentsNumbers} xl:text-center lg:text-center md:text-center sm:text-center xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl xl:m-0 text-center`}>2.3K</div>
              <div className={`${styles.percentsDescription} xl:text-center lg:text-center md:text-center sm:text-center  text-center xl:text-base lg:text-base md:text-base sm:text-base  text-[12px]`}>Around 2,300 businesses accept Bitcoin in the U.S</div>
            </div>
            <div className='xl:col-span-1 col-span-1'>
            <div className={`${styles.percentsNumbers} xl:text-center lg:text-center md:text-center sm:text-center xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl  xl:mt-0 text-center`}>45M</div>
              <div className={`${styles.percentsDescription} xl:text-center lg:text-center md:text-center sm:text-center text-center xl:text-base lg:text-base md:text-base sm:text-base  text-[12px]`}>of Americans use crypto</div>
            </div>
            <div className='xl:col-span-1 xl:inline lg:inline md:hidden sm:hidden hidden '></div>

          </div>

          <div className='grid grid-cols-1 gap-16 xl:mt-16 lg:mt-16 md:mt-16 sm:mt-16 mt-10'>

            <div className={`${styles.and} col-span-1 text-center text-7xl`}>and</div>

          </div>

          <div className='grid grid-cols-4 gap-1 mt-16'> 
            <div className='xl:col-span-1 xl:inline lg:inline md:hidden sm:hidden hidden '></div>
            <div className='xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-4 xl:text-right lg:text-right md:text-right sm:text-right text-center text-9xl xl:pr-10 lg:pr-10 md:pr-10 sm:pr-10 pr-0'> 
              <span className={styles.percentsNumbers}>98%</span>
            </div>
            <div className='xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-4 text-left text-xl pt-8 p-5 font-bold'>
                <span className={styles.percentsDescription}>of American Businesses have some sort of Loyalty program. (<a className='text-orange-400 hover:text-orange-300' href="https://www.accenture.com/">Accensture</a>)</span>
            </div>
            <div className='xl:col-span-1 xl:inline lg:inline md:hidden sm:hidden hidden '></div>
          </div>

          <div className='flex items-center justify-center mt-8'>
              <hr className='h-0.5 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 w-8/12  ml-0 bg-gray-200 border-0 bg-black xl:mt-24 lg:mt-24 md:mt-24 sm:mt-24 mt-10 ' />
          </div>

          <div className='grid grid-cols-2 gap-1 xl:mt-28 mt-16'> 
            <div className='xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 xl:ml-28 lg:ml-12 md:ml-8 sm:ml-0 xl:p-0 lg:p-0 md:p-0 sm:p-5 p-5 xl:mt-24 mt-5'>
              <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>What is Crypto Dorea?</p>
              <div id={styles.doreaDefinition} className='mt-5 xl:ml-14 ml-0 pr-3 pl-7 pt-7 pb-7 rounded-md'>
                <p id={styles.doreaDefinitionText} className='xl:text-lg text-base xl:leading-9 leading-8  font-bold'>Crypto Dorea is the new way of Loyalty Program brougth to your business using auto pay system powered by smart contract.</p>
              </div>
            </div>
            <div className='xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 xl:p-0 lg:p-0  md:p-0 sm:p-0 p-5 grid items-center justify-center relative'>

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
                className={`${customerStyle} absolute xl:right-28 right-10 opacity-0 xl:w-[220px] lg:w-[220px] md: sm: w-40 xl:animate-[order_2s_ease-out_forwards] animate-[orderSmall_2s_ease-out_forwards] `}
                width={220}
                alt='Crypto Dorea order paid'
                />
                <Image 
                src={CashbackPic}
                className={`${customerStyle} absolute xl:right-28 right-10 opacity-0 xl:w-[220px] lg:w-[220px] md: sm: w-40 xl:animate-[cashback_2s_ease-out_forwards_1s] animate-[cashbackSmall_2s_ease-out_forwards_1s]`}
                width={220}
                alt='Crypto Dorea cashback'
                />
                <Image 
                src={CreditCradPic}
                className={`${customerStyle} absolute  xl:right-28 right-10 opacity-0 xl:w-[220px] lg:w-[220px] md: sm: w-40 xl:animate-[credit_2s_ease-out_forwards_2s] animate-[creditSmall_2s_ease-out_forwards_2s]`}
                width={220}
                alt='Crypto Dorea credit card balance'
                />

            </div>
          </div>

          <div className='grid grid-cols-1 gap-1 mt-32 xl:pr-0 md:pr-5 pr-0'>
            <div className='col-span-1 xl:ml-28 lg:ml-12 md:ml-8 sm:ml-0 xl:p-0 lg:p-0 md:p-0 sm:p-5 p-5'>
              <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>Why Crypto Dorea?</p>
                <div className='grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-5 mt-6 '>
                  <div className={`'xl:col-span-1 xl:inline lg:hidden md:hidden sm:hidden hidden'`}></div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} hover:bg-[#FACA43] xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-5  xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base font-bold p-8`}>
                    <div className=' flex items-center justify-center pb-3'>
                      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                      </svg>
                    </div>
                    <p className='pb-4'>Integrated into <br /> your Website</p>

                  </div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} hover:bg-[#FACA43] xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-5 xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base font-bold p-8`}>
                  <div className=' flex items-center justify-center pb-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>

                  </div>
                  <p className='pb-4'>Simple Auto Pay <br /> Mechanism</p>
                  </div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} hover:bg-[#FACA43] xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-5 xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base font-bold p-8`}>
                  <div className=' flex items-center justify-center pb-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                  </div>
                  <p className='pb-4'>Low Cost <br/> Blockchain Fees</p>
                    
                  </div>
                  <div className={`'xl:col-span-1 xl:inline lg:hidden md:hidden sm:hidden hidden'`}></div>
                </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-1 xl:mt-40 lg:mt-40 md:mt-40 sm:mt-40 mt-16 xl:pr-0 md:pr-5 pr-0'>
            <div className='w-12/12 xl:ml-28 lg:ml-12 md:ml-8 sm:ml-0 xl:p-0 lg:p-0 md:p-0 sm:p-5 p-5'>
            <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>How it works?</p>
            <div className='grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-5'>
                  <div className={` 'xl:col-span-1 xl:inline lg:hidden md:hidden sm:hidden hidden'`}></div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} hover:bg-[#FACA43] xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-5 xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base font-bold p-8`}>
                  <div className=' flex items-center justify-center pb-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                  </div>
                  <p className='pb-4'> Create Crypto <br /> Cashback Program</p>
                  </div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} hover:bg-[#FACA43] xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-5 xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base font-bold p-8`}>
                  <div className='flex items-center justify-center pb-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  </div>
                  <p className='pb-4'> Customize <br/> Cashback Program</p>
                    
                    </div>
                  <div id='infoBoxs' className={`${styles.infoBoxs} hover:bg-[#FACA43] xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-5 xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base font-bold p-8`}>
                  <div className=' flex items-center justify-center pb-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  </div>
                  <p className='pb-4'>Auto Pay <br/> to your Customers</p>
                    
                    </div>
                  <div className={`'xl:col-span-1 xl:inline lg:hidden md:hidden sm:hidden hidden'`}></div>
                </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-1 xl:mt-28 lg:mt-28 md:mt-28 sm:mt-28 mt-10 p-5'>
            <div className='w-12/12 flex items-center justify-center'>
                <p className='text-slate-700 xl:text-lg lg:text-lg md:text-lg sm:text-lg text-lg font-bold p-8 text-center'>get update on <span className='text-[#faa143]'>Crypto Dorea</span> product</p>
            </div>
            <div className='w-12/12 flex items-center justify-center'>
                  <input 
                  onChange={(event)=>setEmailAddress(event.target.value)}
                  type='text' 
                  placeholder='your email address...' 
                  className='text-md w-96 pl-4 p-3 border-2 border-solid border-gray-300 rounded-md'  />
            </div>
            <div className='w-12/12 flex items-center justify-center'>
                <form onSubmit={EmailSubmit}> 
                  <button id={styles.joinButton} className="w-12/12 pt-2 pb-2 text-center mt-3">
                      Join Waitlist
                  </button>
                </form>
            </div>
          </div>

          <div id='ourgoal' className='flex items-center justify-center mt-4'>
              <hr className='h-0.5 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 w-8/12  ml-0 bg-gray-200 border-0 bg-black xl:mt-24 lg:mt-24 md:mt-24 sm:mt-24 mt-10 ' />
          </div>

          <div className='grid grid-cols-1 gap-1 mt-20 xl:pl-28 lg:pl-28 md:pl-8 sm:pl-8 xl:p-0 lg:p-5 md:p-5 p-5 '>                                    
            <div className='xl:w-8/12 lg:w-8/12 md:w-12/12 sm:w-12/12 w-12/12 '>
              <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>Our Goal?</p>
              <div id={styles.doreaDefinition} className='mt-5 xl:ml-14 lg:ml-14 md:ml-14 sm:ml-14 ml-0 pr-3 pl-7 pt-7 pb-7 rounded-md'>
                <p id={styles.doreaDefinitionText} className='xl:text-lg lg:text-lg md:text-lg sm:text-lg text-[16px] font-bold xl:leading-[47px] lg:leading-10 md:leading-10 leading-9'>
                  We are a team of experts who believe everyone deserves more. So we gather together as the Dorea team to provide the best suit for your business. now our focus is small- to mid-sized businesses because most crypto loyalty programs are expensive and not efficient. There is no limitation in crypto dorea; you can launch your own crypto campaign cashback and give rewards to your most loyal customers using our Auto-Pay system at your specific date and time. We believe in privacy, so none of the information of your users will be saved in our database. All the processes are decentralized and transparent on supported blockchains.
                </p>
              </div>
            </div>
          </div>


        </div>

    </>
  )
}

export async function getServerSideProps() {

  return {
    props:{}
  }
  
}