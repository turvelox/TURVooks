import Seo from '../components/Seo'
import Header from '../components/Header'
import React, { useState } from 'react'
import ConUser from '../components/ConUser'
import Image from 'next/image'
import Link from 'next/link'

export default function View() {

  return (
    <>
      <Seo title={`매일 "돈 없다"는 말 입에 달고 사는 친구들에게 추천하는 책`} />
      <Header />
      <main>
        <div className='wrapper-740'>

          <section className='p-[30px] md:p-[10px]'>
            <div className='con-box w-full'>

              <article className='relative h-[300px] overflow-hidden text-white'>
                <Image src={`/card01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                <span className='dark-over'></span>
                <div className='absolute top-0 left-0 z-10'>
                  <ConUser userId={`turvelox`} />
                </div>
                <div className='absolute top-[60px] left-[50%] translate-x-[-50%] z-10 text-center w-full px-[60px]'>
                  <p className='text-sm'>{`2022. 05. 23`}</p>
                  <p className='text-2xl pt-[15px]'>{`매일 "돈 없다"는 말 입에 달고 사는 친구들에게 추천하는 책`}</p>
                </div>
                <div className='absolute left-[10px] bottom-[10px] flex items-end z-10'>
                    <span className='mini-book w-[40px] h-[60px] relative'>
                        <Image src={'/dal.png'} layout='fill' objectFit="cover" objectPosition="top" />
                    </span>
                    <span className='mini-book-title font-medium mx-2.5 max-w-[600px] ellipsis-1 text-black'>
                        {`달러구트 꿈 백화점`}
                    </span>
                </div>
              </article>

              <article className='p-[30px] text-sm view-contents md:p-[15px]'>
                <p>서점에 잠시 들러 기분을 만끽하던중... 내 눈앞에 보이던 책이 한권 있었다. 해리포터 스러운 표지 디자인의 소설책 이였는데, 내 이목을 어찌나 끌던지 표지디자인에서 헤어나올수가 없었다. 우선 당장 책을 구매했다.</p>
                <img src='/viewimg.png' />
                <p>서점에 잠시 들러 기분을 만끽하던중... 내 눈앞에 보이던 책이 한권 있었다. 해리포터 스러운 표지 디자인의 소설책 이였는데, 내 이목을 어찌나 끌던지 표지디자인에서 헤어나올수가 없었다. 우선 당장 책을 구매했다.</p>
              </article>

              <article className='border-t-1 p-[30px] md:p-[15px]'>

                <div className='flex items-center pb-[30px]'>
                  <div className='rounded-full w-[30px] h-[30px] border-all-1 overflow-hidden'>
                    <img src={`/user-default.png`} />
                  </div>
                  <div className='relative pl-[10px] w-full'>
                    <input className='gray-input-style' placeholder='100자 이내' name='comment-text' type="text" />
                    <button className='gray-mini-btn-style absolute top-[5px] right-[5px]' type='button'>댓글</button>
                  </div>
                </div>

                <ul>
                  <li className='py-[10px]'>
                    <div className='flex'>
                      <div className='rounded-full w-[20px] h-[20px] border-all-1 overflow-hidden'>
                        <img src={`/user-default.png`} />
                      </div>
                      <Link href={`/profile/gradiation99`}>
                          <a className='text-xs ml-2.5'>{`gradiation99`}</a>
                      </Link>
                    </div>
                    <div className='pt-[10px]'>
                      <p className='text-xs font-gray'>오마이갓 저도 이거 읽고 인생책 됬는데 공감합니다!</p>
                    </div>
                  </li>
                </ul>

              </article>

            </div>
          </section>

        </div>
      </main>
      <style jsx>
      {`
        .view-contents img {
          padding: 15px 0;
        }
        .view-contents p {
          padding: 15px 0;
        }
      `}
      </style>
    </>
  )
}
