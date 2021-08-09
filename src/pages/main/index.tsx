import { useState } from "react"
import { observer } from "mobx-react-lite"

import { AppendInput, TaskList } from "modules/main/components/organisms"
import { Tabs } from "common/components/molecules"

const Main = () => {
    const [activeTab, setActiveTab] = useState("All")

    return (
        <div className="flex h-full items-center justify-center">
            <section className="w-2/4 h-2/3 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-xl shadow-xl p-8">
                <span className="text-3xl text-white font-light flex mb-1">
                    My Day
                </span>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-light">
                        5 Tasks
                    </span>

                    <Tabs
                        items={["All", "Active", "Completed"]}
                        onChange={setActiveTab}
                        activeTab={activeTab}
                    />
                </div>

                <AppendInput />
                <TaskList />
            </section>
        </div>
    )
}

export default observer(Main)
