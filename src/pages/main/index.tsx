import { observer } from "mobx-react-lite"

import { AppendInput, TaskList } from "modules/main/components/organisms"
import { ListHeader } from "modules/main/components/templates"

const Main = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <section className="w-full md:w-2/4 h-full md:h-2/3 transition-all bg-gradient-to-tr from-gray-800 to-gray-900 md:rounded-xl shadow-xl p-8 flex flex-col">
                <ListHeader />
                <AppendInput />
                <TaskList />
            </section>
        </div>
    )
}

export default observer(Main)
