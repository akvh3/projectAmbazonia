import React, { Component } from 'react';
import Link from 'next/link'
import styles from './header.module.css'
import {auth} from '../services/firebase/config.js'
import {authMethods} from '../services/firebase/authMethods.js'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: "",
            userSignedIn: false
        }
    }

    handleSignOut = e => {
        authMethods.signout()
        this.setState({userSignedIn: false})
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({currentUser : user})
                this.setState({userSignedIn: true})
            } else {
                this.setState({userSignedIn: false})
            }
        })
        // var userNow= auth.currentUser;
        // if (userNow) {
        //     this.setState({currentUser: userNow})
        //     console.log("hello world")
        //     console.log(this.state.currentUser)
        // } else {
        //     console.log("nono")
        // }
    }

    render() {
        return (
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav">
                    <li>
                        <Link href="/index"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/contribute"><a>Contribute</a></Link>
                    </li>
                    <li>
                        <Link href="/login"><a>Login</a></Link>
                    </li>
                </ul>
                {this.state.userSignedIn ? (
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a>Logged in {this.state.currentUser.email}</a>
                        </li>
                        <li>
                            <a onClick={this.handleSignOut}>Sign out</a>
                        </li>
                    </ul>
                ) : (
                    <ul class="nav navbar-nav navbar-right">
                        {/* <li>
                            <a>Logged in asasdasm</a>
                        </li> */}
                        {/* <li>
                            <a onClick={this.handleSignOut}>Sign out</a>
                        </li> */}
                    </ul>
                )}
            </div>

        </div>
    </nav>
        )
    }
}

export default Header;