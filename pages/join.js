import Image from 'next/image'
import Seo from '../components/Seo'
import React, { useState, useEffect } from 'react'


export default function Join() {
    

    const [user, setUser] = useState({
        userEmail: "",
        userId: "",
        userPwd: "",
        pwdCert: "",
        userImg: "/user-default.png",
        intro: "",
        linker: 0,
        linking: 0
    });
    const { userEmail, userId, userPwd, pwdCert } = user;

    const [pwdPass, setPwdPass] = useState(false);
    const [pwdMsg, setPwdMsg] = useState(false);

    const changeInput = (e) => {  // 각 input의 내용을 user와 name을 매칭해 대입
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value
        });
    };

    useEffect(() => {  // user 객체가 변동이 있을 때마다 비밀번호를 확인하고 일치하면 pwdPass에 true 대입
        if(userPwd == "" || pwdCert == ""){
            setPwdPass(false);
        } else if(userPwd !== pwdCert){
            setPwdPass(false);
            setPwdMsg(true);
        } else {
            setPwdPass(true);
            setPwdMsg(false);
        }
    },[user]);

    const joinUser = (e) => {
        localStorage.setItem("you", JSON.stringify(user));
        
    };



  return (
    <>
      <Seo title={`터북스`} />
      <main>
          <section className='flex items-center min-h-screen wrapper-740'>
            <div className='flex-1 margin-15 flex justify-center'>
                <div className={`relative text-center con-box py-14 max-w-sm`}>
                    <Image src="/login-logo.png" width={156} height={60} />
                    <form className='pt-14 px-[30px]' action='/' method='post'>
                        <div className='relative'>
                            <input className='gray-input-style' placeholder='이메일' name='userEmail' type="email" onChange={changeInput} value={userEmail} />
                        </div>
                        <div className='relative mt-[15px]'>
                            <input className='gray-input-style' placeholder='사용자명' name='userId' type="text" onChange={changeInput} value={userId} />
                        </div>
                        <div className='relative mt-1.5'>
                            <input className='gray-input-style' placeholder='비밀번호' name='userPwd' type="password" onChange={changeInput} value={userPwd} />
                        </div>
                        <div className='relative mt-1.5'>
                            <input className='gray-input-style' placeholder='비밀번호 확인' name='pwdCert' type="password" onChange={changeInput} value={pwdCert} />
                            {pwdMsg ? <span className='font-green text-sm'>비밀번호가 일치하지 않습니다.</span> : ""}
                        </div>
                        {userEmail && userId && pwdPass ? <button type='submit' className='green-btn-style mt-4' onClick={joinUser}>등록</button> : <button type='button' className='gray-btn-style mt-4'>등록</button>}
                    </form>
                </div>
            </div>
          </section>
      </main>
    </>
  )
}
