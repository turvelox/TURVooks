import Seo from '../components/Seo'
import Header from '../components/Header'
import ConTitle from '../components/ConTitle'
import MyProVook from '../components/MyProVook'
import ProList from '../components/ProList'
import MyProInfo from '../components/MyProInfo'
import React, {useState, useEffect} from 'react'

export default function Profile() {

  const [you, setYou] = useState(""); 
  const [name, setName] = useState("");

  useEffect(() => {
    const lsYou = JSON.parse(localStorage.getItem("you"));
    setYou(lsYou);  // 로컬스토리지에서 나의 계정을 꺼내 담아줌
  }, []);

  useEffect(() => {
    setName(you.userId);
  }, [you]);

  return (
    <>
      <Seo title={name} />
      <Header />
      <main>
        <div className='wrapper-740'>

          <section className='flex pb-[30px] md:flex-col'>
            <article className='w-[55%] px-4 md:w-full'>
              <ConTitle title={`${name} .`} />
              <MyProInfo />
            </article >
            <article className='w-[45%] px-4 md:w-full'>
              <ConTitle title="Vook Pin ." />
              <MyProVook />
            </article>
          </section>

          <section className='w-full py-[30px] border-t-1'>
            <article className='text-center'>
                <ProList />
            </article>
          </section>

        </div>
      </main>
    </>
  )
}
