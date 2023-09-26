import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/landing/Home.module.css'
import titleMainPic from "@/public/pics/titleCryptoPic.svg"
import BitcoinPic from "@/public/pics/Bitcoin.svg"
import EthPic from "@/public/pics/Eth.svg"
import productsample1 from "@/public/pics/productSample_1.svg"
import Cookies from 'js-cookie';
import { useState, useEffect, useRef  } from 'react';



const images = [
  'productSample_1.svg',
  'productSample_2.svg',
  'productSample_3.svg',
  'productSample_4.svg',
];

export default function Home(props:any) {


  const [currentImage, setCurrentImage] = useState(0);


  useEffect(():any => {
    const interval = setInterval(() => {
      if(currentImage >= 3){
        
        setCurrentImage(-1);
      }
        setCurrentImage((prevImage) => (prevImage + 1));
      console.log(currentImage)
    }, 3000);

    return () => clearInterval(interval);
  });


  return (
    <>

      <Head>
        <title>Crypto Dorea: next generation crypto loyalty program</title>
        <meta name="description" content="crypto dorea description must be here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/doreaLogo.ico" />
      </Head>

      <main>

        <div className='container max-w-full'>

          <div className='grid grid-cols-2 gap-1'> 
            <div className='w-12/12 pl-28'>
              <p className={`${styles.titleMain} xl:text-6xl lg:text-4xl md:text-3xl mt-36`}>
                Crypto Giveaways <br />
                to Loyal Customers
              </p>
              <p className="text-1xl mt-6">
                Create Crypto Loyalty Program for your Business
              </p>
              <p className='flex mt-4'>
                <span className='pt-1'>get paid on:</span>
                <span><Image className='ml-2' src={BitcoinPic} alt='no bitcoin image' width={35} height={35} /></span>
                <span><Image className='ml-2' src={EthPic} alt='no Ethereum image' width={35} height={35} /></span>
              </p>
              <div>
                  <button id={styles.joinButtonAnchore} className="w-12/12 pt-2 pb-2 text-center mt-5">
                      Join Waitlist
                  </button>
                  <input type='text' placeholder='your email address...' className='text-base w-60 ml-3 pl-4 p-2   border-2 border-solid border-gray-300 rounded-lg'  />
              </div>
              <div>
                  <div></div>
              </div>
            </div>
            <div className={` w-12/12 pr-10 flex flow-row justify-center items-center`}>
              <div className=''>
                <Image className={`${styles.titleMainPic} xl:w-90 lg:w-85 md:w-80 sm:60`} src={titleMainPic} alt='no title image available' />  
              </div>
            </div>
          </div>

          <div className='grid grid-cols-5 gap-16 mt-28'>
            <div className='w-12/12'></div>
            <div className='w-12/12'>
              <div className={`${styles.percentsNumbers} text-center text-6xl`}>21%</div>
              <div className={`${styles.percentsDescription} text-center text-1xl`}>of Americans own Cryptocurrency</div>
            </div>
            <div className='w-12/12 '>
              <div className={`${styles.percentsNumbers} text-center text-6xl`}>2K</div>
              <div className={`${styles.percentsDescription} text-center text-1xl`}>Approximately 2,300 businesses accept Bitcoin in the U.S</div>
            </div>
            <div className='w-12/12 '>
            <div className={`${styles.percentsNumbers} text-center text-6xl`}>45M</div>
              <div className={`${styles.percentsDescription} text-center text-1xl`}>of Americans use crypto</div>
            </div>
            <div className='w-12/12 '></div>

          </div>

          <div className='grid grid-cols-5 gap-16 mt-16'>
            <div className='w-12/12'></div>
            <div className='w-12/12'></div>
            <div className={`${styles.and} w-12/12 text-center text-6xl`}>and</div>
            <div className='w-12/12'></div>
            <div className='w-12/12'></div>
          </div>

          <div className='grid grid-cols-4 gap-1 mt-16'> 
            <div className='w-12/12'></div>
            <div className='w-12/12 text-right text-9xl pr-10'> 
              <span className={styles.percentsNumbers}>90%</span>
            </div>
            <div className='w-12/12 text-left text-xl pt-8 font-bold'>
                <span className={styles.percentsDescription}>of American companies have some sort of Loyalty program. (<a className='text-orange-400 hover:text-orange-300' href="https://www.accenture.com/">Accensture</a>)</span>
            </div>
            <div className='w-12/12'></div>
          </div>

          <div className='flex items-center justify-center mt-8'>
              <hr className='h-0.5 w-8/12 ml-24 bg-gray-200 border-0 bg-black mt-24' />
          </div>

          <div className='grid grid-cols-2 gap-1 mt-28'> 
            <div className='w-12/12 pl-28 mt-24'>
              <p id={styles.doreaDefinitionTitle} className='text-xl font-bold'>What is Crypto Dorea?</p>
              <div id={styles.doreaDefinition} className='mt-5 ml-14 pr-3 pl-7 pt-7 pb-7 rounded-md'>
                <p id={styles.doreaDefinitionText} className='text-lg font-bold'>Crypto Dorea is the new way of Loyalty Program brougth to your business using auto pay system powered by smart contract.</p>
              </div>
            </div>
            <div className='w-12/12'>
              <div className="image-slider pl-20"> 
                
                  {images.map((image, index) => (
                    <Image
                      key={index}
                      src={`/pics/${image}`}
                      alt={`Image ${index + 1}`}
                      className={`${index === currentImage ? styles.slideVisible : styles.slideHidden} ${styles.slideshow} `}
                      width={100}
                      height={100}
                      quality={100}
                    />
                  ))}

                </div>
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


