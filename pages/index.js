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
            linking: 12,
            vookLink: "22452889",
            vookImg: "/vook01.png",
            vookTitle: "자본주의 어른을 위한 경제기사 활용법",
            vookAuthor: "이혜진, 김경미, 박윤선, 도예리",
            vookCopy: "경제를 읽는 힘이 곧 경쟁력! 앞서가는 사람들은 매일 아침 경제기사를 읽는다! 경제신문 기자들이 뽑은 45개 핵심 키워드로 경제기사 문해력을 높인다! 거시/국제/증권/부동산 등 경제를 이해하기 위해 반드시 필요한 필수 지식만 담았다! 일상의 경제 활동부터 ..."
            },
            {
            userEmail: "karoiwi@kakao.com",
            userId: "karoiwi",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf02.png",
            intro: "책을 좋아하는 사람입니다!",
            linker: 12,
            linking: 6,
            vookLink: "22459816",
            vookImg: "/vook02.png",
            vookTitle: "창백한 말",
            vookAuthor: "보리스 사빈코프",
            vookCopy: "카뮈에게 영감을 준 작가 격동의 삶을 살아간 혁명가이자 문필가 보리스 사빈코프의 대표작 『창백한 말』 장동건, 이준호, 김상중 주연의 영화 〈아나키스트〉에는 이런 대사가 나온다. ‘너 제2의 사빈코프가 되고 싶다고 했지?’ 사빈코프는 당시 많은 혁명가들의..."
            },
            {
            userEmail: "gateiwkd@nate.com",
            userId: "gateiwkd",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf03.png",
            intro: "한달에 한권씩 챌린지 도전중입니다. 질문 받지않습니다...",
            linker: 8,
            linking: 8,
            vookLink: "22484073",
            vookImg: "/vook03.png",
            vookTitle: "마음을 사로잡는 동물의 색",
            vookAuthor: "캐드 아드, 그리어 스토더스",
            vookCopy: " 빨강, 노랑, 초록, 파랑, 무지개색, 줄무늬, 점무늬…….동물들은 왜 이렇게 다양한 색과 무늬를 띨까요?빨강, 노랑, 초록, 파랑, 무지개색, 줄무늬, 점무늬……. 동물들의 색과 무늬는 깜짝 놀랄 만큼 다채로워요. 동물들은 왜..."
            },
            {
            userEmail: "callingbae@gmail.com",
            userId: "callingbae",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf04.png",
            intro: "...",
            linker: 2,
            linking: 8,
            vookLink: "20731454",
            vookImg: "/vook04.png",
            vookTitle: "예민한 사람도 마음이 편안해지는 작은 습관 (리커버 에디션)",
            vookAuthor: "니시와키 슌지",
            vookCopy: "가벼워진 볼륨, 스페셜 리커버 ‘포근포근 에디션’ 출간! 작가 새벽 세시, 뮤지션 슈가볼 추천! “이 책을 읽고, 오랜만에 한 번도... 받은 《예민한 사람도 마음이 편안해지는 작은 습관》의 ‘포근포근 에디션’이 출간되었다. 세계적 사진가 테레사 프레이타스가 사진을..."
            },
            {
            userEmail: "hiworld@nate.com",
            userId: "hiworld2022",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf05.png",
            intro: "",
            linker: 1,
            linking: 16,
            vookLink: "21117710",
            vookImg: "/vook05.png",
            vookTitle: "모든 것은 기본에서 시작한다",
            vookAuthor: "손웅정",
            vookCopy: "네게 주어진 모든 것들은 다 너의 것이 아니다’, ‘감사하라. 세상은 감사하는 자의 것이다’, ‘삶을 멀리 봐라. 욕심을 버리고 마음을 비워라’... 축구선수로 뛰던 자신의 경험을 반추하며 ‘나처럼 하면 안 된다’는 생각에 손흥민 선수를 직접 교육했고, ‘기본기’의 중요성을 강조했다...."
            },
            {
            userEmail: "gottakbs@gmail.com",
            userId: "gotta-kbs",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf06.png",
            intro: "안녕하십니까!",
            linker: 5,
            linking: 2,
            vookLink: "16823099",
            vookImg: "/vook06.png",
            vookTitle: "어떻게 말해줘야 할까",
            vookAuthor: "오은영",
            vookCopy: "채널A 〈요즘 육아 금쪽같은 내 새끼〉 SBS 〈우리 아이가 달라졌어요〉 국민 육아멘토 오은영 박사가 알려주는 ‘부모의 말’ 육아 현실을 200퍼센트 반영한 130가지 한마디‘국민 육아멘토’ ‘대한민국 엄마·아빠들의 엄마’ 오은영 박사의『어떻게 말해줘야 할까』. 쉽게 따라 할 수 있는..."
            },
            {
            userEmail: "worldwide1991@gmail.com",
            userId: "worldwide1991",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf07.png",
            intro: "오늘도 활기찬 하루~",
            linker: 4,
            linking: 1,
            vookLink: "22052608",
            vookImg: "/vook07.png",
            vookTitle: "독점의 기술",
            vookAuthor: "밀렌드 M. 레레",
            vookCopy: "하지만 독점의 전제는 시장에서 이익을 남기는 최대한의 기술을 의미한다. 수익성이 높은 시장을 찾아내고, 오랫동안 소유하여 해당 사업 영역을 지배하는 것이다. 18년 이상 시카고와 하버드 대학에서 전략 및 마케팅 겸임교수로 재직한 밀렌드 M. 레레는 기업이 매출이 아닌 독점적 지위를..."
            },
            {
            userEmail: "heritage@daum.net",
            userId: "heritage_boy",
            userPwd: "1234",
            pwdCert: "1234",
            userImg: "/pf08.png",
            intro: "책은 참 인생에 도움이 많이 되는것 같아요... 우리 모두 책책책 책을 읽읍시다!",
            linker: 1,
            linking: 3,
            vookLink: "22463691",
            vookImg: "/vook08.png",
            vookTitle: "우리는 왜 잊어야 할까",
            vookAuthor: "스콧 A. 스몰",
            vookCopy: "새로운 길을 배우려면 ‘잊어야’ 한다 서번트는 정말 천재일까? 얼굴... 똑같은 일을 겪었는데 왜 나만 이럴까? 사람들과 어울리고 삶에 유머를 더하라 ... 내가 걸리면 총으로 날 쏴 우리는 잊기 위해 잠을 잔다 기억의 밧줄에서 풀려날 때..."
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

        // 이메일을 입력하지 않았을 때
        if(!loginEmail){
            alert("이메일을 입력해주세요!");
            return;
        }
        // 비밀번호를 입력하지 않았을 때
        if(!loginPwd){
            alert("비밀번호를 입력해주세요!");
            return;
        }

        if(loginEmail === userEmail){
            if(loginPwd === userPwd) {
                location.href='/main';
                return;
            }
            alert("이메일과 비밀번호를 확인해주세요!");
            return;
        }
        alert("이메일과 비밀번호를 확인해주세요!");
        return;
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
