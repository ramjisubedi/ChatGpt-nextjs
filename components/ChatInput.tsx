'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

type Props = {
    chatId:string
}

const ChatInput = ({chatId}:Props) => {

    const [prompt, setPrompt] = useState("");

  return (
    <div>
        <form className="p-5 space-x-5 flex-1 flex">
            <input className="p-2 w-[100%] rounded" onChange={(e)=>{setPrompt(e.target.value)}} type="text" placeholder='Type your message here...' />
            <button >
                <PaperAirplaneIcon className="h-5 w-5 -rotate-45 text-white" />
            </button>
        </form>
    </div>
  )
}

export default ChatInput