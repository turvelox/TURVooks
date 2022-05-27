import Image from 'next/image'
import Link from 'next/link'

export default function ProVook() {
    return (
      <>
      <div className='con-box px-[20px] py-[10px] min-h-[280px] md:min-h-fit relative'>
        <span className='absolute top-[-25px] right-0 font-hidden' onClick={() => {console.log("edit!")}}>
          <span className='pr-[5px] text-xs font-gray'>Edit</span>
          <Image src='/edit-icon.png' width={12} height={12} />
        </span>
        <Link href={`/`}>
            <div className='flex items-center py-[10px]'>
                <span className='flex flex-col items-center'>
                    <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                    <span className='block w-[90px] h-[125px] border-all-1 mini-book relative'>
                        <Image src={`/suggest01.png`} layout='fill' objectFit="cover" objectPosition="top" />
                    </span>
                </span>
                <span className='pl-[15px]'>
                    <p className='text-sm font-bold ellipsis-4'>{`독일은 왜 잘하는가 : 성숙하고 부강한 나라의 비밀`}</p>
                    <p className='text-xs pt-[15px]'>{`존 캠프너`}</p>
                </span>
            </div>
        </Link>
        <div className='py-[10px]'>
          <p className='text-xs font-gray'>{`내 인생에서 가장 감명깊게 읽었던 책이다. 독일이 그 많은 유럽국가중 가장 깊고 큰 성장을 할 수 있었던 이유가 이 책 안에 있었으며, 내 인생에 큰 도움이 되었다.`}</p>
        </div>
      </div>
      </>
    );
  }
  