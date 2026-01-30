import Modal from "../Modal/modal"

type AddEditInfoModalType = {
    title?: string
    closeModal: () => void
}

const AddEditInfoModal = (props: AddEditInfoModalType) => {
    return (
        <Modal {...props}>
            <div className="mt-6 w-full h-87.5 overflow-auto">
                <div className="w-full mb-4">
                    <label htmlFor="full_name">Full Name*</label>
                    <br />
                    <input id='full_name' type="text" placeholder="Enter Full Name" className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="headline">Headline*</label>
                    <br />
                    <textarea id='headline' cols={10} rows={3} className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="current_company">Current Company*</label>
                    <br />
                    <input id='current_company' type="text" placeholder="Enter Current Company" className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="current_location">Current Location*</label>
                    <br />
                    <input id='current_location' type="text" placeholder="Enter Current Location" className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="flex justify-center items-center">
                    <p className="bg-blue-950 text-white py-1 px-3 w-fit rounded cursor-pointer">Save</p>
                </div>
            </div>
        </Modal>
    )
}

export default AddEditInfoModal