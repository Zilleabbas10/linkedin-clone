import CloseIcon from '@mui/icons-material/Close';

type ModalType = {
    title?: string
    children?: React.ReactNode
    closeModal: () => void
}

const Modal = (props: ModalType) => {
    const { title, children, closeModal } = props
    return (
        <div className="bg-black/50 fixed top-0 left-0 inset-0 z-20 flex justify-center items-center">
            <div className="w-[95%] md:w-[40%] h-fit bg-white rounded-xl shadow p-5">
                <div className="flex justify-between relative">
                    {
                        title && (
                            <div className="flex gap-4 items-center">
                                <div className="text-2xl">{title}</div>
                            </div>
                        )
                    }
                    <div onClick={closeModal} className="cursor-pointer absolute right-2"><CloseIcon /></div>
                </div>
                {children}
            </div >
        </div >
    )
}

export default Modal