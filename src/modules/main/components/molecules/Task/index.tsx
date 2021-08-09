import { FC } from "react"
import cn from "classnames"

interface Props {
    onChange: () => void
    isCompleted: boolean
    caption: string
}

const Task: FC<Props> = ({ caption, onChange, isCompleted }) => {
    const buttonClasses = cn(
        "w-6 h-6 border rounded-full mr-4 p-1 transition-colors",
        {
            "border-gray-500": !isCompleted,
            "border-green-500": isCompleted,
        }
    )

    const indicatorClasses = cn(
        "w-full h-full bg-green-500 rounded-full transition-all transform",
        {
            "scale-0": !isCompleted,
            "scale-1": isCompleted,
        }
    )

    const captionClasses = cn(
        "text-md text-white font-light truncate transition-opacity",
        {
            "opacity-100": !isCompleted,
            "opacity-30": isCompleted,
        }
    )

    return (
        <div className="flex py-3 items-center border-b border-gray-800">
            <button onClick={onChange} className={buttonClasses}>
                <div className={indicatorClasses} />
            </button>

            <span className={captionClasses}>{caption}</span>
        </div>
    )
}

export default Task
