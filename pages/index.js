import Image from 'next/image'
import Seo from '../components/Seo'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'

export default function Login() {

    const [contents, setContents] = useState(  // contents 기본 가데이터
        [
          {
            author_img: "/pf01.png",
            author: "heritage_boy",
            title: "꿈을 표현한 소설 중에 감히 최고라고 할 수 있다!",
            copy: "서점에 잠시 들러 기분을 만끽하던중... 내 눈앞에 보이던 책이 한권 있었다. 해리포터 스러운 표지 디자인의 소설책 이였는데, 내 이목을 어찌나 끌던지 표지디자인에서 헤어나올수가 없었다. 우선 당장 책을 구매했고 내가 이 책을 보는 시간은 매우 충분했다.",
            thum: "/card01.png",
            book_thum: "/dal.png",
            book_title: "달러구트 꿈 백화점",
            card_date: "2022.05.24"
          },
          {
            author_img: "/pf02.png",
            author: "karoiwi",
            title: "수면은 왜 중요한가.",
            copy: "서점에 잠시 들러 기분을 만끽하던중... 내 눈앞에 보이던 책이 한권 있었다. 해리포터 스러운 표지 디자인의 소설책 이였는데, 내 이목을 어찌나 끌던지 표지디자인에서 헤어나올수가 없었다. 우선 당장 책을 구매했고 내가 이 책을 보는 시간은 매우 충분했다.",
            thum: "/card02.jpg",
            book_thum: "/suggest03.png",
            book_title: "수면의 과학",
            card_date: "2022.05.23"
          }
          
        ]
      );  
    
    const [users, setUsers] = useState(  // users 기본 가데이터
        [
            {
            userEmail: "heritage@gmail.com",
            userId: "heritage_boy",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf01.png",
            intro: "Hello :)",
            linker: 9,
            linking: 12
            },
            {
            userEmail: "karoiwi@kakao.com",
            userId: "karoiwi",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf02.png",
            intro: "책을 좋아하는 사람입니다!",
            linker: 12,
            linking: 6
            },
            {
            userEmail: "gateiwkd@nate.com",
            userId: "gateiwkd",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf03.png",
            intro: "한달에 한권씩 챌린지 도전중입니다. 질문 받지않습니다...",
            linker: 8,
            linking: 8
            },
            {
            userEmail: "callingbae@gmail.com",
            userId: "callingbae",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf04.png",
            intro: "...",
            linker: 2,
            linking: 8
            },
            {
            userEmail: "hiworld@nate.com",
            userId: "hiworld2022",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf05.png",
            intro: "",
            linker: 1,
            linking: 16
            },
            {
            userEmail: "gottakbs@gmail.com",
            userId: "gotta-kbs",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf06.png",
            intro: "안녕하십니까!",
            linker: 5,
            linking: 2
            },
            {
            userEmail: "worldwide1991@gmail.com",
            userId: "worldwide1991",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf07.png",
            intro: "오늘도 활기찬 하루~",
            linker: 4,
            linking: 1
            },
            {
            userEmail: "heritage@daum.net",
            userId: "heritage_boy",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf08.png",
            intro: "책은 참 인생에 도움이 많이 되는것 같아요... 우리 모두 책책책 책을 읽읍시다!",
            linker: 1,
            linking: 3
            }
        ]
    );

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("contents", JSON.stringify(contents));
    }, []);

    const [login, setLogin] = useState({
        loginEmail: "",
        loginPwd: ""
    });

    const { loginEmail, loginPwd } = login;

    const changeInput = (e) => {  // 각 input의 내용을 user와 name을 매칭해 대입
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        });
    };

    const loginCheck = () => {
        
        const {userEmail, userPwd} = JSON.parse(localStorage.getItem("you"));
        // 이메일이 맞는지 확인
        if(loginEmail === userEmail){
            // 있다면 비밀번호 일치 확인
            console.log("일치!");
            if(loginPwd === userPwd) {
                console.log("로그인 성공!");
                location.href='/main';
                return;
            }
            alert("비밀번호가 틀립니다.");
            return;
            
        }
        alert("이메일이 존재하지 않습니다.");
        return;


        // 일치하면 main 으로 이동
    }
      

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
                        <input className='gray-input-style' placeholder='이메일' name='loginEmail' type="email" onChange={changeInput} value={loginEmail} />
                        <input className='gray-input-style mt-1.5' placeholder='비밀번호' name='loginPwd' type="password" onChange={changeInput} value={loginPwd} />
                        <button type='button' className='green-btn-style mt-4' onClick={loginCheck}>로그인</button>
                    </form>
                    <p className='py-6'>
                        <span className='text-sm pr-2.5'>계정이 없으신가요?</span>
                        <Link href="/join">
                            <a className='text-sm font-green font-medium'>가입하기</a>
                        </Link>
                    </p>
                    <p className='text-xs text-center pt-6'>계정문의<br/>turvelox@outlook.com</p>
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
