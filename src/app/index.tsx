import { withProviders } from "modules/app/providers"
import { Routing } from "pages"

import "assets/styles/index.css"

const App = () => {
    return <Routing />
}

export default withProviders(App)
