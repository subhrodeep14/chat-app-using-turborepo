
"use client"
import {InputBox} from '@repo/ui/input';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router=useRouter();
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      flexDirection: 'column',
      width:'100vw',
      height:'100vh',
    }
    }>
      <div>
      ENTER IN THE ROOM
      </div>
      
      <InputBox placeholder='Room Id' size='big' />
      <button onClick={()=>{
          router.push('/chat/123')
      }} style={{
        padding:"10px"
      }}>Join Room</button>
    </div>
  );
}
