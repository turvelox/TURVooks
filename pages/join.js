import Image from 'next/image'
import Seo from '../components/Seo'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Join() {

    const [user, setUser] = useState({
        userEmail: "",
        emailCert: "",
        userNick: "",
        userPwd: "",
        pwdCert: ""
    });
    const { userEmail, emailCert, userNick, userPwd, pwdCert } = user;

    const [pass, setPass] = useState({
        emailPass: false,
        nickPass: false,
        pwdPass: false
    });
    const { emailPass, nickPass, pwdPass } = pass;

    const changeInput = (e) => {  // 각 input의 내용을 user와 name을 매칭해 대입
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value
        });
    };

    const sendEmailPass = () => {  // 인증번호 보내는 로직

    };

    const checkEmailPass = () => {  // 인증번호가 일치하는지 확인하고 일치하면 emailPass에 true 대입

    };

    const checkNickPass = () => {  // 중복확인을 하고 유니크하면 nickPass에 ture 대입

    };

    useEffect(() => {  // user 객체가 변동이 있을 때마다 비밀번호를 확인하고 일치하면 pwdPass에 true 대입
        console.log(userPwd);
        console.log(pwdCert);
    },[user]);



  return (
    <>
      <Seo title={`터북스`} />
      <main>
          <section className='flex items-center min-h-screen wrapper-740'>
            <div className='flex-1 margin-15 flex justify-center'>
                <div className={`relative text-center con-box py-14 max-w-sm`}>
                    <Image src="/login-logo.png" width={156} height={60} />
                    <form className='pt-14 px-[30px]' method='POST' action='/'>
                        <div className='relative'>
                            <input className='gray-input-style' placeholder='이메일' name='userEmail' type="email" onChange={changeInput} value={userEmail} />
                            <button className={`${userEmail ? "green-mini-btn-style" : "gray-mini-btn-style"} absolute top-[5px] right-[5px]`} type='button'>확인</button>
                        </div>
                        <div className='relative mt-1.5'>
                            <input className='gray-input-style' placeholder='인증번호' name='emailCert' type="text" onChange={changeInput} value={emailCert} />
                            <button className={`${emailCert ? "green-mini-btn-style" : "gray-mini-btn-style"} absolute top-[5px] right-[5px]`} type='button'>인증</button>
                        </div>
                        <div className='relative mt-[15px]'>
                            <input className='gray-input-style' placeholder='사용자명' name='userNick' type="text" onChange={changeInput} value={userNick} />
                            <button className={`${userNick ? "green-mini-btn-style" : "gray-mini-btn-style"} absolute top-[5px] right-[5px]`} type='button'>확인</button>
                        </div>
                        <div className='relative mt-1.5'>
                            <input className='gray-input-style' placeholder='비밀번호' name='userPwd' type="password" onChange={changeInput} value={userPwd} />
                        </div>
                        <div className='relative mt-1.5'>
                            <input className='gray-input-style' placeholder='비밀번호 확인' name='pwdCert' type="password" onChange={changeInput} value={pwdCert} />
                        </div>
                        {emailPass && nickPass && pwdPass ? <button type='submit' className='green-btn-style mt-4'>등록</button> : <button type='button' className='gray-btn-style mt-4'>등록</button>}
                    </form>
                </div>
            </div>
          </section>
      </main>
    </>
  )
}
