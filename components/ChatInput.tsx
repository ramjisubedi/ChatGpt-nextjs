'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import React, { FormEvent, useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';

type Props = {
    chatId:string
}

const ChatInput = ({chatId}:Props) => {

    const [prompt, setPrompt] = useState("");
    const {data:session } = useSession();

    // TODO: useSWR to get model
    const model = "text-davinci-003";

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!prompt) return;

        const input = prompt.trim();

        const message: Message = {
            text : input,
            createdAt : serverTimestamp(),
            user : {
                _id : session?.user?.email!,
                name : session?.user?.name!,
                avatar : session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }
        await addDoc(
            collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
            message
            );

            // Toast Notification
            const notification = toast.loading("ChatGPT is thinking...");
            await fetch('api/askQuestion',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    prompt : input, chatId , model , session
                })
            }).then(()=> {
                // Toast Notification
                toast.success("ChatGPT has responded!", {
                    id:notification
                })
            })
    }

    

  return (
    <div>
        <form onSubmit={sendMessage } className="bg-gray-700/50 text-gray-400 rounded-lg text-sm p-5 space-x-5 flex">
            <input value={prompt} disabled={!session} className="p-2 w-[100%] rounded bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300" onChange={(e)=>{setPrompt(e.target.value)}} type="text" placeholder='Type your message here...' />
            <button type="submit" disabled={!prompt || !session} className="bg-[#11A37F] hover:opacity-70 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300">
                <PaperAirplaneIcon className="h-5 w-5 -rotate-45 text-white" />
            </button>
        </form>
    </div>
  )
}

export default ChatInput
