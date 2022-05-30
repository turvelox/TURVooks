import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function MyProInfo() {

  const [you, setYou] = useState(''); 

  useEffect(() => {
    const lsYou = JSON.parse(localStorage.getItem("you"));
    setYou(lsYou);  // 로컬스토리지에서 나의 계정을 꺼내 담아줌
  }, []);


    return (
      <div className="con-box min-h-[280px] md:min-h-fit">
          <div className="flex p-[20px] ">

            <div className="relative rounded-full border-all-1 font-hidden overflow-hidden w-[60px] h-[60px] min-w-[60px]">
              <Image src={`/user-default.png`} layout='fill' objectFit="cover" objectPosition="center" />
              <span className='absolute bottom-0 left-0 block bg-black/60 w-full h-[20px] text-center pt-[4px]'>
                <Image src={`/photo_edit.png`} width={12} height={10} />
              </span>
            </div>
            
            <div className='flex justify-evenly pl-[20px] w-full max-w-[390px]'>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{`0`}</p>
                <p className='text-sm text-center'>리디뷰</p>
              </div>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{you.linker}</p>
                <p className='text-sm text-center'>링커</p>
              </div>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{you.linking}</p>
                <p className='text-sm text-center'>링킹</p>
              </div>
            </div>

          </div>

          <div className='px-[20px] pb-[20px]'>
            <p className='py-[10px] font-green text-xs'>{you.userEmail}</p>
            <p className='py-[10px] text-xs'>{you.intro}</p>
          </div>
          
      </div>
    );
  }
  