import { motion } from "framer-motion"

import { ReactComponent as EmptyStateImage } from "assets/svg/empty-box.svg"

const EmptyState = () => {
    const animation = {
        initial: {
            opacity: 0,
        },

        animate: {
            opacity: 1,
        },
    }

    return (
        <motion.div
            className="h-full w-full items-center justify-center flex flex-col"
            {...animation}
        >
            <EmptyStateImage className="text-gray-700 w-28 h-28" />
            <span className="text-lg mt-5 text-gray-500 font-light">
                Oops ! There is nothing
            </span>
            <span className="text-sm text-gray-600 font-light">
                Try to add a new task
            </span>
        </motion.div>
    )
}

export default EmptyState
