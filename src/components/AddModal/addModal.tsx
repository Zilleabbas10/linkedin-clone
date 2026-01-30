import ImageIcon from '@mui/icons-material/Image';
import { PROFILE_COVER_IMG, PROFILE_IMG } from "../../constants/appConstants"
import Modal from "../Modal/modal"


type AddModalType = {
    title?: string
    closeModal: () => void
}

const AddModal = (props: AddModalType) => {
    return (
        <Modal {...props}>
            <div className="">
                <div className="flex gap-4 items-center">
                    <div className="relative">
                        <img src={PROFILE_IMG} alt="profileImage" className="rounded-full size-15 border-2 border-white cursor-pointer" />
                    </div>
                    <p className="text-2xl">Zill E Abbas</p>
                </div>
                <textarea placeholder="What do you want to talk about?" cols={50} rows={5} className="my-3 outline-0 text-xl p-2" />
                <img src={PROFILE_COVER_IMG} className="size-20 rounded-xl" />
                <div className="flex justify-between items-center mt-8">
                    <div className="">
                        <label htmlFor="inputFile" className="cursor-pointer"><ImageIcon /></label>
                        <input id="inputFile" type="file" className="hidden" />
                    </div>
                    <div className='bg-blue-950 text-white py-1 px-3 h-fit rounded cursor-pointer'>Post</div>
                </div>
            </div>
        </Modal>
    )
}

export default AddModal
