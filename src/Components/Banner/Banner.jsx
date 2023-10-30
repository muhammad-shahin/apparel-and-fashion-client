/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import bgVideo from '../../assets/video/bgVideo.mp4';
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerData, setBannerData] = useState([]);
  const handleBrandBtnClick = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    fetch('/bannerContent.json')
      .then((res) => res.json())
      .then((data) => {
        setBannerData(data);
      });
  }, []);
  const prevSlide = () => {
    setCurrentSlide(Math.max(currentSlide - 1, 0));
  };

  const nextSlide = () => {
    setCurrentSlide(Math.min(currentSlide + 1, bannerData.length));
  };

  // move to next banner after 10s
  const moveToNextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % bannerData.length;
    setCurrentSlide(nextSlideIndex);
  };

  // this code will slide the banner automatically after 10s
  useEffect(() => {
    const slideTimer = setTimeout(moveToNextSlide, 10000);

    return () => {
      clearTimeout(slideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, bannerData]);

  return (
    <section className=''>
      {/* slider for banner */}
      <div className='slider relative'>
        <div className='slider-content'>
          <div
            className='slide'
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {/* first-slide */}
            <div className='slide-item w-full h-[60vh] lg:h-[70vh] relative'>
              {/* background image/ video */}
              <div className='absolute w-full h-full z-[-10]'>
                <video
                  className='w-full h-full object-cover'
                  src={bgVideo}
                  autoPlay
                  loop
                  muted
                ></video>
                {/* overlay effects */}
                <div className='overlay'></div>
              </div>

              {/* left side content */}
              <div className='text-white pl-[5%] flex justify-center items-start flex-col h-full gap-6 py-4'>
                <h2
                  className='text-[32px] lg:text-[58px] font-medium lg:max-w-[500px] max-w-[80%] uppercase'
                  style={{ fontFamily: 'Quicksand' }}
                >
                  Experience the Luxury of Gucci Bags
                </h2>
                <p
                  className='text-[18px] lg:text-[28px] font-medium uppercase'
                  style={{ fontFamily: 'Quicksand' }}
                >
                  Gucci VALIGERIA Collection
                </p>
                <div className='flex justify-center items-center gap-4'>
                  <button
                    className='lg:px-4 px-2 py-1 rounded-full text-[16px] lg:text-[23px] font-medium border-2 border-transparent bg-blue-500 hover:text-blue-500 hover:bg-transparent hover:border-blue-500 duration-500 text-center'
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    Shop Now
                  </button>
                  <p
                    className='lg:text-[18px] text-[13px] uppercase'
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    From $1,500
                  </p>
                </div>
              </div>

              {/* right side content */}
              <div className='rounded-full bg-blue-300 backdrop-blur-[20px] px-4 py-1 bg-opacity-[0.4] flex justify-center items-center gap-2 lg:w-[150px] lg:h-[150px] w-[60px] h-[60px] absolute lg:bottom-[50px] bottom-[10px] lg:right-[50px] right-[10px]'>
                <img
                  className='lg:w-[150px] w-[60px]'
                  src='https://i.ibb.co/h9s85mT/gucci-logo.png'
                />
              </div>
            </div>
            {/* other slide */}
            {bannerData.map((banner, index) => (
              <div
                key={index}
                className='slide-item w-full h-[60vh] lg:h-[70vh] relative'
              >
                {/* background image/ video */}
                <div className='absolute w-full h-full z-[-10]'>
                  <img
                    className='w-full h-full object-cover'
                    src={banner.bannerImage}
                  ></img>
                  {/* overlay effects */}
                  <div className='overlay'></div>
                </div>

                {/* left side content */}
                <div className='text-white pl-[5%] flex justify-center items-start flex-col h-full gap-6 py-4'>
                  <h2
                    className='text-[32px] lg:text-[58px] font-medium lg:max-w-[500px] max-w-[80%] uppercase'
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    {banner.title}
                  </h2>
                  <p
                    className='text-[18px] lg:text-[28px] font-medium uppercase'
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    {banner.productName}
                  </p>
                  <div className='flex justify-center items-center gap-4'>
                    <button
                      className='lg:px-4 px-2 py-1 rounded-full text-[16px] lg:text-[23px] font-medium border-2 border-transparent bg-blue-500 hover:text-blue-500 hover:bg-transparent hover:border-blue-500 duration-500 text-center'
                      style={{ fontFamily: 'Quicksand' }}
                    >
                      Shop Now
                    </button>
                    <p
                      className='lg:text-[18px] text-[13px] uppercase'
                      style={{ fontFamily: 'Quicksand' }}
                    >
                      {banner.startingPrice}
                    </p>
                  </div>
                </div>

                {/* right side content */}
                <div className='rounded-full bg-blue-300 backdrop-blur-[20px] px-4 py-1 bg-opacity-[0.4] flex justify-center items-center gap-2 lg:w-[150px] lg:h-[150px] w-[60px] h-[60px] absolute lg:bottom-[50px] bottom-[10px] lg:right-[50px] right-[10px]'>
                  <img
                    className='lg:w-[150px] w-[60px]'
                    src={banner.brandLogo}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* logo buttons */}
        <div className='absolute bottom-[5%] left-[5%]'>
          <div className='rounded-full bg-gray-100 backdrop-blur-[20px] lg:px-4 px-2 lg:py-2 py-1 bg-opacity-[0.2] flex justify-center items-center gap-2'>
            <div
              className={`lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full bg-white font-medium flex justify-center items-center leading-none text-[22px] opacity-[0.8] overflow-hidden cursor-pointer custom-border hover:border-[3px] hover:border-blue-500 duration-500 ${
                currentSlide === 0
                  ? 'border-[3px] border-blue-500'
                  : 'border[3px] border-transparent'
              }`}
              onClick={() => handleBrandBtnClick(0)}
            >
              <img src={'https://i.ibb.co/h9s85mT/gucci-logo.png'} />
            </div>
            {bannerData.map((banner, index) => (
              <div
                key={index}
                className={`lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full bg-white font-medium flex justify-center items-center leading-none text-[22px] opacity-[0.8] overflow-hidden cursor-pointer custom-border hover:border-[3px] hover:border-blue-500 ${
                  index + 1 - currentSlide === 0
                    ? 'border-[3px] border-blue-500'
                    : 'border[3px] border-transparent'
                } duration-500`}
                onClick={() => handleBrandBtnClick(index + 1)}
              >
                <img src={banner.brandLogo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
