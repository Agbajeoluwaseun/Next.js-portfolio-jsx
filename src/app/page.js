"use client"
import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs" ;
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png"
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
 const { theme, setTheme} = useTheme();

 // const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div /*className={darkMode ? "dark" : ""} */ > 
    <Head>
    <title> Agbaje Emmanuel Oluwaseun Portfolio</title>
    <meta name='description' content='created by Agbaje Emmanuel' />
    <link rel='icon' href='/favicon.ico' />
    </Head>
    <main className='bg-black px-10 md:px-20 lg:px-40 dark:bg-blue-300'>
    <section className="min-h-screen">
    <nav  className='py-10 mb-12 flex justify-between'>
    <h1 className='text-xl font-burton '>DevelopedbyAgbajeEmmanuel</h1>
    <ul className='flex items-center'>
    <li> 
    <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /> </li>
    <li> <a className= ' bg-gradient-to-r from-cyan-500 to-teal-500 text-black px-4 py-2 rounded-md ml-8' href='#'> Resume </a> </li>
    </ul>
    </nav>
    <div className='text-center p-10 py-10'>
    <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Agbaje Emmanuel Oluwaseun</h2>
    <h3 className='text-2xl py-2 md:text-3xl'>Developer and Designer</h3>
    <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
    Freelancer, providing services for programming and needs. Join me down below and lets get cracking
    </p>
    </div>
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
    <AiFillTwitterCircle />
    <AiFillLinkedin />
    <AiFillYoutube />
    </div>
    <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'> 
    <Image src={deved} alt='deved' layout='fill' objectFit="cover"/>
    </div>
    </section>
    
    <section>
    <div>
    <h3 className='text-3xl py-1'> Services I Offer </h3>
      <p className='text-md py-2 leading-8 text-gray-800' > Since the begining of my career as a freelance developer, I have done remote work for <span className='text-teal-500'> agencies </span> consulted for <span className='text-teal-500' >startups</span> and 
      collaborated with talented people to create digital products for both businesses and consumer use. </p>
    <p className='text-md py-2 leadimg-8 text-gray-800'> I offer a wide range of services including programming and teaching.</p>
      </div>
      <div className='lg:flex gap-10'>
      <div className='flex flex-col items-center justify-center text-center  shadow-lg p-10 rounded-xl my-10'>
      <Image className='items-center' src={code} alt='design' width={100} height={100} />
      <h3 className='text-lg font-medium pt-8 pb-2'> Beautiful Designs</h3>
      <p className='py-2'> {""}
      Building dynamic websites suitable for your needs following your design theory
      </p>
      <h4 className='py-4 text-teal-800' > Tools I use</h4>
      <p className='text-gray-800 py-1' > React</p> 
      <p className='text-gray-800 py-1'  >Next.js </p>
      <p className='text-gray-800 py-1' > Tailwind Css</p>
      <p className='text-gray-800 py-1'> Bootstrap css </p>
      </div>
      <div className='flex flex-col items-center justify-center text-center  shadow-lg p-10 rounded-xl my-10'>
      <Image className='items-center' src={design} alt='design' width={100} height={100} />
      <h3 className='text-lg font-medium pt-8 pb-2'> Beautiful Designs</h3>
      <p className='py-2'> {""}
      Building dynamic websites suitable for your needs following your design theory
      </p>
      <h4 className='py-4 text-teal-800' > Tools I use</h4>
      <p className='text-gray-800 py-1' > React</p> 
      <p className='text-gray-800 py-1'  >Next.js </p>
      <p className='text-gray-800 py-1' > Tailwind Css</p>
      <p className='text-gray-800 py-1'> Bootstrap css </p>
      </div>
      <div className='flex flex-col items-center justify-center text-center  shadow-lg p-10 rounded-xl my-10'>
      <Image src={consulting} alt='design' width={100} height={100} />
      <h3 className='text-lg font-medium pt-8 pb-2'> Beautiful Designs</h3>
      <p className='py-2'>
      Building dynamic websites suitable for your needs following your design theory
      </p>
      <h4 className='py-4 text-teal-800' > Tools I use</h4>
      <p className='text-gray-800 py-1' > React</p> 
      <p className='text-gray-800 py-1'  >Next.js </p>
      <p className='text-gray-800 py-1' > Tailwind Css</p>
      <p className='text-gray-800 py-1'> Bootstrap css </p>
      </div>
    </div>
    </section>
    <section className='py-10'>
    <div>
    <h3 className='text-3xl py-1'> Portfolio</h3>
    <p className='text-md py-2 leading-8 text-gray-800' > Since the begining of my career as a freelance developer, I have done remote work for <span className='text-teal-500'> agencies </span> consulted for <span className='text-teal-500' >startups</span> and 
    collaborated with talented people to create digital products for both businesses and consumer use. </p>
  <p className='text-md py-2 leadimg-8 text-gray-800'> I offer a wide range of services including programming and teaching.</p>
    </div>
   
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
    <div className='basis-1/3 flex-1' > 
    <Image
     src={web1} 
     className='rounded-lg object-cover' 
     alt="web1"
     width={"100%"}
     height={"100%"}
     layout='responsive'
      />
    </div>
    <div className='basis-1/3 flex-1' > 
    <Image
     src={web2} 
     alt="web2"
     className='rounded-lg object-cover' 
     width={"100%"}
     height={"100%"}
     layout='responsive'
       />
    </div>
    <div className='basis-1/3 flex-1' > 
    <Image 
    src={web3}
     alt="web3"
     className='rounded-lg object-cover' 
     width={"100%"}
     height={"100%"}
     layout='responsive'
     />
    </div>
    <div className='basis-1/3 flex-1'  > 
    <Image 
    src={web4} 
    alt="web4" 
    className='rounded-lg object-cover' 
     width={"100%"}
     height={"100%"}
     layout='responsive'
    />
    </div>
    <div className='basis-1/3 flex-1' > 
    <Image
     src={web5}
      alt="web5"
      className='rounded-lg object-cover' 
     width={"100%"}
     height={"100%"}
     layout='responsive'
       />
    </div>
    <div className='basis-1/3 flex-1' > 
    <Image 
    src={web6} 
    alt="web6"
    className='rounded-lg object-cover' 
     width={"100%"}
     height={"100%"}
     layout='responsive'
    />
    </div>
    </div>

    </section>
    </main>
    </div>
  ) ;
}
