import badgers from '@/badgers.webp';
import Image from 'next/image';

const Sucess = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <Image src={badgers} alt="alt" fill className='object-cover' />
    </div>
  )
}

export default Sucess
