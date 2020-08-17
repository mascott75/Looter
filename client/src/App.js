import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react"
import Home from "./pages/home"
import Singup from "./pages/signup"
import Login from "./pages/login"

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/signup">
                        <Singup/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
export default App;
