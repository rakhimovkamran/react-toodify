import { FC, InputHTMLAttributes } from "react"
import cn from "classnames"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

const Input: FC<Props> = ({ placeholder, className, ...props }) => {
    const inputClasses = cn(
        "w-full bg-transparent border-b border-gray-700 transition-colors pb-2 text-white focus:border-green-600 font-light",
        className
    )

    return (
        <input className={inputClasses} placeholder={placeholder} {...props} />
    )
}

export default Input
