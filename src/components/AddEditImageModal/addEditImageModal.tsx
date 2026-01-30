import { PROFILE_COVER_IMG, PROFILE_IMG_1 } from "../../constants/appConstants"
import Modal from "../Modal/modal"



type AddEditImageModalType = {
    title?: string
    closeModal: () => void
    isEditingProfileImage?: boolean
}

const AddEditImageModal = (props: AddEditImageModalType) => {
    const { isEditingProfileImage } = props
    return (
        <Modal {...props}>
            <div className="p-1 relative h-full">
                <div className='flex flex-col items-center'>
                    {
                        isEditingProfileImage ? (
                            <img src={PROFILE_IMG_1} alt="editProfileImage" className="size-37.5 rounded-full align-middle" />
                        ) : (
                            <img src={PROFILE_COVER_IMG} alt="editCoverImage" className="w-full rounded-xl h-50 object-covers my-5" />
                        )
                    }
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div className="bg-blue-950 text-white py-1 px-3 h-fit rounded cursor-pointer">
                        <label htmlFor="btn-submit-image" className=" cursor-pointer">Upload</label>
                        <input id="btn-submit-image" type="file" className="hidden" />
                    </div>
                    <div className='bg-blue-950 text-white py-1 px-3 h-fit rounded cursor-pointer'>Submit</div>
                </div>

            </div>
        </Modal>
    )
}

export default AddEditImageModal