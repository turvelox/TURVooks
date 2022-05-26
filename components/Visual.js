import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-dots {
    max-width: 740px;
    position: absoulte;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: left;
    padding-left: 20px;
  }
  .slick-dots li {
    width: 20px;
    height: 2px;
    margin: 0 5px 0 0;
  }
  .slick-dots li button {
    display: inline-block;
    padding: 0;
    width: 20px;
    height: 2px;
  }
  .slick-dots li button:before {
    font-size: 0;
    line-height: 0;
    content: '';
    width: 20px;
    height: 2px;
    background-color: #fff;
  }
`;

export default function Visual() {

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: true
  };

  return (
    <>
    <div>
      <StyledSlider {...settings}>
        <div className='visual-slide-item visual-slide-item01'>
          <div className='px-4 wrapper-740 relative h-48'>
            <div className='text-2xl md:text-xl text-white font-extralight absolute top-7 left-4 z-20'>
              <p>독서왕 정아영 아나운서의<br/>솜SEE 좋은 리디뷰 .</p>
            </div>
            <div className='absolute flex items-end right-4 md:w-48 md:bottom-0'>
              <Image src="/visual-01.png" width={260} height={192} />
            </div>
          </div>
        </div>
        <div className='visual-slide-item visual-slide-item02'>
          <div className='md:px-4 wrapper-740 relative h-48'>
            <div className='text-2xl md:text-xl text-white font-extralight absolute top-7 left-4 z-20'>
              <p>밍호2019 장편소설 특집<br/>리디뷰 작성하고,<br/>경품도 받아가자!</p>
            </div>
            <div className='absolute flex items-end right-4 md:w-48 md:bottom-0'>
              <Image src="/visual-02.png" width={260} height={192} />
            </div>
          </div>
        </div>
        <div className='visual-slide-item visual-slide-item03'>
          <div className='md:px-4 wrapper-740 relative h-48'>
            <div className='text-2xl md:text-xl text-white font-extralight absolute top-7 left-4 z-20'>
              <p>우리 세대는 독서 세대!<br/>친구들과 함께 TURVooks.</p>
            </div>
            <div className='absolute flex items-end right-4 md:w-48 md:bottom-0'>
              <Image src="/visual-03.png" width={260} height={192} />
            </div>
          </div>
        </div>
      </StyledSlider>
    </div>
    <style jsx>
    {`
      .visual-slide-item01 {
        background-color: #68604e;
      }
      .visual-slide-item02 {
        background-color: #3b6654;
      }
      .visual-slide-item03 {
        background-color: #3b5266;
      }
    `}
    </style>
    </>
  );
}
