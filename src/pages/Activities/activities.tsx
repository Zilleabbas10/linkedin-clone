
import { useParams } from 'react-router-dom'
import AdvertisementCard from "../../components/AdvertisementCard/advertisementCard"
import PostCard from "../../components/PostCard/postCard"
import ProfileCard from "../../components/ProfileCard/profileCard"
import Card from '../../components/Card/card'

const ActivitiesPage = () => {
    const { id } = useParams()
    console.log('id: ==> ', id)
    return (
        <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
            {/* Left Side */}
            <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
                <div className="h-fit">
                    <ProfileCard />
                </div>
            </div>
            {/* Middle Side */}
            <div className="w-full py-5 sm:w-[50%]">
                <Card padding>
                    <p className="text-xl">All Activity</p>
                    <p className="py-1 px-3 mt-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold w-fit rounded-2xl text-white">Posts</p>
                    <div className='mt-5 flex flex-col gap-5'>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </Card>
            </div>
            {/* Right Side */}
            <div className="w-[26%] py-5 hidden md:block">
                <div className="sticky my-5 top-19">
                    <AdvertisementCard />
                </div>
            </div>
        </div>
    )
}

export default ActivitiesPage