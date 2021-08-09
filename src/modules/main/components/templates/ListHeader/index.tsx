import { useContext, useMemo } from "react"

import { observer } from "mobx-react-lite"
import { AppStore } from "store"

import { StatusTabs } from "../../organisms"

const ListHeader = () => {
    const { tasks, listStatus } = useContext(AppStore)

    const filteredTasks = useMemo(() => {
        switch (listStatus) {
            case "All": {
                return tasks
            }

            case "Active": {
                return tasks.filter(({ isCompleted }) => isCompleted === false)
            }

            case "Completed": {
                return tasks.filter(({ isCompleted }) => isCompleted === true)
            }

            default:
                tasks
        }
    }, [listStatus, tasks])

    return (
        <>
            <span className="text-3xl text-white font-light flex mb-1">
                My Day
            </span>

            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-light">
                    {filteredTasks?.length} Tasks
                </span>

                <StatusTabs />
            </div>
        </>
    )
}

export default observer(ListHeader)
