import Seo from '../components/Seo'
import Header from '../components/Header'
import Visual from '../components/Visual'
import ConTitle from '../components/ConTitle'
import React, { useState, useEffect } from 'react'
import ConCard from '../components/ConCard'
import ConReaders from '../components/ConReaders'
import ConSuggest from '../components/ConSuggest'


export default function Main() {

  let contents = "";

  const [conList, setConList] = useState([]);
  const [hereUcon, setHereUcon] = useState("");
  const [uconList, setUconList] = useState("");

  useEffect(() => {
    contents = JSON.parse(localStorage.getItem("contents"));
    setConList(prevConList => prevConList.concat(contents));
    setHereUcon(JSON.parse(localStorage.getItem("ucon")));
  }, []);

  useEffect(() => {
    const cutUcon = hereUcon ? hereUcon.filter(data => data !== null) : "";
    setUconList(cutUcon);
  }, [hereUcon]);

  


  return (
    <>
      <Seo title={`터북스`} />
      <Header />
      <Visual />
      <main>
        <div className='flex flex-row-reverse justify-between wrapper-740 md:flex-col md:items-center'>
          <section className='mx-4 w-full max-w-sub md:mx-0 md:px-4 md:max-w-[500px]'>
            <article className='pb-8 md:pb-0'>
              <ConTitle title="추천 리더스 ." />
              <ConReaders />
            </article >
            <article className='pb-8 md:pb-0'>
              <ConTitle title="오늘의 추천 도서 ." />
              <ConSuggest />
            </article>
          </section>
          <section className='mx-4 w-full md:mx-0 md:px-4 md:max-w-[500px]'>
            <article>
              <ConTitle title="따끈따끈 리디뷰 ." />
              <ul>
                {
                  uconList ? uconList.map((uconItem, index) => 
                    <li className='pb-5' key={index}>
                      <ConCard 
                      viewLink={uconItem.link}
                      img={uconItem.author_img}
                      userId={uconItem.author}
                      cardImg={uconItem.thum}
                      cardTitle={uconItem.title}
                      cardCopy={uconItem.copy}
                      cardDate={uconItem.card_date}
                      commentCount={`0`}
                      bookImg={uconItem.book_thum}
                      bookTitle={uconItem.book_title} />
                    </li>
                  ) : ""
                }
                {
                  conList.map((conItem, index) => 
                    <li className='pb-5' key={index}>
                      <ConCard 
                      viewLink={conItem.link}
                      img={conItem.author_img}
                      userId={conItem.author}
                      cardImg={conItem.thum}
                      cardTitle={conItem.title}
                      cardCopy={conItem.copy}
                      cardDate={conItem.card_date}
                      commentCount={`5`}
                      bookImg={conItem.book_thum}
                      bookTitle={conItem.book_title} />
                    </li>
                  )
                }
              </ul>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}