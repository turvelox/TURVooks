import Image from 'next/image'
import Seo from '../components/Seo'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Seo title={`터북스`} />
      <main>
          <section className='flex items-center min-h-screen wrapper-740'>
            <div className='flex-1 margin-15 md:hidden'>
                <div>
                    <p className='text-lg pb-8'>내가 <span className='font-green font-bold'>읽은 책을 공유</span>하는,<br/>가장 빠른 방법!</p>
                </div>
                <div className='w-full h-96 overflow-hidden relative'>
                    <span className='absolute animate-drop cloud-01'><Image src="/cloud-01.png" width={65} height={35} /></span>
                    <span className='absolute animate-drop cloud-02'><Image src="/cloud-02.png" width={65} height={35} /></span>
                    <span className='absolute rocket'><Image src="/rocket.gif" width={160} height={290} /></span>
                </div>
            </div>
            <div className='flex-1 margin-15 flex justify-center'>
                <div className={`relative text-center con-box py-14 max-w-sm`}>
                    <div className='absolute people-box overflow-hidden'>
                        <span className='people-imgs'>
                            <Image src="/people.png" width={300} height={120} />
                        </span>
                    </div>
                    <Image src="/login-logo.png" width={156} height={60} />
                    <form className='pt-14 px-[30px]'>
                        <input className='gray-input-style' placeholder='이메일' name='user_email' type="email" />
                        <input className='gray-input-style mt-1.5' placeholder='비밀번호' name='user_pwd' type="password" />
                        <button type='submit' className='green-btn-style mt-4'>로그인</button>
                    </form>
                    <p className='py-6'>
                        <span className='text-sm pr-2.5'>계정이 없으신가요?</span>
                        <Link href="/join">
                            <a className='text-sm font-green font-medium'>가입하기</a>
                        </Link>
                    </p>
                    <p className='text-xs text-center pt-6'>계정문의<br/>info@turvooks.com</p>
                </div>
            </div>
          </section>
      </main>
        <style jsx>
        {`
            @keyframes rocket {
                0% {transform: translate(-50%, 0px) rotate(0deg);}
                25% {transform: translate(-51%, 5px) rotate(0deg);}
                50% {transform: translate(-50%, -5px) rotate(1deg);}
                75% {transform: translate(-49%, 5px) rotate(-1deg);}
                100% {transform: translate(-50%, 0px) rotate(0deg);}
            }
            @keyframes tongtong {
                0% {transform: translate(0, 5px);}
                25% {transform: translate(0, 0);}
                50% {transform: translate(0, 5px);}
                100% {transform: translate(0, 5px);}
            }
            .cloud-01 {
                top: -50px;
                left: 0;
            }
            .cloud-02 {
                top: -50px;
                right: 0;
                animation-delay: 2s;
            }
            .rocket {
                top: 30px;
                left: 50%;
                transform: translate(-50%, 0);
                animation: rocket 4s infinite;
            }
            .people-box {
                width: 300px;
                height: 120px;
                top: -121px;
                left: 50%;
                transform: translateX(-50%);
            }
            .people-imgs {
                display: inline-block;
                transform: translate(0, 5px);
                animation: tongtong 2.5s infinite;
            }
        `}
        </style>
    </>
  )
}
