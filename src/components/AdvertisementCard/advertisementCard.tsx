import { PROFILE_IMG } from "../../constants/appConstants"
import Card from "../Card/card"

const AdvertisementCard = () => {
    return (
        <div className="sticky top-18">
            <Card>
                <div className="relative h-25">
                    <div className="relative w-full h-22 rounded-md">
                        <img src="https://www.shutterstock.com/shutterstock/photos/1202031361/display_1500/stock-photo-sunset-in-florence-header-picture-1202031361.jpg" className="rounded-t-md h-full w-full" />
                    </div>
                    <div className="w-full flex justify-center z-10">
                        <img alt="profileImage" src={PROFILE_IMG} className="absolute -bottom-4 rounded-full border-2 size-14 border-white cursor-pointer" />
                    </div>
                </div>
                <div className="px-5 py-5 mx-auto">
                    <p className="text-sm font-semibold text-center">Zill E Abbas</p>
                    <p className="text-sm my-3 text-center">Get the latest jobs and industry news</p>
                    <p className="text-sm my-1 border text-center p-2 rounded-3xl font-bold border-blue-950 text-white bg-blue-800 cursor-pointer">Explore</p>
                </div>
            </Card>
        </div>
    )
}

export default AdvertisementCard