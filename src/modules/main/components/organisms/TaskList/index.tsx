import { useContext, useMemo } from "react"
import { AnimateSharedLayout } from "framer-motion"

import { observer } from "mobx-react-lite"
import { AppStore } from "store"

import { EmptyState, Task } from "../../molecules"
import { Scrollbar } from "common/components/molecules"

const TaskList = () => {
    const { tasks, listStatus, toggleTaskCompleteState } = useContext(AppStore)

    const filteredTasks = useMemo(() => {
        return (
            {
                Completed: tasks.filter(({ isCompleted }) => isCompleted),
                Active: tasks.filter(({ isCompleted }) => !isCompleted),
                All: tasks,
            }[listStatus] ?? tasks
        )
    }, [listStatus, tasks])

    return (
        <section className="w-full h-full overflow-x-hidden flex flex-col mt-2">
            <AnimateSharedLayout>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
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
