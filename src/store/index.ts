import { createContext } from "react"
import { makeAutoObservable } from "mobx"

import type { Task } from "common/types/Task"
import { ListStatus } from "common/types/ListStatus"

class AppStoreClass {
    constructor() {
        makeAutoObservable(this)
    }

    listStatus: ListStatus = "All"
    tasks: Task[] = []

    setListStatus = (status: ListStatus) => (this.listStatus = status)
    appendTask = (task: Task) => this.tasks.unshift(task)

    toggleTaskCompleteState = (id: string) => {
        const _idx = this.tasks.findIndex(({ _id }) => _id === id)
        const state = this.tasks[_idx].isCompleted

        this.tasks[_idx].isCompleted = !state
    }
}

export const AppStore = createContext(new AppStoreClass())
