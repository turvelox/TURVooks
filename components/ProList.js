import Link from 'next/link'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'

export default function ProList({ userId }) {
  
  const [contents, setContents] = useState([]);
  const [ucon, setUcon] = useState([]);
  const [sumCon, setSumCon] = useState([]);
  const [selec, setSelec] = useState([]);

  useEffect(() => {
    setContents(JSON.parse(localStorage.getItem("contents")));
    setUcon(JSON.parse(localStorage.getItem("ucon")));
  }, []);

  useEffect(() => {
    ucon !== null ? 
    setSumCon(contents.concat(ucon.filter(obj => obj !== null))) : console.log("null");
  }, [contents, ucon]);

  useEffect(() => {
    sumCon !== null ? 
    setSelec(sumCon.filter(obj => obj.author == userId)) : console.log("null");
  }, [sumCon, userId]);
  console.log(sumCon);
  console.log(userId);
  console.log(selec);

    return (
      <ul className='flex flex-wrap justify-start'>
        {
          selec.map((item, index) => 
          <li className='m-[0.5%] w-[32.3%] relative' key={index}>
            <Link href={`/view/${item.link}`}>
              <div className='relative pb-[100%]'>
                <Image src={item.thum} layout='fill' objectFit="cover" objectPosition="top" alt="" />
                <span className='dark-over'></span>
                <div className='absolute left-[0px] top-[15px] z-10'>
                  <p className='text-white font-bold text-lg px-[15px] text-left md:font-medium md:text-sm'>{item.title}</p>
                </div>
                <div className='absolute right-[10px] bottom-[10px] z-10 flex'>
                    <span className='mini-book w-[40px] h-[60px] relative md:w-[30px] md:h-[45px]'>
                        <Image src={item.book_thum} layout='fill' objectFit="cover" objectPosition="top" alt="" />
                    </span>
                </div>
              </div>
            </Link>
          </li>)
        }
      </ul>
    );
  }
  