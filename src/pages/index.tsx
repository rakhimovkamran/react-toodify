import { lazy } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

const MainPage = lazy(() => import("./main"))

export const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Redirect to="/" />
        </Switch>
    )
}
