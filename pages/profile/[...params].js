import Seo from '../../components/Seo'
import Header from '../../components/Header'
import ConTitle from '../../components/ConTitle'
import React, { useState, useEffect } from 'react'
import ProInfo from '../../components/ProInfo'
import ProVook from '../../components/ProVook'
import ProList from '../../components/ProList'
import { useRouter } from 'next/router'

export default function Profile() {

  const router = useRouter();
  const userId = router.query.params;

  return (
    <>
      <Seo title={userId[0]} />
      <Header />
      <main>
        <div className='wrapper-740'>

          <section className='flex pb-[30px] md:flex-col'>
            <article className='w-[55%] px-4 md:w-full'>
              <ConTitle title={`${userId[0]} .`} />
              <ProInfo userId={userId[0]} />
            </article >
            <article className='w-[45%] px-4 md:w-full'>
              <ConTitle title="Vook Pin ." />
              <ProVook userId={userId[0]} />
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
