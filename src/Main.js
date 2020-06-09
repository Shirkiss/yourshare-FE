import React, {Component} from 'react';
import {
    BrowserRouter as Router, Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import SecuredRoute from "./components/unused_components/SecuredRoute";
import Cognito from "./components/cognito";
import Register from "./components/unused_components/register";
import Login from "./components/unused_components/login";
import Footer from "./components/footer";
import Header from "./components/header";
import './App.css';

import {Auth} from 'aws-amplify';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: this.isLoggedIn()};
        this.handleUserStateChange = this.handleUserStateChange.bind(this);
    }

    isLoggedIn = () => {
        return this.props.authState === 'signedIn';
    };

    handleUserStateChange() {
        this.setState({isLoggedIn: this.isLoggedIn()});
    }

    render() {
        return (
                <Router>
                    <div className="App">
                        <Header onUserStateChange={this.handleUserStateChange} isLoggedIn={this.state.isLoggedIn}/>
                        <div id="page-body">
                            <Switch>
                                <Route path="/" component={HomePage} exact/>
                                <Route path="/cognito" component={Cognito} exact/>
                                <Route path="/about" component={AboutPage}/>
                                <SecuredRoute path="/articles-list" component={ArticlesListPage}/>
                                <SecuredRoute path="/article/:name" component={ArticlePage}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/login" component={(props) => <Login {...props}
                                                                                  onUserStateChange={this.handleUserStateChange}/>}/>
                                {this.state.isLoggedIn && <Footer/>}
                                <Route component={NotFoundPage}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
        );
    }
}

export default App;
