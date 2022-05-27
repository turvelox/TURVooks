import Seo from '../components/Seo'
import Header from '../components/Header'
import React, { useState } from 'react'
import ConUser from '../components/ConUser'
import Image from 'next/image'
import Link from 'next/link'

export default function View() {

  return (
    <>
      <Seo title={`도서검색`} />
      <Header />
      <main>
        <div className='wrapper-740'>

        <section className='flex justify-center p-[15px]'>
            <div className='relative w-full max-w-[400px]'>
                <input className='gray-input-style' placeholder='도서명' name='comment-text' type="text" />
                <button className='gray-mini-btn-style absolute top-[5px] right-[5px]' type='submit'>검색</button>
            </div>
        </section>

        <section>
            <div className='text-center px-[15px] py-[30px]'>
                <p className='text-lg'>{`'꿈'으로 검색한 도서 3건`}</p>
            </div>
            <ul className='w-full flex justify-start flex-wrap'>
                <li className='px-[15px] w-[50%] me:px-[20px] me:w-[100%]'>
                    <div className='relative'>
                        <Link href={`/`}>
                            <div className='flex items-center py-[10px]'>
                                <span className='flex flex-col items-center'>
                                    <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                                    <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                        <Image src={`/suggest01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                                    </span>
                                </span>
                                <span className='pl-[15px]'>
                                    <p className='text-sm font-bold ellipsis-4'>{`독일은 왜 잘하는가 : 성숙하고 부강한 나라의 비밀`}</p>
                                    <p className='text-xs pt-[15px]'>{`존 캠프너`}</p>
                                    <p className='flex font-hidden items-center pt-[10px]'><img src='/view-count.png' /><span className='font-green text-xs ml-[5px]'>{`5`}</span></p>
                                </span>
                            </div>
                        </Link>
                        <Link href={`/`}>
                            <a className='green-mini-btn-style absolute bottom-[15px] left-[13px]' type='button'>글쓰기</a>
                        </Link>
                    </div>
                </li>
                <li className='px-[15px] w-[50%] me:px-[20px] me:w-[100%]'>
                    <div className='relative'>
                        <Link href={`/`}>
                            <div className='flex items-center py-[10px]'>
                                <span className='flex flex-col items-center'>
                                    <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                                    <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                        <Image src={`/suggest01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                                    </span>
                                </span>
                                <span className='pl-[15px]'>
                                    <p className='text-sm font-bold ellipsis-4'>{`독일은 왜 잘하는가 : 성숙하고 부강한 나라의 비밀`}</p>
                                    <p className='text-xs pt-[15px]'>{`존 캠프너`}</p>
                                    <p className='flex font-hidden items-center pt-[10px]'><img src='/view-count.png' /><span className='font-green text-xs ml-[5px]'>{`5`}</span></p>
                                </span>
                            </div>
                        </Link>
                        <Link href={`/`}>
                            <a className='green-mini-btn-style absolute bottom-[15px] left-[13px]' type='button'>글쓰기</a>
                        </Link>
                    </div>
                </li>
                <li className='px-[15px] w-[50%] me:px-[20px] me:w-[100%]'>
                    <div className='relative'>
                        <Link href={`/`}>
                            <div className='flex items-center py-[10px]'>
                                <span className='flex flex-col items-center'>
                                    <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                                    <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                        <Image src={`/suggest01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                                    </span>
                                </span>
                                <span className='pl-[15px]'>
                                    <p className='text-sm font-bold ellipsis-4'>{`독일은 왜 잘하는가 : 성숙하고 부강한 나라의 비밀`}</p>
                                    <p className='text-xs pt-[15px]'>{`존 캠프너`}</p>
                                    <p className='flex font-hidden items-center pt-[10px]'><img src='/view-count.png' /><span className='font-green text-xs ml-[5px]'>{`5`}</span></p>
                                </span>
                            </div>
                        </Link>
                        <Link href={`/`}>
                            <a className='green-mini-btn-style absolute bottom-[15px] left-[13px]' type='button'>글쓰기</a>
                        </Link>
                    </div>
                </li>
            </ul>
        </section>

        </div>
      </main>
    </>
  )
}
