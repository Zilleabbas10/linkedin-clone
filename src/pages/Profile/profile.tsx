
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AdvertisementCard from "../../components/AdvertisementCard/advertisementCard"
import Card from "../../components/Card/card"
import EditButton from "../../components/EditButton/editButton"
import PostCard from "../../components/PostCard/postCard"
import { DUMMY_TEXT, PROFILE_COVER_IMG, PROFILE_IMG } from "../../constants/appConstants"
import AddEditImageModal from '../../components/AddEditImageModal/addEditImageModal';
import AddEditInfoModal from '../../components/AddEditInfoModal/addEditInfoModal';
import AddEditAboutModal from '../../components/AddEditAboutModal/addEditAboutModal';
import AddEditExperienceModal from '../../components/AddEditExperienceModal/addEditExperienceModal';
import MessageModal from '../../components/MessageModal/messageModal';
import { Link, useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { id } = useParams()
    console.log('id: ==> ', id)
    const [isAddEditImageModalVisible, setAddEditImageModalVisible] = useState<boolean>(false)
    const [isAddEditInfoModalVisible, setAddEditInfoModalVisible] = useState<boolean>(false)
    const [isAddEditAboutModalVisible, setAddEditAboutModalVisible] = useState<boolean>(false)
    const [isAddEditExperienceModalVisible, setAddEditExperienceModalVisible] = useState<boolean>(false)
    const [isMessageModalVisible, setMessageModalVisible] = useState<boolean>(false)
    const [isEditingProfileImage, setEditingProfileImage] = useState<boolean>(false)


    const handleCloseMessageModal = () => {
        setMessageModalVisible(false)
    }
    const handleOpenMessageModal = () => {
        setMessageModalVisible(true)
    }
    const handleCloseAddEditExperienceModal = () => {
        setAddEditExperienceModalVisible(false)
    }
    const handleOpenAddEditExperienceModal = () => {
        setAddEditExperienceModalVisible(true)
    }
    const handleCloseAddEditAboutModal = () => {
        setAddEditAboutModalVisible(false)
    }
    const handleOpenAddEditAboutModal = () => {
        setAddEditAboutModalVisible(true)
    }
    const handleCloseAddEditInfoModal = () => {
        setAddEditInfoModalVisible(false)
    }
    const handleOpenAddEditInfoModal = () => {
        setAddEditInfoModalVisible(true)
    }
    const handleCloseAddEditImageModal = () => {
        setAddEditImageModalVisible(false)
    }
    const handleEditCoverImage = () => {
        setEditingProfileImage(false)
        setAddEditImageModalVisible(true)
    }
    const handleAddEditProfileImage = () => {
        setEditingProfileImage(true)
        setAddEditImageModalVisible(true)
    }
    return (
        <div className="px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100">
            <div className="flex justify-between">
                {/* Left side */}
                <div className=" w-full md:w-[70%]">
                    <div>
                        <Card>
                            <div className="w-full h-fit">
                                <div className="relative w-full h-50">
                                    <EditButton onClick={handleEditCoverImage} ariaLabel="Edit profile" className="absolute" />
                                    <img src={PROFILE_COVER_IMG} alt="profileCoverImage" className="w-full h-50 rounded-tr-lg rounded-tl-lg" />
                                    <div onClick={handleAddEditProfileImage} className="absolute object-cover top-24 left-6 z-10">
                                        <img src={PROFILE_IMG} alt="profileImage" className="rounded-full border-2 border-white cursor-pointer size-35" />
                                    </div>
                                </div>
                                <div className="mt-10 relative px-5 py-2">
                                    <EditButton onClick={handleOpenAddEditInfoModal} ariaLabel="Edit profile" className="absolute" />
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
                                            <div onClick={handleOpenMessageModal} className="cursor-pointer p-2 border rounded-lg bg-blue-800 text-white font-semibold">Message</div>
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
                                <EditButton onClick={handleOpenAddEditAboutModal} ariaLabel="Edit profile" />
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
                    <div className="mt-5">
                        <Card padding>
                            <div className="flex items-center justify-between">
                                <p className="text-xl">Activity</p>
                            </div>
                            <p className="cursor-pointer px-3 py-1 my-2 w-fit border rounded-4xl bg-green-800 text-white font-semibold">Posts</p>
                            <div className="overflow-x-auto my-2 flex gap-1 overflow-y-hidden w-full scroll-smooth">
                                <Link to={`/profile/${id}/activities/1jnj121j1`} className="w-87.5 h-140 shrink-0 cursor-pointer">
                                    <PostCard areButtonsShown={false} />
                                </Link>
                                <Link to={`/profile/${id}/activities/1jnj131j1`} className="w-87.5 h-140 shrink-0 cursor-pointer">
                                    <PostCard areButtonsShown={false} />
                                </Link>
                                <Link to={`/profile/${id}/activities/1jnj141j1`} className="w-87.5 h-140 shrink-0 cursor-pointer">
                                    <PostCard areButtonsShown={false} />
                                </Link>
                            </div>
                            <div className='w-full flex justify-center items-center'>
                                <Link to={`/profile/${id}/activities`} className='p-2 rounded cursor-pointer hover:bg-gray-100'>Show all posts <ArrowForwardIcon /></Link>
                            </div>
                        </Card>
                    </div>
                    <div className="mt-5">
                        <Card padding>
                            <div className="flex items-center justify-between">
                                <p className="text-xl">Experiences</p>
                                <div className='cursor-pointer'><AddIcon /></div>
                            </div>
                            <div className='mt-5'>
                                <div className='py-2 border-t border-gray-200 flex justify-between'>
                                    <div>
                                        <p className="text-lg">DSE Engineer | Senior Software Engineer</p>
                                        <p className="text-sm">Kollex GmbH</p>
                                        <p className="text-sm text-gray-500">August 2022, Present</p>
                                        <p className="text-sm text-gray-500">Berlin, Germany</p>
                                    </div>
                                    <EditButton onClick={handleOpenAddEditExperienceModal} ariaLabel="Edit experience" />
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='py-2 border-t border-gray-200 flex justify-between'>
                                    <div>
                                        <p className="text-lg">DSE Engineer | Senior Software Engineer</p>
                                        <p className="text-sm">Kollex GmbH</p>
                                        <p className="text-sm text-gray-500">August 2022, Present</p>
                                        <p className="text-sm text-gray-500">Berlin, Germany</p>
                                    </div>
                                    <EditButton onClick={handleOpenAddEditExperienceModal} ariaLabel="Edit experience" />
                                </div>
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
            {isAddEditImageModalVisible && (<AddEditImageModal title='Upload Image' isEditingProfileImage={isEditingProfileImage} closeModal={handleCloseAddEditImageModal} />)}
            {isAddEditInfoModalVisible && (<AddEditInfoModal title='Edit Info' closeModal={handleCloseAddEditInfoModal} />)}
            {isAddEditAboutModalVisible && (<AddEditAboutModal title='Edit About' closeModal={handleCloseAddEditAboutModal} />)}
            {isAddEditExperienceModalVisible && (<AddEditExperienceModal title='Edit Experience' closeModal={handleCloseAddEditExperienceModal} />)}
            {isMessageModalVisible && (<MessageModal title='Send Message' closeModal={handleCloseMessageModal} />)}
        </div>
    )
}

export default ProfilePage