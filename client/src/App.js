import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react"
import Home from "./pages/home"

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App;
