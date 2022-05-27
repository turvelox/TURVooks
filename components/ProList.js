import Link from 'next/link'
import Image from 'next/image'

export default function ProList() {
    return (
      <ul className='flex flex-wrap justify-start'>
         <li className='m-[0.5%] w-[32.3%] relative'>
           <Link href={`/`}>
              <div className='relative pb-[100%]'>
                <Image src={`/card01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                <span className='dark-over'></span>
                <div className='absolute left-[0px] top-[15px] z-10'>
                  <p className='text-white font-bold text-lg px-[15px] text-left md:font-medium md:text-sm'>돈 돈 돈 그놈의 돈이 문제였어!</p>
                </div>
                <div className='absolute right-[10px] bottom-[10px] z-10 flex'>
                    <span className='mini-book w-[40px] h-[60px] relative md:w-[30px] md:h-[45px]'>
                        <Image src={`/dal.png`} layout='fill' objectFit="cover" objectPosition="top" />
                    </span>
                </div>
              </div>
           </Link>
           <span className='absolute left-[10px] bottom-[10px] z-10' onClick={() => {console.log("delete!")}}>
                  <Image src='/delete.png' width={17} height={20} />
            </span>
         </li>
         <li className='m-[0.5%] w-[32.3%] relative'>
           <Link href={`/`}>
              <div className='relative pb-[100%]'>
                <Image src={`/card01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                <span className='dark-over'></span>
                <div className='absolute left-[0px] top-[15px] z-10'>
                  <p className='text-white font-bold text-lg px-[15px] text-left md:font-medium md:text-sm'>돈 돈 돈 그놈의 돈이 문제였어!</p>
                </div>
                <div className='absolute right-[10px] bottom-[10px] flex'>
                    <span className='mini-book w-[40px] h-[60px] relative md:w-[30px] md:h-[45px]'>
                        <Image src={`/dal.png`} layout='fill' objectFit="cover" objectPosition="top" />
                    </span>
                </div>
              </div>
           </Link>
           <span className='absolute left-[10px] bottom-[10px] z-10' onClick={() => {console.log("delete!")}}>
                  <Image src='/delete.png' width={17} height={20} />
            </span>
         </li>
         <li className='m-[0.5%] w-[32.3%] relative'>
           <Link href={`/`}>
              <div className='relative pb-[100%]'>
                <Image src={`/card01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                <span className='dark-over'></span>
                <div className='absolute left-[0px] top-[15px] z-10'>
                  <p className='text-white font-bold text-lg px-[15px] text-left md:font-medium md:text-sm'>돈 돈 돈 그놈의 돈이 문제였어!</p>
                </div>
                <div className='absolute right-[10px] bottom-[10px] flex'>
                    <span className='mini-book w-[40px] h-[60px] relative md:w-[30px] md:h-[45px]'>
                        <Image src={`/dal.png`} layout='fill' objectFit="cover" objectPosition="top" />
                    </span>
                </div>
              </div>
           </Link>
           <span className='absolute left-[10px] bottom-[10px] z-10' onClick={() => {console.log("delete!")}}>
                  <Image src='/delete.png' width={17} height={20} />
            </span>
         </li>
         <li className='m-[0.5%] w-[32.3%] relative'>
           <Link href={`/`}>
              <div className='relative pb-[100%]'>
                <Image src={`/card01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                <span className='dark-over'></span>
                <div className='absolute left-[0px] top-[15px] z-10'>
                  <p className='text-white font-bold text-lg px-[15px] text-left md:font-medium md:text-sm'>돈 돈 돈 그놈의 돈이 문제였어!</p>
                </div>
                <div className='absolute right-[10px] bottom-[10px] flex'>
                    <span className='mini-book w-[40px] h-[60px] relative md:w-[30px] md:h-[45px]'>
                        <Image src={`/dal.png`} layout='fill' objectFit="cover" objectPosition="top" />
                    </span>
                </div>
              </div>
           </Link>
           <span className='absolute left-[10px] bottom-[10px] z-10' onClick={() => {console.log("delete!")}}>
                  <Image src='/delete.png' width={17} height={20} />
            </span>
         </li>

      </ul>
    );
  }
  