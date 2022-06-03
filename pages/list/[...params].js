import Seo from '../../components/Seo'
import Header from '../../components/Header'
import React, { useState, useEffect } from 'react'
import ConTitle from '../../components/ConTitle'
import ConSuggest from '../../components/ConSuggest'
import ConCard from '../../components/ConCard'
import Image from 'next/image'

export default function View({param}) {

    const reqTitle = param.params[0]; // url 쿼리값 가져오기

    const [sug, setSug] = useState([
        {
            bid: "22452725",
            img: '/suggest01.png',
            title: "독일은 왜 잘하는가 : 성숙하고 부강한 나라의 비밀",
            author: "존 캠프너",
            copy: "5장 기적: 경제 기적과 그 이후 6장 개는 개를 먹지 않는다: 함께 뭉치는 사회 7장 더 이상 대수롭지 않은 일이란 없다: 기후 문제와 자동차 결론: 독일은 왜 잘하는가 감사의 말 주 찾아보기"
        },
        {
            bid: "21376212",
            img: '/suggest02.png',
            title: "이것은 작은 브랜드를 위한 책",
            author: "이근상",
            copy: "큰브랜드를위해브랜딩과마케팅을해왔던사람으로서 ‘작은브랜드’라는주제를다루는것이배교자가된것같은느낌이다. 하지만변해야하는것은변해야한다. 어느날고개들어사방을둘러보니세상은엄청나게달라져있었다. 큰 브랜드를 성장시켰던 기존의 방식은 동력을 잃고 있다. 작은"
        },
        {
            bid: "21403705",
            img: '/suggest03.png',
            title: "수면의 과학",
            author: "헤더 다월-스미스",
            copy: "수면 과학의 역사 우리에게 필요한 수면량 좋은 수면의 메커니즘 신체의 일주기리듬 수면/기상 주기 호르몬과 수면 수면의 단계 꿈 좋은 잠과 나쁜 잠 좋은 수면 습관 들이기 수면 일기 슬기로운 수면 생활"
        }
    ]);
    const [selecSug, setSelecSug] = useState();
  
    const [contents, setContents] = useState([]);
    const [ucon, setUcon] = useState([]);
    const [sumCon, setSumCon] = useState([]);
    const [selec, setSelec] = useState([]);
    const emArray = [];
  
    useEffect(() => {
      setContents(JSON.parse(localStorage.getItem("contents")));
      setUcon(JSON.parse(localStorage.getItem("ucon")));
      setSelecSug(sug.filter(obj => obj.title == reqTitle));
    }, []);

    useEffect(() => {
        ucon !== null ? 
        setSumCon(contents.concat(ucon.filter(obj => obj !== null))) : setSumCon(contents.concat(emArray));
    }, [contents, ucon]);


    useEffect(() => {
        setSelec(sumCon.filter(obj => obj.book_title == reqTitle));
    }, [sumCon, reqTitle]);

  return (
    <>
      <Seo title={reqTitle} />
      <Header />
      <main>
        <div className='flex flex-row-reverse justify-between wrapper-740 md:flex-col md:items-center'>

            <section className='mx-4 w-full max-w-sub md:mx-0 md:px-4 md:max-w-[500px]'>
                <article className='relative pt-[30px]'>
                    <div className='flex items-center'>
                        <span className='flex flex-col items-center'>
                            <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                            <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                                <Image src={selecSug ? selecSug[0].img : "/bookdefault.png"} layout='fill' objectFit="cover" objectPosition="top" alt="" />
                            </span>
                        </span>
                        <span className='pl-[15px]'>
                            <p className='text-sm font-bold ellipsis-4'>{selecSug ? selecSug[0].title : ""}</p>
                            <p className='text-xs pt-[15px]'>{selecSug ? selecSug[0].author : ""}</p>
                            <p className='flex font-hidden items-center pt-[10px]'><img src='/view-count.png' alt="" /><span className='font-green text-xs ml-[5px]'>{`5`}</span></p>
                        </span>
                    </div>
                    <div className='pt-[15px]'>
                        <p className='text-xs'>{selecSug ? selecSug[0].copy : ""}</p>
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
                        {
                            selec ? selec.map((item, index) => 
                                <li className='pb-5 py-[15px]' key={index}>
                                <ConCard 
                                viewLink={item.link}
                                img={item.author_img}
                                userId={item.author}
                                cardImg={item.thum}
                                cardTitle={item.title}
                                cardCopy={item.copy}
                                cardDate={item.card_date}
                                commentCount={`0`}
                                bookImg={item.book_thum}
                                bookTitle={item.book_title} />
                                </li>
                            ) : ""
                        }
                    </ul>
                </article>
            </section>

        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
    const param = context.query
    return {
      props: {param},
    }
  }