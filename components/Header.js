import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header() {
  return (
    <>
    <div className='h-16 pt-px box-content'></div>
    <header className='border-b-1 bg-white fixed top-0 left-0 right-0 z-50'>
      <div className='h-16 wrapper-740 flex justify-between items-center px-4'>
        <h1>
          <Link href="/main">
            <a>
              <span className='font-hidden'>TURVooks.</span>
              <Image src="/header-logo.png" width={77} height={31} />
            </a>
          </Link>
        </h1>
        <nav>
          <ul className='flex'>
            <li>
              <Link href="/search">
                <a >
                  <span className='font-hidden'>도서검색</span>
                  <Image src="/header-search.png" width={15} height={15} />
                </a>
              </Link>
            </li>
            <li className='ml-4'>
              <Link href={`/myprofile/`}>
                <a >
                  <span className='font-hidden'>프로필</span>
                  <Image src="/header-profile.png" width={15} height={15} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}
