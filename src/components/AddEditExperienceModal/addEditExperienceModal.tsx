import Modal from "../Modal/modal"

type AddEditExperienceModalType = {
    title?: string
    closeModal: () => void
}


const AddEditExperienceModal = (props: AddEditExperienceModalType) => {
    return (
        <Modal {...props}>

            <div className="mt-6 w-full h-87.5 overflow-auto">
                <div className="w-full mb-4">
                    <label htmlFor="role">Role*</label>
                    <br />
                    <input id='role' type="text" placeholder="Enter Role" className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="company">Company*</label>
                    <br />
                    <input id='company' type="text" placeholder="Enter company name" className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="duration">Duration*</label>
                    <br />
                    <input id='duration' type="text" placeholder="Duration" className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="location">Place*</label>
                    <br />
                    <input id='location' type="text" placeholder="Enter company location" className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="flex justify-center items-center">
                    <p className="bg-blue-950 text-white py-1 px-3 w-fit rounded cursor-pointer">Save</p>
                </div>
            </div>
        </Modal>
    )
}

export default AddEditExperienceModal