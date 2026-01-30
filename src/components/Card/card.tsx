import type { ReactNode } from "react"

type CardProps = {
    children?: ReactNode
    padding?: boolean
}

const Card = (props: CardProps) => {
    const { children, padding } = props
    return (
        <div className={`w-full h-full flex flex-col border border-gray-300 bg-white rounded-md shadow ${padding ? 'p-5' : 'p-0'}`}>
            {children}
        </div>
    )
}

export default Card