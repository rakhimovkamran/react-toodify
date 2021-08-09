import { useContext, useMemo } from "react"
import { AnimateSharedLayout } from "framer-motion"

import { observer } from "mobx-react-lite"
import { AppStore } from "store"

import { EmptyState, Task } from "../../molecules"

const TaskList = () => {
    const { tasks, listStatus, toggleTaskCompleteState } = useContext(AppStore)

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
        <section className="w-full h-full overflow-auto flex flex-col mt-2">
            <AnimateSharedLayout>
                {filteredTasks!.length > 0 ? (
                    filteredTasks!.map((task) => (
                        <Task
                            onChange={() => toggleTaskCompleteState(task._id)}
                            key={task._id}
                            {...task}
                        />
                    ))
                ) : (
                    <EmptyState />
                )}
            </AnimateSharedLayout>
        </section>
    )
}

export default observer(TaskList)
