import { useContext } from "react"

import { observer } from "mobx-react-lite"
import { AppStore } from "store"

import Task from "../../molecules/Task"

const TaskList = () => {
    const { tasks, toggleTaskCompleteState } = useContext(AppStore)

    return (
        <section className="w-full mt-2">
            {tasks.map((task) => (
                <Task
                    onChange={() => toggleTaskCompleteState(task._id)}
                    key={task._id}
                    {...task}
                />
            ))}
        </section>
    )
}

export default observer(TaskList)
