import Seo from '../../components/Seo'
import Header from '../../components/Header'
import React, { useState, useEffect } from 'react'
import ConUser from '../../components/ConUser'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function View() {

  const router = useRouter();
  const viewId = router.query.params;

  const [contents, setContents] = useState([]);
  const [ucon, setUcon] = useState([]);
  const [sumCon, setSumCon] = useState([]);
  const [selec, setSelec] = useState([]);
  const emArray = [];

  useEffect(() => {
    setContents(JSON.parse(localStorage.getItem("contents")));
    setUcon(JSON.parse(localStorage.getItem("ucon")));
  }, []);

  useEffect(() => {
    ucon !== null ? 
    setSumCon(contents.concat(ucon.filter(obj => obj !== null))) : setSumCon(contents.concat(emArray)); 
  }, [contents, ucon]);

  useEffect(() => {
    setSelec(sumCon[sumCon.findIndex(obj => obj.link == viewId ? viewId[0] : "0")]);
  }, [sumCon, viewId]);

  return (
    <>
      <Seo title={selec ? selec.title : ""} />
      <Header />
      <main>
        <div className='wrapper-740'>

          <section className='p-[30px] md:p-[10px]'>
            <div className='con-box w-full'>

              <article className='relative h-[300px] overflow-hidden text-white'>
                <Image src={selec ? selec.thum : "/carddefault.png"} layout='fill' objectFit="cover" objectPosition="top" alt="" />
                <span className='dark-over'></span>
                <div className='absolute top-0 left-0 z-10'>
                  <ConUser userId={selec ? selec.author : ""} img={selec ? selec.author_img : "/user-default.png"} />
                </div>
                <div className='absolute top-[60px] left-[50%] translate-x-[-50%] z-10 text-center w-full px-[60px]'>
                  <p className='text-sm'>{selec ? selec.card_date : ""}</p>
                  <p className='text-2xl pt-[15px]'>{selec ? selec.title : ""}</p>
                </div>
                <div className='absolute left-[10px] bottom-[10px] flex items-end z-10'>
                    <span className='mini-book w-[40px] h-[60px] relative'>
                        <Image src={selec ? selec.book_thum : "/bookdefault.png"} layout='fill' objectFit="cover" objectPosition="top" alt="" />
                    </span>
                    <span className='mini-book-title font-medium mx-2.5 max-w-[600px] ellipsis-1 text-black'>
                        {selec ? selec.book_title : ""}
                    </span>
                </div>
              </article>

              <article className='p-[30px] text-sm view-contents md:p-[15px]'>
                <p>{selec ? selec.copy : ""}</p>                
              </article>

              <article className='border-t-1 p-[30px] md:p-[15px]'>

                <div className='flex items-center pb-[30px]'>
                  <div className='rounded-full w-[30px] h-[30px] border-all-1 overflow-hidden'>
                    <img src={`/user-default.png`} alt="" />
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
                        <img src={`/user-default.png`} alt="" />
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
