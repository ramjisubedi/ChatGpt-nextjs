'use client'
import { useSession } from 'next-auth/react';
import NewChat from './NewChat'
const SideBar = () => {
  const {data:session} = useSession();
  return (
    <div className="flex flex-col h-screen p-2">
        <div className="flex-1">
            <div>
                {/* New Chat */}
                <NewChat />
                {/* ModelSection */}

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