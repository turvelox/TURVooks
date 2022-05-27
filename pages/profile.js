import Seo from '../components/Seo'
import Header from '../components/Header'
import ConTitle from '../components/ConTitle'
import React, { useState } from 'react'
import ProInfo from '../components/ProInfo'
import ProVook from '../components/ProVook'
import ProList from '../components/ProList'

export default function Profile() {

  return (
    <>
      <Seo title={`turvelox`} />
      <Header />
      <main>
        <div className='wrapper-740'>

          <section className='flex pb-[30px] md:flex-col'>
            <article className='w-[55%] px-4 md:w-full'>
              <ConTitle title={`turvelox .`} />
              <ProInfo />
            </article >
            <article className='w-[45%] px-4 md:w-full'>
              <ConTitle title="Vook Pin ." />
              <ProVook />
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
