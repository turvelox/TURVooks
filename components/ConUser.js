import Image from 'next/image'
import Link from 'next/link'

export default function ConUser({ img, imgw, imgh, userId  }) {
    return (
        <div className='p-2.5 flex items-center'>
            <span className='rounded-full border-all-1 font-hidden overflow-hidden'>
                <Image src={img} width={imgw} height={imgh} alt="" />
            </span>
            <Link href={`/profile/${userId}`}>
                <a className={`text-xs ml-2.5`}>{userId}</a>
            </Link>
        </div>
    );
}


ConUser.defaultProps = {
    userId: "",
    img: '/user-default.png',
    imgw: 30,
    imgh: 30
}