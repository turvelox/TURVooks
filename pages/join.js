import Image from 'next/image'
import Seo from '../components/Seo'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Seo title={`터북스`} />
      <main>
          <section className='flex items-center min-h-screen wrapper-740'>
            <div className='flex-1 margin-15 flex justify-center'>
                <div className={`relative text-center con-box py-14 max-w-sm`}>
                    <Image src="/login-logo.png" width={156} height={60} />
                    <form className='pt-14 px-[30px]'>
                        <div className='relative'>
                            <input className='gray-input-style' placeholder='이메일' name='user_email' type="email" />
                            <button className='green-mini-btn-style absolute top-[5px] right-[5px]' type='button'>확인</button>
                        </div>
                        <div className='relative mt-1.5'>
                            <input className='gray-input-style' placeholder='인증번호' name='email_pwd' type="text" />
                            <button className='gray-mini-btn-style absolute top-[5px] right-[5px]' type='button'>인증</button>
                        </div>
                        <div className='relative mt-[15px]'>
                            <input className='gray-input-style' placeholder='사용자명' name='user_nick' type="text" />
                            <span className='input-check-icon'><Image src='/nopass.png' width={10} height={10} /></span>
                        </div>
                        <div className='relative mt-1.5'>
                            <input className='gray-input-style' placeholder='비밀번호' name='user_pwd' type="password" />
                        </div>
                        <div className='relative mt-1.5'>
                            <input className='gray-input-style' placeholder='비밀번호 확인' name='user_pwd_confirm' type="password" />
                            <span className='input-check-icon'><Image src='/pass.png' width={10} height={10} /></span>
                        </div>
                        <button type='submit' className='gray-btn-style mt-4'>등록</button>
                    </form>
                </div>
            </div>
          </section>
      </main>
    </>
  )
}
