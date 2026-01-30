import { PROFILE_IMG_1 } from "../../constants/appConstants"

const Conversation = () => {
    return (
        <div className="flex items-center w-full cursor-pointer border-b border-gray-300 gap-3 p-4 hover:bg-gray-200">
            <div className="flex shrink-0">
                <img src={PROFILE_IMG_1} alt="profileImg" className="size-12 rounded-full cursor-pointer" />
            </div>
            <div>
                <p className="text-md">Muhammad Adil</p>
                <p className="text-sm text-gray-500">Senior QA Engineer</p>
            </div>
        </div>
    )
}

export default Conversation