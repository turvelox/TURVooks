import Seo from '../../components/Seo'
import Header from '../../components/Header'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Write() {

    const router = useRouter();
    const bookBid = router.query.params;

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
    const [indexSug, setIndexSug] = useState(0);
    const [selec, setSelec] = useState("");

    useEffect(() => {
        setIndexSug(sug.findIndex(obj => obj.bid == bookBid?bookBid[0]:""));
    }, [bookBid]);

    useEffect(() => {
        setSelec(sug[indexSug]);
    }, [indexSug]);

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
                                <Image src={selec ? selec.img : '/bookdefault.png'} layout='fill' objectFit="cover" objectPosition="top" />
                            </span>
                        </span>
                        <span className='pl-[15px]'>
                            <p className='text-sm font-bold ellipsis-4'>{selec ? selec.title : "Loading..."}</p>
                            <p className='text-xs pt-[15px]'>{selec ? selec.author : ""}</p>
                        </span>
                    </div>
                    <div className='w-[50%] px-[15px] me:w-[100%] me:pt-[15px]'>
                        <p className='text-xs'>{selec ? selec.copy : ""}</p>
                    </div>
                </article>
            </section>

            <section>
                <form className='px-[15px] py-[30px] flex flex-col items-center border-t-1'>
                    <div className='border-all-1'>
                        <label htmlFor="write-thum" className='max-w-[400px] max-h-[250px]'><img src='/input-file.png' /></label>
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