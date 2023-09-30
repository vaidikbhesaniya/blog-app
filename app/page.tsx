import MyProfilePic from './components/MyProfilePic'
import Posts from "./components/Posts"
import Image from 'next/image'
export default function Home() {
  return (
    <main className=" mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center  text-[#e94822]">
        Hello and Welcome, &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold text-[#f6ff42]">Vaidik .</span>
        </span>
      </p>
<MyProfilePic></MyProfilePic>
     
      
<div className="w-[100%] h[50vh] z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e94822"
            fill-opacity="1"
            d="M0,0L48,16C96,32,192,64,288,101.3C384,139,480,181,576,170.7C672,160,768,96,864,80C960,64,1056,96,1152,128C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
            
<div className="w-[100%] h-[50vh] z-20 bg-[#e94822] relative top-[-40px]">
      <Posts></Posts>
      </div>

     

    </main>
  )
}
