import ConUser from '../components/ConUser'
import Link from 'next/link'
import Image from 'next/image'

export default function ConCard({ userId, img, imgw, imgh, viewLink, cardImg, cardTitle, cardCopy, cardDate, commentCount, bookImg, bookTitle }) {
    return (
      <div className="con-box">
        <ConUser userId={userId} img={img} imgw={imgw} imgh={imgh} />
        <Link href={`/view/${viewLink}`}>
            <a>
            <div className='relative overflow-hidden min-h-[250px] max-h-[250px] block'>
                <Image src={cardImg} layout='fill' objectFit="cover" objectPosition="center" />
                <div className='absolute left-[10px] bottom-[10px] flex items-end'>
                    <span className='mini-book w-[40px] h-[60px] relative'>
                        <Image src={bookImg} layout='fill' objectFit="cover" objectPosition="top" />
                    </span>
                    <span className='mini-book-title font-medium mx-2.5 max-w-[300px] ellipsis-1'>
                        {bookTitle}
                    </span>
                </div>
            </div>
            <div className='p-4'>
                <p className='ellipsis-1 text-base font-medium'>{cardTitle}</p>
                <p className='ellipsis-3 text-xs font-gray pt-4'>{cardCopy}</p>
                <div className='pt-4 text-xs font-super-gray flex items-center'>
                <span className='pr-2.5'>{cardDate}</span><Image src="/comment-icon.png" width={16} height={15} /><span className='pl-1'>{commentCount}</span>
                </div>
            </div>
            
            </a>
        </Link>
      </div>
    );
}


ConCard.defaultProps = {
    userId: "",
    img: '/user-default.png',   
    imgw: 30,
    imgh: 30,
    viewLink: 1,
    cardImg: '/carddefault.png',
    cardTitle: "",
    cardCopy: "",
    cardDate: "",
    commentCount: '0',
    bookImg: '/bookdefault.png',
    bookTitle: ""
}

