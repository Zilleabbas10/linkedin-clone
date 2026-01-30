import Modal from "../Modal/modal"

type AddEditInfoModalType = {
    title?: string
    closeModal: () => void
}

const AddEditAboutModal = (props: AddEditInfoModalType) => {
    return (
        <Modal {...props}>
            <div className="my-8">
                <div className="w-full mb-4">
                    <label htmlFor="about">About*</label>
                    <br />
                    <textarea id='about' cols={10} rows={3} className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="skills">Skills*(Add by sperating comma)</label>
                    <br />
                    <textarea id='skills' cols={10} rows={3} className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="w-full mb-4">
                    <div className="border text-blue-900 border-blue-900 py-1 px-3 w-fit mb-2 rounded hover:bg-blue-950 hover:text-white cursor-pointer">
                        <label htmlFor="resume-upload" className=" cursor-pointer">Resume Upload</label>
                        <input id="resume-upload" type="file" className="hidden" />
                    </div>
                    <p className="text-blue-900 underline">dummy.png</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="bg-blue-950 text-white py-1 px-3 w-fit rounded cursor-pointer">Save</p>
                </div>
            </div>
        </Modal>
    )
}

export default AddEditAboutModal