import Seo from '../components/Seo'
import Header from '../components/Header'
import React, { useState } from 'react'
import ConTitle from '../components/ConTitle'
import ConSuggest from '../components/ConSuggest'
import ConCard from '../components/ConCard'
import Image from 'next/image'

export default function View() {

  return (
    <>
      <Seo title={`돈의 속성(200쇄 리커버에디션)`} />
      <Header />
      <main>
        <div className='flex flex-row-reverse justify-between wrapper-740 md:flex-col md:items-center'>

            <section className='mx-4 w-full max-w-sub md:mx-0 md:px-4 md:max-w-[500px]'>
                <article className='relative pt-[30px]'>
                    <div className='flex items-center'>
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
                    <div className='pt-[15px]'>
                        <p className='text-xs'>종잣돈 천만 원을 만들고 그 돈을 1억 원, 10억 원, 100억 원, 수천억 원이 될 때까지 돈을 관리하며 터득한 ‘돈’만들기에 대한 책이다. 돈이 가진 속성과 75가지 돈에 대한 가르침을 통해 현재 200만 원을 벌고 있는 직장인...</p>
                    </div>
                </article>
                <article className='pb-8 md:pb-0 md:hidden'>
                <ConTitle title="오늘의 추천 도서 ." />
                <ConSuggest />
                </article>
            </section>

            <section className='mx-4 w-full md:mx-0 md:px-4 md:max-w-[500px]'>
                <article>
                    <ul className='pt-[15px]'>
                        <li className='pb-5 py-[15px]'>
                            <ConCard userId={`heritage_boy`} cardImg={`/card01.png`} cardTitle={`돈 돈 돈 그것이 문제로다...`} cardCopy={`너무 재밌었다.`} cardDate={`2022.05.24`} commentCount={`5`} bookImg={`/dal.png`} bookTitle={`달러구트 꿈 백화점`} />
                        </li>
                        <li className='pb-5 py-[15px]'>
                            <ConCard userId={`heritage_boy`} cardImg={`/card01.png`} cardTitle={`돈 돈 돈 그것이 문제로다...`} cardCopy={`너무 재밌었다.`} cardDate={`2022.05.24`} commentCount={`5`} bookImg={`/dal.png`} bookTitle={`달러구트 꿈 백화점`} />
                        </li>
                        <li className='pb-5 py-[15px]'>
                            <ConCard userId={`heritage_boy`} cardImg={`/card01.png`} cardTitle={`돈 돈 돈 그것이 문제로다...`} cardCopy={`너무 재밌었다.`} cardDate={`2022.05.24`} commentCount={`5`} bookImg={`/dal.png`} bookTitle={`달러구트 꿈 백화점`} />
                        </li>
                    </ul>
                </article>
            </section>

        </div>
      </main>
    </>
  )
}
