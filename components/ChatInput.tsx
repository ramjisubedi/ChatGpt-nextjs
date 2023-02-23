'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

type Props = {
    chatId:string
}

const ChatInput = ({chatId}:Props) => {

    const [prompt, setPrompt] = useState("");
    const {data:session } = useSession();

  return (
    <div>
        <form className="bg-gray-700/50 text-gray-400 rounded-lg text-sm p-5 space-x-5 flex">
            <input value={prompt} disabled={!session} className="p-2 w-[100%] rounded bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300" onChange={(e)=>{setPrompt(e.target.value)}} type="text" placeholder='Type your message here...' />
            <button type="submit" disabled={!prompt || !session} className="bg-[#11A37F] hover:opacity-70 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300">
                <PaperAirplaneIcon className="h-5 w-5 -rotate-45 text-white" />
            </button>
        </form>
    </div>
  )
}

export default ChatInput