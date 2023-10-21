/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import bgVideo from '../../assets/video/bgVideo.mp4';
const AdsSlider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBrandBtnClick = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide(Math.max(currentSlide - 1, 0));
  };

  const nextSlide = () => {
    setCurrentSlide(Math.min(currentSlide + 1, sliderData.length));
  };

  // move to next ads after 10s
  const moveToNextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % sliderData.length;
    setCurrentSlide(nextSlideIndex);
  };

  useEffect(() => {
    const slideTimer = setTimeout(moveToNextSlide, 5000);

    return () => {
      clearTimeout(slideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, sliderData]);

  return (
    <section className=''>
      {/* slider for ads */}
      <div className='slider relative'>
        <div className='slider-content'>
          <div
            className='slide'
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {/* other slide */}
            {sliderData.map((ads, index) => (
              <div
                key={index}
                className='slide-item w-full h-[40vh] md:h-[80vh] lg:h-[60vh] relative'
              >
                {/* background image/ video */}
                <div className='absolute w-full h-full z-[-10]'>
                  <img
                    className='h-full object-cover w-full'
                    src={ads.advertisementImage}
                  ></img>
                  {/* overlay effects */}
                  <div className='overlay'></div>
                </div>

                {/* left side content */}
                <div className='text-white pl-[5%] flex justify-center items-start flex-col h-full gap-6 py-4'>
                  <h2
                    className='text-[22px] lg:text-[48px] font-medium lg:max-w-[650px] md:max-w-[50%] max-w-[80%] uppercase'
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    {ads.title}
                  </h2>
                  <p
                    className='text-[16px] lg:text-[28px] font-medium uppercase leading-none'
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    {ads.productName}
                  </p>
                  <p
                    className='text-[18px] md:max-w-[450px] hidden md:block'
                    style={{ fontFamily: 'Quicksand' }}
                  >
                    {ads.adsDescription.slice(0, 100)}...
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
                      {ads.startingPrice}
                    </p>
                  </div>
                </div>

                {/* right side content */}
                <div className='rounded-full bg-blue-300 backdrop-blur-[20px] px-4 py-1 bg-opacity-[0.4] flex justify-center items-center gap-2 lg:w-[150px] lg:h-[150px] w-[60px] h-[60px] absolute lg:bottom-[50px] bottom-[10px] lg:right-[50px] right-[10px]'>
                  <img
                    className='lg:w-[150px] w-[60px]'
                    src={ads.brandLogo}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* logo buttons */}
        <div className='absolute bottom-[0] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <div className='rounded-full bg-gray-100 backdrop-blur-[20px] lg:px-4 px-2 lg:py-2 py-1 bg-opacity-[0.2] flex justify-center items-center gap-2'>
            {sliderData.map((ads, index) => (
              <div
                key={index}
                className={`lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full bg-white font-medium flex justify-center items-center leading-none text-[22px] opacity-[0.8] overflow-hidden cursor-pointer custom-border hover:border-[3px] hover:border-blue-500 ${
                  index - currentSlide === 0
                    ? 'border-[3px] border-blue-500'
                    : 'border[3px] border-transparent'
                } duration-500`}
                onClick={() => handleBrandBtnClick(index)}
              >
                <img
                  className='w-full h-full object-cover'
                  src={ads.advertisementImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

AdsSlider.propTypes = {
  sliderData: PropTypes.array,
};

export default AdsSlider;
