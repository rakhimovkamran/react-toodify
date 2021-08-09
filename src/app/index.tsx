import { withProviders } from "modules/app/providers"
import { Routing } from "pages"

import "assets/styles/index.css"

const App = () => {
    return (
        <main className="max-w-1200p mx-auto h-screen">
            <Routing />
        </main>
    )
}

export default withProviders(App)
