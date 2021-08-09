import { FC } from "react"
import cn from "classnames"

interface Props {
    onChange: (item: any) => void
    activeTab: string
    items: string[]
}

const Tabs: FC<Props> = ({ items, activeTab, onChange }) => {
    const buttonClasses = (isActive: boolean) =>
        cn(
            "px-2.5 py-1 text-xs text-white border rounded-full mr-2 last:mr-0 transition-colors hover:text-white",
            {
                "border-transparent text-gray-500": !isActive,
                "border-green-400 cursor-default": isActive,
            }
        )

    return (
        <section className="flex">
            {items?.map((item) => (
                <button
                    className={buttonClasses(activeTab === item)}
                    onClick={() => onChange(item)}
                    key={item}
                >
                    {item}
                </button>
            ))}
        </section>
    )
}

export default Tabs
