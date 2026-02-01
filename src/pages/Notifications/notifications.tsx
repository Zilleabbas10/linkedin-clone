import AdvertisementCard from "../../components/AdvertisementCard/advertisementCard"
import Card from "../../components/Card/card"
import ProfileCard from "../../components/ProfileCard/profileCard"
import { PROFILE_IMG, PROFILE_IMG_1 } from "../../constants/appConstants"

const NotificationsPage = () => {
    return (
        <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
            {/* Left Side */}
            <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
                <div className="h-fit">
                    <ProfileCard />
                </div>
            </div>
            {/* Middle Side */}
            <div className="w-full h-fit py-5 sm:w-[50%]">
                <Card>
                    <div className="w-full">
                        <div className={`p-3 flex gap-4 items-center border-b border-gray-300 cursor-pointer`}>
                            <img src={PROFILE_IMG_1} alt="profile_img" className="size-14 rounded-full" />
                            <p>Dummy user has sent you a friend request.</p>
                        </div>
                        <div className={`p-3 flex gap-4 items-center border-b border-gray-300 cursor-pointer`}>
                            <img src={PROFILE_IMG} alt="profile_img" className="size-14 rounded-full" />
                            <p>Dummy user has commented on your post.</p>
                        </div>
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

export default NotificationsPage