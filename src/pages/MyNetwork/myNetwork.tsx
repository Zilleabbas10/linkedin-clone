import { useState } from "react"
import ProfileCard from "../../components/ProfileCard/profileCard"

const MyNetworkPage = () => {
    const [selectedButtonType, setSelectedButtonType] = useState<'friends' | 'requests'>('friends')
    const isFriendButtonSelected = selectedButtonType === 'friends'
    const selectedButtonStyle = 'text-white bg-blue-800'
    return (
        <div className="px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-100">
            <div className="py-4 px-10 border border-gray-400 w-full flex justify-between my-5 text-xl bg-white shadow rounded-xl">
                <p>Catch up with friends</p>
                <div className="flex gap-3">
                    <button onClick={() => setSelectedButtonType('friends')} className={`p-1 border rounded-lg border-gray-300 cursor-pointer ${isFriendButtonSelected && selectedButtonStyle}`}>Friends</button>
                    <button onClick={() => setSelectedButtonType('requests')} className={`p-1 border rounded-lg border-gray-300 cursor-pointer ${!isFriendButtonSelected && selectedButtonStyle}`}>Pending requests</button>
                </div>
            </div>
            <div className="flex h-fit w-full gap-7 flex-wrap items-start justify-center">
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>
                <div className="md:w-[23%] h-67.5 sm:w-full">
                    <ProfileCard />
                </div>

            </div>
        </div>
    )
}

export default MyNetworkPage