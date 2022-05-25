import Image from 'next/image'
import Seo from '../components/Seo'
import Header from '../components/Header'
import Visual from '../components/Visual'
import React, { useState } from 'react'

export default function Index() {

  const [card, setCard] = useState("test");
  console.log(card);
  return (
    <>
      <Seo title={`터북스`} />
      <Header />
      <Visual />
      <main>
        <section>
          <article>
            <div>

            </div>
          </article>
          <article>
            <div>
              
            </div>
          </article>
        </section>
        <section>
          <ul>
            <li>

            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
