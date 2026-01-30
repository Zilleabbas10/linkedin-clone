import EditIcon from '@mui/icons-material/Edit'

export type EditButtonProps = {
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

const EditButton = ({
  onClick,
  className = '',
  ariaLabel = 'Edit',
}: EditButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`cursor-pointer top-3 right-3 z-20 size-8.75 flex justify-center items-center rounded-full p-3 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
    >
      <EditIcon />
    </button>
  )
}

export default EditButton
