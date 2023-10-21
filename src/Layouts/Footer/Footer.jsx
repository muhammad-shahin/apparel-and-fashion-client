import SocialIcons from '../../Components/SocialICons/SocialIcons';

const Footer = () => {
  return (
    <footer className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1'>
      {/* map */}
      <div className='w-full lg:h-[650px]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29178.27729473375!2d90.37405301889264!3d23.914972009108364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4488706e2d9%3A0xee45004fa6ba8d03!2sTongi!5e0!3m2!1sen!2sbd!4v1697689043870!5m2!1sen!2sbd'
          width='100%'
          height='650'
          style={{ border: 0 }}
          allowfullscreen='full'
          loading='lazy'
        ></iframe>
      </div>
      {/* get in touch section */}
      <div className='w-full lg:h-[650px] bg-blue-200 bg-opacity-[0.49] backdrop-blur-[25px] text-center px-6 py-8'>
        <div className='space-y-6'>
          <button className='px-5 py-2 bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.49] font-medium text-[18px] text-white uppercase max-w-[250px] text-center'>
            Our Contacts
          </button>
          <p
            className='text-[32px] font-bold uppercase'
            style={{ fontFamily: 'DreamAvenue' }}
          >
            Get in touch
          </p>
          <p className='text-[16px] capitalize'>
            We&apos;re thrilled to help you stay connected with our fashion and
            apparel brand website. Our online platform is your gateway to a
            world of style, trends, and quality clothing. At our website,
            you&apos;ll find an extensive range of fashion-forward collections,
            from chic casual wear to elegant formal attire.
          </p>
          {/* contact info */}
          <div>
            <p
              className='text-[18px] font-medium uppercase'
              style={{ fontFamily: 'Quicksand' }}
            >
              Email :{' '}
              <span className='font-bold'>contact@fashionapparel.com</span>
            </p>
            <p
              className='text-[18px] font-medium uppercase'
              style={{ fontFamily: 'Quicksand' }}
            >
              PHONE NUMBER : <span className='font-bold'>+8801857771268</span>
            </p>
            <p
              className='text-[18px] font-medium uppercase'
              style={{ fontFamily: 'Quicksand' }}
            >
              ADDRESS :{' '}
              <span className='font-bold'>
                16/2, Asad Bepari Road, Auchpara, Tongi, Gazipur
              </span>
            </p>
          </div>
          {/* social icons */}
          <h4
            className='text-[22px] font-medium uppercase'
            style={{ fontFamily: 'Quicksand' }}
          >
            Follow Us On
          </h4>
          <SocialIcons />
        </div>
      </div>

      {/* Have a question */}
      <div className='w-full lg:h-[650px] bg-gray-400  backdrop-blur-[25px] text-center px-6 py-8 text-white space-y-6 xl:col-span-1 col-span-2'>
        <h2
          className='md:text-[48px] text-[32px] font-medium uppercase'
          style={{ fontFamily: 'DreamAvenue' }}
        >
          have a question?
        </h2>
        <form className='flex flex-col justify-self-center items-center gap-6 '>
          <input
            className='bg-black px-5 py-2 text-[22px] min-w-[350px] bg-opacity-[0.59]'
            type='text'
            placeholder='Enter Your Name'
          />
          <input
            className='bg-black px-5 py-2 text-[22px] min-w-[350px] bg-opacity-[0.59]'
            type='email'
            placeholder='Enter Your Email'
          />
          <input
            className='bg-black px-5 py-2 text-[22px] min-w-[350px] bg-opacity-[0.59]'
            type='text'
            placeholder='Enter Your Phone'
          />
          <textarea
            className='bg-black px-5 py-2 text-[22px] min-w-[350px] bg-opacity-[0.59]'
            name='message'
            placeholder='Enter Message'
            cols='25'
            rows='4'
          ></textarea>
          <input
            className='max-w-[350px] px-5 py-2 bg-blue-500 backdrop-blur-[25px] bg-opacity-[0.49] font-medium text-[18px] text-white uppercase w-full h-full cursor-pointer hover:bg-transparent hover:border-blue-500 duration-500 dark:hover:bg-blue-500'
            type='submit'
            value='Send Message'
          />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
