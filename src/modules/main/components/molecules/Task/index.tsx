import { FC } from "react"
import cn from "classnames"

import { motion } from "framer-motion"
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

    const animation = {
        initial: {
            opacity: 0,
            x: 100,
        },

        animate: {
            opacity: 1,
            x: 0,
        },

        transition: {
            x: { type: "spring", stiffness: 300, damping: 35 },
            opacity: { duration: 0.4 },
        },
    }

    return (
        <motion.div
            className="flex py-3 items-center border-b border-gray-800"
            {...animation}
        >
            <button onClick={onChange} className={buttonClasses}>
                <div className={indicatorClasses} />
            </button>

            <span className={captionClasses}>{caption}</span>
        </motion.div>
    )
}

export default Task
