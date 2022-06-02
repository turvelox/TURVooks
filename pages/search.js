import Seo from '../components/Seo'
import Header from '../components/Header'
import React, { useState } from 'react'
import ConUser from '../components/ConUser'
import Image from 'next/image'
import Link from 'next/link'

export default function View() {

    const [keyword, setKeyword] = useState("");
    const [sug, setSug] = useState([
        {
            link: "https://book.naver.com/bookdb/book_detail.nhn?bid=22452725",
            bid: "22452725",
            img: '/suggest01.png',
            title: "독일은 왜 잘하는가 : 성숙하고 부강한 나라의 비밀",
            author: "존 캠프너",
            view: 5
        },
        {
            link: "https://book.naver.com/bookdb/book_detail.nhn?bid=21376212",
            bid: "21376212",
            img: '/suggest02.png',
            title: "이것은 작은 브랜드를 위한 책",
            author: "이근상",
            view: 2
        },
        {
            link: "https://book.naver.com/bookdb/book_detail.naver?bid=21403705",
            bid: "21403705",
            img: '/suggest03.png',
            title: "수면의 과학",
            author: "헤더 다월-스미스",
            view: 0
        }
    ]);


    const changeInput = (e) => {
        setKeyword(e.target.value);
    };


  return (
    <>
      <Seo title={`도서검색`} />
      <Header />
      <main>
        <div className='wrapper-740'>

        <section className='flex justify-center p-[15px]'>
            <div className='relative w-full max-w-[400px]'>
                <input className='gray-input-style' placeholder='도서명' name='comment-text' type="text" onChange={changeInput} value={keyword} />
            </div>
        </section>

        <section>
            <div className='text-center px-[15px] py-[30px]'>
                <p className='text-lg'>{`${keyword == "" ? '오늘의 추천 도서' : `'${keyword}'으로 검색한 도서 0건`}`}</p>
            </div>
            <ul className='w-full flex justify-start flex-wrap'>
                {
                    keyword == "" ?
                    sug.map((item, index) => 
                        <li className='px-[15px] w-[50%] me:px-[20px] me:w-[100%]' key={index}>
                            <div className='relative'>
                                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                                    <div className='flex items-center py-[10px]'>
                                        <span className='flex flex-col items-center'>
                                            <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                                            <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                                <Image src={item.img} layout='fill' objectFit="cover" objectPosition="top" alt="" />
                                            </span>
                                        </span>
                                        <span className='pl-[15px]'>
                                            <p className='text-sm font-bold ellipsis-4'>{item.title}</p>
                                            <p className='text-xs pt-[15px]'>{item.author}</p>
                                            <p className='flex font-hidden items-center pt-[10px]'><img src='/view-count.png' alt="" /><span className='font-green text-xs ml-[5px]'>{item.view}</span></p>
                                        </span>
                                    </div>
                                </a>
                                <Link href={`/write/${item.bid}`}>
                                    <a className='green-mini-btn-style absolute bottom-[15px] left-[13px]' type='button'>글쓰기</a>
                                </Link>
                            </div>
                        </li>
                    ) : <p></p>
                }
                
            </ul>
        </section>

        </div>
      </main>
    </>
  )
}
