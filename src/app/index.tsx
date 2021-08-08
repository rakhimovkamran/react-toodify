import { withProviders } from "modules/app/providers"
import { Routing } from "pages"

const App = () => {
    return <Routing />
}

export default withProviders(App)
