import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react'
import {authMethods} from './firebase/authMethods.js'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : "",
      password : "",
      // userSignedIn: false
    }
  }


  handleSignin = (e) => {
    e.preventDefault()
    authMethods.signin(this.state.email , this.state.password)
    // this.setState({userSignedIn: true})
  }

  handleEmailChange = e => {
    this.setState({email: e.target.value})
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value})
  }

  render() {
  return (
    <>
    <Head><title>Orphan Connect - Login</title></Head>
    <div id="page" class="site">
      <h2 align="center">Login Form</h2>

      <div class="container" align="center">
        {/* {this.state.userSignedIn? (
          <div>
            <h4>You have logged in successfully.</h4>
          </div>
        ) : (
          <h4>Please log in using your credentials.</h4>
        )}    */}

        <form onSubmit={this.handleSignin}>
          <div class="container">
            <br></br>
            <label for="email"><b>Email</b></label>
            <input onChange={this.handleEmailChange} type="text" placeholder="Enter Email" name="email" required />
            <br></br>
            <label for="psw"><b>Password</b></label>
            <input onChange={this.handlePasswordChange} type="password" placeholder="Enter Password" name="psw" required />
            <br></br>
            <br></br>
            <button>Sign In</button>
          </div>
        </form>
      </div>

      <div class="container" align="center" >
        <Link href="/register"><span class="psw"><a> New user?</a></span></Link>
      </div>
    </div>
    </>
    )
  }
}
export default Login;
