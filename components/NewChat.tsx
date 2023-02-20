import React from 'react'
import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    <div className='border-gray-700 border chatRow'>
        <PlusIcon className='h-5 w-5'/>
        <span>New Chat</span>
    </div>
  )
}

export default NewChat