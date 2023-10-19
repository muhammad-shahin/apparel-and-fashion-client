import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

const SocialIcons = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <div className='rounded-full bg-blue-300 backdrop-blur-[25px] bg-opacity-[0.3] flex justify-center items-center gap-2 h-[36px] w-[36px] p-1'>
        <BsFacebook className='text-[22px] text-blue-600' />
      </div>
      <div className='rounded-full bg-blue-300 backdrop-blur-[25px] bg-opacity-[0.3] flex justify-center items-center gap-2 h-[36px] w-[36px] p-1'>
        <BsInstagram className='text-[22px] text-orange-600' />
      </div>
      <div className='rounded-full bg-blue-300 backdrop-blur-[25px] bg-opacity-[0.3] flex justify-center items-center gap-2 h-[36px] w-[36px] p-1'>
        <BsTwitter className='text-[22px] text-blue-400' />
      </div>
      <div className='rounded-full bg-blue-300 backdrop-blur-[25px] bg-opacity-[0.3] flex justify-center items-center gap-2 h-[36px] w-[36px] p-1'>
        <BsLinkedin className='text-[22px] text-blue-500' />
      </div>
    </div>
  );
};

export default SocialIcons;
