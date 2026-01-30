import AdvertisementCard from "../../components/AdvertisementCard/advertisementCard"

const ResumePage = () => {
    return (
        <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100">
            <div className="w-full py-5 sm:w-[75%]">
                <img src="https://resumesector.com/wp-content/uploads/2024/10/Best-Resume-Template-Free-Download-MS-Word-.jpg.webp" alt="resumeImage" className="w-full h-full rounded-lg" />
            </div>
            <div className="w-[26%] py-5 hidden md:block">
                <AdvertisementCard />
            </div>
        </div>
    )
}

export default ResumePage