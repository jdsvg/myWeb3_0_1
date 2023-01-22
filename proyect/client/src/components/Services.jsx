import {BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServicesCard = ({color, title, icon, subtitle}) => (
    <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl1'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className='mt-2 text-white text-lg'>{title}</h1>
            <p className='mt-2 text-white text-lg text-sm md:w-9/12'> {subtitle}</p>
        </div>
    </div>
)


const Services = () =>{
    return (
        // <div className='flex flex-col w-full justify-center items-center gradient-bg-services border-[0.5px] border-gray-400 bg-yellow-400'>
        //     <div className='flex mf:flex-row flex-col item-center justify-between md:p-200 py-12 px-4 border-[0.5px] border-gray-400 bg-red-400'>
        //         <div className='flex-1 flex flex-col justify-start items-start border-[0.5px] border-gray-400 bg-black'>
        //             <h1 className='text-white text-xl sm:text-5xl py-2 text-gradient'>
        //                 Services that we 
        //                 <br />
        //                 continue to improve
        //             </h1>
        //         </div>
        //     </div>
        //     {/*  */}
        //     <div className='flex-1 flex flex-col justify-start items-center border-[0.5px] border-gray-400 bg-black'>
        //         <ServicesCard
        //             color="bg-[#2952E3]"
        //             title="Security Guaranteed"
        //             icon={< BsShieldFillCheck fontSize={21} className='text-white' />}
        //             subtitle='Security is guaranteed. We always maintain privacy and mainting the quality of our product'
        //         />
        //         <ServicesCard
        //             color="bg-[#8945F8]"
        //             title="Best exchange rates"
        //             icon={< BsShieldFillCheck fontSize={21} className='text-white' />}
        //             subtitle='Security is guaranteed. We always maintain privacy and mainting the quality of our product'
        //         />
        //         <ServicesCard
        //             color="bg-[#F84550]"
        //             title="Fastest transactions"
        //             icon={< BsShieldFillCheck fontSize={21} className='text-white' />}
        //             subtitle='Security is guaranteed. We always maintain privacy and mainting the quality of our product'
        //         />
        //     </div>
        // </div>
        <div className='flex flex-col w-full md:flex-row justify-center items-center gradient-bg-services'>
            <div className='flex mf:flex-row flex-col item-center justify-between md:p-200 py-12 px-4'>
                <div className='flex-1 flex flex-col justify-start items-start'>
                    <h1 className='text-white text-xl sm:text-5xl py-2 text-gradient'>
                        Services that we 
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>
            {/*  */}
            <div className='flex-1 flex flex-col justify-start items-center'>
                <ServicesCard
                    color="bg-[#2952E3]"
                    title="Security Guaranteed"
                    icon={< BsShieldFillCheck fontSize={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and mainting the quality of our product'
                />
                <ServicesCard
                    color="bg-[#8945F8]"
                    title="Best exchange rates"
                    icon={< BiSearchAlt fontSize={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and mainting the quality of our product'
                />
                <ServicesCard
                    color="bg-[#F84550]"
                    title="Fastest transactions"
                    icon={< RiHeart2Fill fontSize={21} className='text-white' />}
                    subtitle='Security is guaranteed. We always maintain privacy and mainting the quality of our product'
                />
            </div>
        </div>
    );
}

export default Services;