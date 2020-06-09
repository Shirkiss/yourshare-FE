import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from "./components/header";
import './App.css';
import {withAuthenticator} from "@aws-amplify/ui-react";

// AWS amplify
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <div id="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/articles-list" component={ArticlesListPage}/>
                            <Route path="/article/:name" component={ArticlePage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}


export default withAuthenticator(App);
