import Seo from '../components/Seo'
import Header from '../components/Header'
import ConTitle from '../components/ConTitle'
import React, { useState } from 'react'
import ProInfo from '../components/ProInfo'
import ProVook from '../components/ProVook'
import ProList from '../components/ProList'

export default function Index() {

  return (
    <>
      <Seo title={`turvelox`} />
      <Header />
      <main>
        <div className='wrapper-740'>

          <section className='w-full flex justify-between pb-[30px]'>
            <article className='w-full px-4'>
              <ConTitle title={`turvelox .`} />
              <ProInfo />
            </article >
            <article className='w-[280px] px-4'>
              <ConTitle title="Vook Pin ." />
              <ProVook />
            </article>
          </section>

          <section className='w-full px-4 py-[30px] border-t-1'>
            <article>
                <ProList />
            </article>
          </section>

        </div>
      </main>
    </>
  )
}
