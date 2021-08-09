import { ChangeEvent, KeyboardEvent, useContext, useState } from "react"

import { observer } from "mobx-react-lite"
import { AppStore } from "store"

import { Input } from "common/components/atoms"

const AppendTask = () => {
    const [caption, setCaption] = useState<string>("")
    const { appendTask } = useContext(AppStore)

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setCaption(target.value)
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && caption) {
            appendTask({
                _id: "_" + Date.now().toString(),
                isCompleted: false,
                caption,
            })

            setCaption("")
        }
    }

    return (
        <Input
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            placeholder="Add a new task"
            className="mt-8"
            value={caption}
        />
    )
}

export default observer(AppendTask)
