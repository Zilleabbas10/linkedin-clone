
import { useState } from "react";
import Card from "../../components/Card/card"
import ProfileCard from "../../components/ProfileCard/profileCard"
import { PROFILE_IMG } from "../../constants/appConstants"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ImageIcon from '@mui/icons-material/Image';
import ArticleIcon from '@mui/icons-material/Article';
import AdvertisementCard from "../../components/AdvertisementCard/advertisementCard";
import PostCard from "../../components/PostCard/postCard";
import AddModal from "../../components/AddModal/addModal";

const FeedsPage = () => {
    const [isAddPostModalInPort, setAddPostModalInPort] = useState(false)
    return (
        <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
            {/* Left Side */}
            <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
                <div className="h-fit">
                    <ProfileCard />
                </div>
                <div className="w-full my-5">
                    <Card padding>
                        <div className="w-full flex justify-between">
                            <span>Profile Viewers</span>
                            <span className="text-blue-900">23</span>
                        </div>
                        <div className="w-full flex justify-between">
                            <span>Post Impressions</span>
                            <span className="text-blue-900">90</span>
                        </div>
                    </Card>
                </div>
            </div>
            {/* Middle Side */}
            <div className="w-full py-5 sm:w-[50%]">
                {/* Post Section */}
                <div className="">
                    <Card padding>
                        <div className="flex gap-2 items-center">
                            <img src={PROFILE_IMG} className="rounded-full size-13 border-2 border-white cursor-pointer" />
                            <div onClick={() => setAddPostModalInPort(true)} className="w-full border py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100"> Start a post</div>
                        </div>
                        <div className="w-full flex mt-3">
                            <div onClick={() => setAddPostModalInPort(true)} className="flex gap-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"> <VideoCallIcon sx={{ color: 'green' }} />Video</div>
                            <div onClick={() => setAddPostModalInPort(true)} className="flex gap-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"><ImageIcon sx={{ color: 'blue' }} />Photo</div>
                            <div onClick={() => setAddPostModalInPort(true)} className="flex gap-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"><ArticleIcon sx={{ color: 'orange' }} />Article</div>
                        </div>
                    </Card>
                </div>
                <div className="w-full my-5 border border-gray-300" />
                <div className="w-full flex flex-col gap-5">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
            {/* Right Side */}
            <div className="w-[26%] py-5 hidden md:block">
                <div>
                    <Card padding>
                        <p className="text-xl">LinkedIn News</p>
                        <p className="text-gray-600">Top Stories</p>
                        <div className="my-1">
                            <p className="text-md">Buffet to remain BerkShire chair</p>
                            <p className="text-xs text-gray-400">2h ago</p>
                        </div>
                        <div className="my-1">
                            <p className="text-md">Foreign investments surge again</p>
                            <p className="text-xs text-gray-400">2h ago</p>
                        </div>
                    </Card>
                </div>
                <div className="sticky my-5 top-19">
                    <AdvertisementCard />
                </div>
            </div>
            {isAddPostModalInPort && <AddModal closeModal={() => setAddPostModalInPort(false)} />}
        </div>
    )
}

export default FeedsPage