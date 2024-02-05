'use client'

import badger from '@/badger.webp';
// import valentines from '@/valentines.mp3';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [size, setSize] = useState(60);
  const router = useRouter();
  
  const success = () => {
    router.push('/success');
  }

  return (   
    <main className='w-screen h-screen flex justify-center'>
      <article className='w-full flex flex-col justify-center items-center prose'>
        <h1 className='text-center'>Będziesz moją walentynką?</h1>
        <Image src={badger} alt="alt" width={250} height={200} />
      {/* <main className="flex min-h-screen items-center justify-center p-2"> */}
        <div className='relative'>
          <Button 
            className={cn(`relative bg-lime-600 hover:bg-lime-400`)}
            style={{width: `${size}px`, height: `${size}px`}}  
            onClick={() => success()}
          >Tak</Button>
          <Button className={cn('ml-12 w-[60px] h-[60px] bg-red-800 hover:bg-red-600')} onClick={() => setSize(s => s + 100)}>Nie</Button>
        </div>
      </article>
    </main>
  );
} 