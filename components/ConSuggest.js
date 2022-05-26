import Image from 'next/image'
import Link from 'next/link'

export default function ConSuggest() {
    return (
        <div className='con-box'>
            <ul>
                <li>
                <Link href={`/`}>
                    <div className='flex align-middle'>
                        <p>
                            <span className='book-line-01 block'></span><span className='book-line-02 block'></span><span className='book-line-03 block'></span>
                            <span className='block'>
                                <Image src={} layout='fill' objectFit="cover" objectPosition="top" />
                            </span>
                        </p>
                        <p>

                        </p>
                    </div>
                </Link>
                </li>
            </ul>
        </div>
    );
}


ConSuggest.defaultProps = {
    
}