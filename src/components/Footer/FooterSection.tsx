import { SocialIcon } from 'react-social-icons'
import whiteLogo from "G:/MeditatiiApp/planner-meditatii/src/assets/svg/white-logo.svg"
import SignUp from '../../pages/Sign-up'

export default function FooterSection()
{
    return (
        
        <section className='grid p-12 mt-2 md:grid-cols-2 grid-flow-col md:grid-rows-2 h-fit w-full bg-sky-500'>
            <div className='relative flex w-fit row-span-3 md:row-span-2'>
                <img src={whiteLogo} className="mt-auto mb-auto h-20"></img>
                <h1 className='p-3 mt-auto mb-auto font-bold text-white text-2xl'>Junior Coders</h1>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 grid-flow-col gap-10 md:gap-32 m-auto'>
                <div>
                    <h1 className='font-bold text-xl text-white'>About</h1>
                    <h2 className='text-md text-white'><a href='#'>Info</a></h2>
                    <h2 className='text-md text-white'><a href='#'>Our story</a></h2>
                    <h2 className='text-md text-white'><a href='#'>Support</a></h2>
                </div>
                <div>
                    <h1 className='font-bold text-xl text-white'>Follow us</h1>
                    <h2 className='text-md text-white'><a href='#'>Facebook</a></h2>
                    <h2 className='text-md text-white'><a href='#'>Instagram</a></h2>
                    <h2 className='text-md text-white'><a href='#'>Twitter</a></h2>
                </div>
                <div>
                    <h1 className='font-bold text-xl text-white'>Legal</h1>
                    <h2 className='text-md text-white'><a href='#'>Terms of use</a></h2>
                    <h2 className='text-md text-white'><a href='#'>Legal policy</a></h2>
                    <h2 className='text-md text-white'><a href='#'>Payments</a></h2>
                </div>
            </div>
            <div className='mt-10 grid grid-cols-3 grid-flow-col m-auto gap-10'>
                <SocialIcon url='https://www.instagram.com' bgColor='white'/>
                <SocialIcon url='https://www.facebook.com' bgColor='white'/>
                <SocialIcon url='https://www.linkedin.com' bgColor='white'/>
            </div>
        </section>
    )
}