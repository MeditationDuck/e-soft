import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-10'>
        
      </div>
       <p>
        Hello Dash board
      </p>
      <UserButton afterSignOutUrl="/"/>
    </div>
   
  )
}