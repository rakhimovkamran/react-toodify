import { createContext } from "react"
import { makeAutoObservable } from "mobx"
import { Task } from "common/types/Task"

class AppStoreClass {
    constructor() {
        makeAutoObservable(this)
    }

    tasks: Task[] = [{ _id: `2342342`, isCompleted: false, caption: "Hello" }]

    appendTask = (task: Task) => this.tasks.push(task)

    toggleTaskCompleteState = (id: string) => {
        const _idx = this.tasks.findIndex(({ _id }) => _id === id)
        const state = this.tasks[_idx].isCompleted

        this.tasks[_idx].isCompleted = !state
    }
}

export const AppStore = createContext(new AppStoreClass())
