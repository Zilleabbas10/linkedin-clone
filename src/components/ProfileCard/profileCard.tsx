import { PROFILE_COVER_IMG, PROFILE_IMG } from "../../constants/appConstants"
import Card from "../Card/card"

const ProfileCard = () => {
    return (
        <Card>
            <div className="relative h-25">
                <div className="relative w-full h-22 rounded-md">
                    <img src={PROFILE_COVER_IMG} className="rounded-t-md h-full w-full" />
                </div>
                <div className="absolute top-14 left-6 z-10">
                    <img alt="profileImage" src={PROFILE_IMG} className="rounded-full border-2 size-16 border-white cursor-pointer" />
                </div>
            </div>
            <div className="p-5">
                <p className="text-xl mt-5">Zill E Abbas</p>
                <p className="text-sm my-1">Senior Software Engineer</p>
                <p className="text-sm my-1">Berlin Germany</p>
                <p className="text-sm my-1">Kollex GmbH</p>
            </div>
        </Card>
    )
}

export default ProfileCard