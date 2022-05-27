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
      <Seo title={`글쓰기`} />
      <Header />
      <main>
        <div className='wrapper-740'>

            <section className='w-full'>
                <article className='relative py-[30px] flex items-center me:flex-col'>
                    <div className='flex items-center w-[50%] px-[15px] me:w-[100%]'>
                        <span className='flex flex-col items-center'>
                            <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                            <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                <Image src={`/suggest01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                            </span>
                        </span>
                        <span className='pl-[15px]'>
                            <p className='text-sm font-bold ellipsis-4'>{`독일은 왜 잘하는가 : 성숙하고 부강한 나라의 비밀`}</p>
                            <p className='text-xs pt-[15px]'>{`존 캠프너`}</p>
                        </span>
                    </div>
                    <div className='w-[50%] px-[15px] me:w-[100%] me:pt-[15px]'>
                        <p className='text-xs'>종잣돈 천만 원을 만들고 그 돈을 1억 원, 10억 원, 100억 원, 수천억 원이 될 때까지 돈을 관리하며 터득한 ‘돈’만들기에 대한 책이다. 돈이 가진 속성과 75가지 돈에 대한 가르침을 통해 현재 200만 원을 벌고 있는 직장인...</p>
                    </div>
                </article>
            </section>

            <section>
                <form className='px-[15px] py-[30px] flex flex-col items-center border-t-1'>
                    <div className='border-all-1'>
                        <label for="write-thum" className='max-w-[400px] max-h-[250px]'><img src='/input-file.png' /></label>
                        <input type="file" className='hidden' id="write-thum" name="write-thum" />
                    </div>
                    <div className='mt-[15px] w-full'>
                        <input className='gray-input-style' placeholder='제목' name='write-title' type="text" />
                    </div>
                    <div className='mt-[15px] w-full'>
                        <textarea className='gray-input-style' placeholder='' name='write-copy'></textarea>
                    </div>
                    <button type='submit' className='green-btn-style mt-4'>완료</button>
                </form>
            </section>

        </div>
      </main>
    </>
  )
}
