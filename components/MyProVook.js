import Image from 'next/image'
import React, {useState, useEffect} from 'react'

export default function ProVook() {

  const [you, setYou] = useState("");
  
  useEffect(() => {
    setYou(JSON.parse(localStorage.getItem("you")));
  }, []);

  const imReady = () => {
    alert("준비중입니다...");
  };

    return (
      <>
      <div className='con-box px-[20px] py-[10px] min-h-[280px] md:min-h-fit relative'>
        <span onClick={imReady} className='absolute top-[-25px] right-0 font-hidden'>
          <span className='pr-[5px] text-xs font-gray'>Edit</span>
          <Image src='/edit-icon.png' width={12} height={12} alt="" />
        </span>
        <a target="_blank" rel="noopener noreferrer" href={`https://book.naver.com/bookdb/book_detail.naver?bid=${you.vookLink}`}>
            <div className='flex items-center py-[10px]'>
                <span className='flex flex-col items-center'>
                    <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                    <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                        <Image src={you.vookImg ? you.vookImg : '/bookdefault.png'} layout='fill' objectFit="cover" objectPosition="top" alt="" />
                    </span>
                </span>
                <span className='pl-[15px]'>
                    <p className='text-sm font-bold ellipsis-4'>{you.vookTitle}</p>
                    <p className='text-xs pt-[15px]'>{you.vookAuthor}</p>
                </span>
            </div>
        </a>
        <div className='py-[10px]'>
          <p className='text-xs font-gray'>{you.vookCopy}</p>
        </div>
      </div>
      </>
    );
  }
  