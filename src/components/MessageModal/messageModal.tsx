import Modal from "../Modal/modal"

type MessageModalType = {
    title?: string
    closeModal: () => void
}

const MessageModal = (props: MessageModalType) => {
    return (
        <Modal {...props}>
            <div className="my-8">
                <div className="w-full mb-4">
                    <textarea id='message' cols={10} rows={10} placeholder="Enter Message" className="p-2 mt-1 w-full border rounded-md" />
                </div>
                <div className="flex justify-center items-center">
                    <p className="bg-blue-950 text-white py-1 px-3 w-fit rounded cursor-pointer">Send</p>
                </div>
            </div>
        </Modal>
    )
}

export default MessageModal