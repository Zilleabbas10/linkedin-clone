import Card from "../../components/Card/card"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import Conversation from "../../components/Conversation/conversation";
import { PROFILE_COVER_IMG, PROFILE_IMG_1 } from "../../constants/appConstants";
import AdvertisementCard from "../../components/AdvertisementCard/advertisementCard";

const MessagesPage = () => {
    return (
        <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
            <div className="w-full justify-between flex pt-5">
                {/* Left side view */}
                <div className="w-full md:w-[70%]">
                    <Card>
                        <div className="border-b border-gray-300 px-5 py-2 font-semibold text-lg">
                            Messaging
                        </div>
                        <div className="border-b border-gray-300 px-5 py-2">
                            <div className="py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white">
                                <span>Focused</span>
                                <ArrowDropDownIcon />
                            </div>
                        </div>
                        {/* Chat View */}
                        <div className="w-full md: flex">
                            <div className="h-125 overflow-auto w-full md:w-[40%] border-r border-gray-400">
                                {/* Chat list view */}
                                <Conversation />
                                <Conversation />
                                <Conversation />
                                <Conversation />
                            </div>
                            {/* Chat conversation */}
                            <div className="w-full md:w-[60%] border-gray-400">
                                <div className="border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center">
                                    <div>
                                        <p className="text-md">Muhammad Adil</p>
                                        <p className="text-sm text-gray-500">Senior QA Engineer</p>
                                    </div>
                                    <MoreVertIcon />
                                </div>
                                <div className="h-65 w-full overflow-auto border-b border-gray-300">
                                    <div className="w-full border-b border-gray-300 gap-3 p-4">
                                        <img src={PROFILE_IMG_1} alt="profileImg" className="size-16 rounded-full cursor-pointer" />
                                        <p className="text-md">Muhammad Adil</p>
                                        <p className="text-sm text-gray-500">Senior QA Engineer</p>
                                    </div>
                                    <div className="w-full">
                                        <div className="w-full flex cursor-pointer border-gray-300 gap-3 p-4">
                                            <div className="shrink-0">
                                                <img src={PROFILE_IMG_1} alt="profileImg" className="size-8 rounded-full cursor-pointer" />
                                            </div>
                                            <div className="mb-2 w-full">
                                                <p className="text-md">Muhammad</p>
                                                <p className="tex-sm hover:bg-gray-200 my-1">This is a text message. Can you please check and let me know.</p>
                                                <img src={PROFILE_COVER_IMG} alt="profileImg" className="w-60 h-45 rounded-md my-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Textarea for chat Reply */}
                                <div className="p-2 w-full border-b border-gray-200">
                                    <textarea placeholder="Write a message..." rows={4} className="w-full p-3 bg-gray-200 outline-0 rounded-xl text-sm"></textarea>
                                </div>
                                <div className="p-2.5 flex justify-between">
                                    <div className="">
                                        <label htmlFor="messageImage" className="cursor-pointer"><ImageIcon /></label>
                                        <input id="messageImage" type="file" className="hidden" />
                                    </div>
                                    <div className='bg-blue-950 text-white py-1 px-3 h-fit rounded cursor-pointer'>Post</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                {/* Right side view */}
                <div className="hidden md:flex md:w-[25%]">
                    <div className="sticky top-19">
                        <AdvertisementCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagesPage