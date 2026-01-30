import AdvertisementCard from "../../components/AdvertisementCard/advertisementCard"
import Card from "../../components/Card/card"
import EditButton from "../../components/EditButton/editButton"
import { DUMMY_TEXT, PROFILE_COVER_IMG, PROFILE_IMG } from "../../constants/appConstants"

const ProfilePage = () => {
    return (
        <div className="px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100">
            <div className="flex justify-between">
                {/* Left side */}
                <div className=" w-full md:w-[70%]">
                    <div>
                        <Card>
                            <div className="w-full h-fit">
                                <div className="relative w-full h-50">
                                    <EditButton ariaLabel="Edit profile" className="absolute" />
                                    <img src={PROFILE_COVER_IMG} alt="profileCoverImage" className="w-full h-50 rounded-tr-lg rounded-tl-lg" />
                                    <div className="absolute object-cover top-24 left-6 z-10">
                                        <img src={PROFILE_IMG} alt="profileImage" className="rounded-full border-2 border-white cursor-pointer size-35" />
                                    </div>
                                </div>
                                <div className="mt-10 relative px-8 py-2">
                                    <EditButton ariaLabel="Edit profile" className="absolute" />
                                    <p className="text-2xl">Zill E Abbas</p>
                                    <p className="text-gray-700">I am a Senior Software Engineer</p>
                                    <p className="text-sm text-gray-500">Berlin, Germany</p>
                                    <p className="text-md text-blue-800 w-fit cursor-pointer hover:underline">2 connections</p>
                                    <div className="w-full md:flex justify-between">
                                        <div className="my-5 flex gap-5">
                                            <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">Open to</div>
                                            <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">Share</div>
                                            <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">Log out</div>
                                        </div>
                                        <div className="my-5 flex gap-5">
                                            <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">Message</div>
                                            <div className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">Connect</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="my-5">
                        <Card padding>
                            <div className="flex justify-between items-center">
                                <p className="text-xl">About</p>
                                <EditButton ariaLabel="Edit profile" />
                            </div>
                            <p className="text-gray-700 text-md w-[80%]">{DUMMY_TEXT.substring(0, 192)}</p>
                        </Card>
                    </div>
                    <div className="mt-5">
                        <Card padding>
                            <div className="flex items-center justify-between">
                                <p className="text-xl">Skills</p>
                            </div>
                            <div className="w-full gap-4 my-2 flex flex-wrap">
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">Html</div>
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">Css</div>
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">Javascript</div>
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">Python</div>
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">Angular 2</div>
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">React JS</div>
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">Ionic 2</div>
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">NodeJs</div>
                                <div className="cursor-pointer py-2 px-3 border rounded-lg bg-blue-800 text-white">AWS</div>
                            </div>

                        </Card>
                    </div>
                </div>
                {/* Right side */}
                <div className="hidden md:flex md:w-[28%]">
                    <div className="sticky top-19">
                        <AdvertisementCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage