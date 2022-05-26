import Seo from '../components/Seo'
import Header from '../components/Header'
import Visual from '../components/Visual'
import ConTitle from '../components/ConTitle'
import React, { useState } from 'react'
import ConCard from '../components/ConCard'
import ConReaders from '../components/ConReaders'
import ConSuggest from '../components/ConSuggest'

export default function Index() {

  const title = "꿈을 표현한 소설 중에 감히 최고라고 할 수 있다!";
  const copy = "서점에 잠시 들러 기분을 만끽하던중... 내 눈앞에 보이던 책이 한권 있었다. 해리포터 스러운 표지 디자인의 소설책 이였는데, 내 이목을 어찌나 끌던지 표지디자인에서 헤어나올수가 없었다. 우선 당장 책을 구매했고 내가 이 책을 보는 시간은 매우 충분했다."

  return (
    <>
      <Seo title={`터북스`} />
      <Header />
      <Visual />
      <main>
        <div className='flex flex-row-reverse justify-between wrapper-740'>
          <section className='mx-4 w-full max-w-sub'>
            <article className='pb-8'>
              <ConTitle title="추천 리더스 ." />
              <ConReaders />
            </article >
            <article className='border-t-1 pb-8'>
              <ConTitle title="오늘의 추천 도서 ." />
              <ConSuggest />
            </article>
          </section>
          <section className='mx-4 w-full'>
            <ConTitle title="따끈따끈 리디뷰 ." />
            <ul>
              <li className='pb-5'>
                <ConCard userId={`heritage_boy`} cardImg={`/card01.png`} cardTitle={title} cardCopy={copy} cardDate={`2022.05.24`} commentCount={`5`} bookImg={`/dal.png`} bookTitle={`달러구트 꿈 백화점`} />
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
