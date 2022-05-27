import Image from 'next/image'

export default function ProInfo() {
    return (
      <div className="con-box min-h-[280px] md:min-h-fit">
          <div className="flex p-[20px] ">

            <div className="relative rounded-full border-all-1 font-hidden overflow-hidden w-[60px] h-[60px] min-w-[60px]">
              <Image src={`/turvelox.png`} layout='fill' objectFit="cover" objectPosition="center" />
              <span className='absolute bottom-0 left-0 block bg-black/60 w-full h-[20px] text-center pt-[4px]'>
              <Image src={`/photo_edit.png`} width={12} height={10} />
              </span>
            </div>

            <div className='flex justify-evenly pl-[20px] w-full max-w-[390px]'>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{`2`}</p>
                <p className='text-sm text-center'>리디뷰</p>
              </div>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{`9`}</p>
                <p className='text-sm text-center'>링커</p>
              </div>
              <div className='flex-auto'>
                <p className='text-lg font-bold text-center'>{`12`}</p>
                <p className='text-sm text-center'>링킹</p>
              </div>
            </div>

          </div>

          <div className='px-[20px] pb-[20px]'>
            <p className='py-[10px] font-green text-xs'>{`turvelox@outlook.com`}</p>
            <p className='py-[10px] text-xs'>{`Hello :)`}</p>
          </div>
          
      </div>
    );
  }
  