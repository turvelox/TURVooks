import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function ProInfo({ userId }) {

  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);

  useEffect(() => {
    const storageUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(storageUsers);
  }, []);

  useEffect(() => {
    setUserIndex(users.findIndex(obj => obj.userId == userId));
  }, [users, userId]);


    return (
      <div className="con-box min-h-[280px] md:min-h-fit">
          <div className="flex p-[20px] ">

            <div className="relative rounded-full border-all-1 font-hidden overflow-hidden w-[60px] h-[60px] min-w-[60px]">
              <Image src={users?.[userIndex]?.userImg || '/user-default.png'} layout='fill' objectFit="cover" objectPosition="center" />
            </div>
            
            <div className='flex justify-evenly pl-[20px] w-full max-w-[390px]'>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{`4`}</p>
                <p className='text-sm text-center'>리디뷰</p>
              </div>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{users?.[userIndex]?.linker || '0'}</p>
                <p className='text-sm text-center'>링커</p>
              </div>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{users?.[userIndex]?.linking || '0'}</p>
                <p className='text-sm text-center'>링킹</p>
              </div>
            </div>

          </div>

          <div className='px-[20px] pb-[20px]'>
            <p className='py-[10px] font-green text-xs'>{users?.[userIndex]?.userEmail || ''}</p>
            <p className='py-[10px] text-xs'>{users?.[userIndex]?.intro || ''}</p>
          </div>
          
      </div>
    );
  }
  