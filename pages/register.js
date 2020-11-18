import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react';
import {authMethods} from './firebase/authMethods.js'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : "",
      password : "",
      showSignupMessage: false
    }
  }

  handleSignup = (e) => {
    e.preventDefault()
    authMethods.signup(this.state.email , this.state.password)
    this.setState({showSignupMessage: true})
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
    <Head><title>Orphan Connect - New User</title></Head>
    <div align="center "id="page" class="site">
      <h2 align="center">New User Signup Form</h2>
      <br></br>
      {this.state.showSignupMessage? (
        <div>
          <h4>Your account was created successfully.</h4>
          <br></br>
          <Link href="/login"><span class="psw"><a>Go back to log in</a></span></Link>
        </div>
      ) : (
        <h4>please create your account</h4>
      )}
      

      <form onSubmit={this.handleSignup}>
        <div class="container">
          {/* <label for="fname"><b>Full Name</b></label>
          <input type="text" placeholder="Enter Full Name" name="name" required />
          <br></br>
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required /> */}
          <br></br>
          <label for="email"><b>Email</b></label>
          <input onChange={this.handleEmailChange} type="text" placeholder="Enter Email" name="email" required />
          <br></br>
          <label for="psw"><b>Password</b></label>
          <input onChange={this.handlePasswordChange} type="password" placeholder="Enter Password" name="psw" required />
          <br></br>
          {/* <label for="confirmpsw"><b>Confirm Password</b></label>
          <input type="password" placeholder="Confirm Password" name="psw" required /> */}
          <br></br>
          <button>Sign up</button>
          {/* <Link href="/login"><button type="submit">Register</button></Link> */}
        </div>

        <Link href="/login"><span class="psw"><a>Existing user?</a></span></Link>
      </form>
    </div>
    </>
    )
  }
}
export default Register;
