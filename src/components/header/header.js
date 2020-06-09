import React, {Component} from "react";
import swal from "sweetalert";
import {withRouter, Link} from "react-router-dom";
import './header.css';
import {AmplifySignOut} from "@aws-amplify/ui-react";


class Header extends Component {

    Logout = () => {
        swal("Are your sure SignOut?", {
            buttons: {
                nope: {
                    text: "Let me back",
                    value: "nope"
                },
                sure: {
                    text: "I'm, Sure",
                    value: "sure"
                }
            }
        }).then(value => {
            switch (value) {
                case "sure":
                    swal(" SignOut Successfully", "success").then(val => {
                        localStorage.removeItem("TOKEN_KEY");
                        this.props.onStateChange("signedOut", {});
                        return this.props.history.push("/login");
                    });
                    break;
                case "nope":
                    swal("Ok", "success");
                    break;
                default:
                    swal("Got away safely!");
            }
        });
    };

    render() {
        return (
            <nav>
                <div className="nav">
                    {/* Left navbar links */}
                    <div className="nav-list">
                        <div className="nav-item">
                            <Link className="nav-a" to="/">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-a" to="/about">About</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-a" to="/articles-list">Articles</Link>
                        </div>
                        <div className="nav-item">
                            <AmplifySignOut/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);
