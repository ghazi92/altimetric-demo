import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'

class DemoApp extends Component {
    render() {
        return (
            <div className="DemoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />

                            <Route component={ErrorComponent} />
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

export default DemoApp