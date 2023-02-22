import React from 'react'
import Chat from '../../../../components/Chat'
import ChatInput from '../../../../components/ChatInput'

type Props = {
  params:{
    id:string
  }
}

const ChatPage = ({params:{id}}:Props) => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Chat  chatId = {id}/> 
      <ChatInput chatId = {id}/> 
    </div>
  )
}

export default ChatPage