import NewChat from './NewChat'
const SideBar = () => {
  return (
    <div className="flex flex-col h-screen p-2">
        <div className="flex-1">
            <div>
                {/* New Chat */}
                <NewChat />
                {/* ModelSection */}

            </div>
        </div>
    </div>
  )
}

export default SideBar