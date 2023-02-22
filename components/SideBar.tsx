'use client'
import { db } from '../firebase';
import { collection } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import {useCollection} from 'react-firebase-hooks/firestore'
import NewChat from './NewChat'
import ChatRow from './ChatRow';
const SideBar = () => {
  const {data:session} = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db,'users',session?.user?.email!, "chats")
  );
  // console.log(chats)
  return (
    <div className="flex flex-col h-screen p-2">
        <div className="flex-1">
            <div>
                {/* New Chat */}
                <NewChat />
                <div>{/* ModelSection */}</div>

                {/* Map the ChatRow */}
                {chats?.docs.map(chat => <ChatRow key={chat.id} id={chat.id}/>)}
            </div>
        </div>
        {session && (
          <img src={session.user?.image!} alt="profile" className='h-16 w-16 rounded-full cursor-poi
          hover:opacity-50 mx-auto mb-2'/>
        )}
    </div>
  )
}

export default SideBar