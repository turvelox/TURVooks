import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ConSuggest() {
    const [sugImg, setSugImg] = useState(['/suggest01.png', '/suggest02.png', '/suggest03.png']);
    const [sugTitle, setSugTitle] = useState([
        "독일은 왜 잘하는가 : 성숙하고 부강한 나라의 비밀",
        "이것은 작은 브랜드를 위한 책",
        "수면의 과학"
    ]);
    const [sugAuthor, setSugAuthor] = useState([
        "존 캠프너",
        "이근상",
        "헤더 다월-스미스"
    ]);
    return (
        <>
        <div className='con-box px-[20px] py-[10px]'>
            <ul>
                <li className='py-[10px]'>
                    <Link href={`/`}>
                        <a className='flex items-center'>
                            <span className='flex flex-col items-center'>
                                <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                                <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                    <Image src={sugImg[0]} layout='fill' objectFit="cover" objectPosition="top" />
                                </span>
                            </span>
                            <span className='pl-[15px]'>
                                <p className='text-sm font-bold ellipsis-3'>{sugTitle[0]}</p>
                                <p className='text-xs pt-[15px]'>{sugAuthor[0]}</p>
                            </span>
                        </a>
                    </Link>
                </li>
                <li className='py-[10px]'>
                    <Link href={`/`}>
                        <a className='flex items-center'>
                            <span className='flex flex-col items-center'>
                                <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                                <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                    <Image src={sugImg[1]} layout='fill' objectFit="cover" objectPosition="top" />
                                </span>
                            </span>
                            <span className='pl-[15px]'>
                                <p className='text-sm font-bold ellipsis-3'>{sugTitle[1]}</p>
                                <p className='text-xs pt-[15px]'>{sugAuthor[1]}</p>
                            </span>
                        </a>
                    </Link>
                </li>
                <li className='py-[10px]'>
                    <Link href={`/`}>
                        <a className='flex items-center'>
                            <span className='flex flex-col items-center'>
                                <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                                <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                    <Image src={sugImg[2]} layout='fill' objectFit="cover" objectPosition="top" />
                                </span>
                            </span>
                            <span className='pl-[15px]'>
                                <p className='text-sm font-bold ellipsis-3'>{sugTitle[2]}</p>
                                <p className='text-xs pt-[15px]'>{sugAuthor[2]}</p>
                            </span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
        <style jsx>
        {`
            .book-line-01 {
                width: 84px;
                height: 1px;
                background-color: #c5c5c5;
            }
            .book-line-02 {
                width: 86px;
                height: 1px;
                background-color: #e5e5e5;
            }
            .book-line-03 {
                width: 88px;
                height: 1px;
                background-color: #e5e5e5;
            }

        `}
        </style>
        </>
    );
}
