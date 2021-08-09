import { useContext } from "react"

import { observer } from "mobx-react-lite"
import { AppStore } from "store"

import { Tabs } from "common/components/molecules"

const StatusTabs = () => {
    const { setListStatus, listStatus } = useContext(AppStore)

    return (
        <Tabs
            items={["All", "Active", "Completed"]}
            onChange={setListStatus}
            activeTab={listStatus}
        />
    )
}

export default observer(StatusTabs)
