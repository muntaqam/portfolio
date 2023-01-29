import Head from 'next/head';
import{BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillLinkedin, AiFillMail} from 'react-icons/ai';
import Image from 'next/legacy/image';
import heroImage from "../public/heroImage.png";
import coming from "../public/comingsoon.png";
import design from "../public/netflix.jpg";
import {useState} from "react";
import Link from 'next/link';
export default function Home() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" :""} >
      <Head>
        <title>Muntaqa Maahi Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-max pb-30">

          {/* ------------------- navbar ---------------------- */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-gray-50">Muntaqa Maahi</h1>
            <ul className='flex items-center'>
              <li>
                {/* darkmode */}
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-50"/>
              </li>
              <li>
                {/* resume */}
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>

          {/*-------------------------- hero -----------------------*/}

          <div className="text-center p-10">
          <div className="relative mx-auto rounded-full w-40 h40 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image  src={heroImage} />
          </div>

            <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl dark:text-gray-50">Muntaqa Maahi</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-teal-500">Student and Developer </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">I am a student at the Univeristy at Buffalo studying computer science.I am extermely passionate about creating anything from scratch my hobbies include coding, problem solving, reading and film making</p>

          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-50">

            <Link href="https://www.linkedin.com/in/muntaqam/"><AiFillLinkedin/></Link>
             
            <Link href="mailto:munma980@gmail.com" alt="munma980@gmail.com"><AiFillMail/></Link>
           
          </div>

        </section>
 
{/*-------------------------- porfolio section ------------------- */}
<section>
  <div>
    <h3 className="text-3xl py-10">Projects</h3>
  </div>

  {/* cards */}


  <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
    <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 flex-1 dark:bg-slate-400">
      <Link href="https://netflixmockupmaahi.netlify.app">
      <Image src={design} className="rounded-lg object-cover"width={'100%'} height={'100%'} layout="responsive"/></Link>
      <h3 className="text-lg font-medium pt-8 pb-2">Netflix Mockup</h3>
      <p className="py-2">Mockup of the Netflix home page using the tmbd API to fetch the updated movies & TV shows. </p>
      <h4 className="py-4 text-teal-600">Made with</h4>
      <div class="flex justify-between px-6">
      <p className="text-gray-800 py-1">ReactJS</p>
      <p className="text-gray-800 py-1">Firebase</p>
      <p className="text-gray-800 py-1">API</p>
      </div>

    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 flex-1 dark:bg-slate-400">
      <Image src={coming}className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
      <h3 className="text-lg font-medium pt-8 pb-2">coming soon..</h3>
      <p className="py-2">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
      <h4 className="py-4 text-teal-600">Made with</h4>
      <div class="flex justify-between px-6">
      <p className="text-gray-800 py-1">react</p>
      <p className="text-gray-800 py-1"> Javascript</p>
      <p className="text-gray-800 py-1"> TailwindCSS</p>
      </div>

    </div>

    <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 flex-1 dark:bg-slate-400 ">
      <Image src={coming}className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
      <h3 className="text-lg font-medium pt-8 pb-2">coming soon</h3>
      <p className="py-2">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
      <h4 className="py-4 text-teal-600">Made with</h4>
      <div class="flex justify-between px-6">
      <p className="text-gray-800 py-1">react</p>
      <p className="text-gray-800 py-1"> Javascript</p>
      <p className="text-gray-800 py-1"> TailwindCSS</p>
      </div>

    </div>

    <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 flex-1 dark:bg-slate-400">
      <Image src={coming} className="rounded-lg object-cover"width={'100%'} height={'100%'} layout="responsive"/>
      <h3 className="text-lg font-medium pt-8 pb-2">coming soon</h3>
      <p className="py-2">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
      <h4 className="py-4 text-teal-600">Made with</h4>
      <div class="flex justify-between px-6">
      <p className="text-gray-800 py-1">react</p>
      <p className="text-gray-800 py-1"> Javascript</p>
      <p className="text-gray-800 py-1"> TailwindCSS</p>
      </div>

    </div>
    
  </div>
</section>






      </main>
    </div>
  )
}
