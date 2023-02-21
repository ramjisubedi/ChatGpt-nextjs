import React from 'react'
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useSession } from 'next-auth/react';

const NewChat = () => {

  const router = useRouter();
  const {data:session} = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),{
        message:[],
        userID:session?.user?.email!,
        createdAt:serverTimestamp()
      }
    );
    router.push(`/chat/${doc.id}`);
  }
  return (
    <div onClick={createNewChat} className='border-gray-700 border chatRow'>
        <PlusIcon className='h-5 w-5'/>
        <span>New Chat</span>
    </div>
  )
}

export default NewChat