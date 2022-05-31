import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function ProVook({ userId }) {

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
      <>
      <div className='con-box px-[20px] py-[10px] min-h-[280px] md:min-h-fit relative'>
        <a target="_blank" href={`https://book.naver.com/bookdb/book_detail.naver?bid=${users?.[userIndex]?.vookLink}`}>
            <div className='flex items-center py-[10px]'>
                <span className='flex flex-col items-center'>
                    <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                    <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                        <Image src={users?.[userIndex]?.vookImg || '/bookdefault.png'} layout='fill' objectFit="cover" objectPosition="top" />
                    </span>
                </span>
                <span className='pl-[15px]'>
                    <p className='text-sm font-bold ellipsis-4'>{users?.[userIndex]?.vookTitle || 'Loading...'}</p>
                    <p className='text-xs pt-[15px]'>{users?.[userIndex]?.vookAuthor || ''}</p>
                </span>
            </div>
        </a>
        <div className='py-[10px]'>
          <p className='text-xs font-gray ellipsis-5'>{users?.[userIndex]?.vookCopy || ''}</p>
        </div>
      </div>
      </>
    );
  }
  