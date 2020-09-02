import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react';

class Register extends Component {
  render() {
  return (
    <>
    <Head><title>Orphan Connect - New User</title></Head>
    <div id="page" class="site">
    <h2 align="center">New User Form</h2>
    <br></br>

<form>

  <div class="container">
    <h4>Credentials:</h4>
    <label for="fname"><b>Full Name</b></label>
    <input type="text" placeholder="Enter Full Name" name="name" required />
    <br></br>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />
    <br></br>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    <br></br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    <br></br>
    <label for="confirmpsw"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm Password" name="psw" required />
    <br></br>
    <Link href="/login"><button type="submit">Register</button></Link>
  </div>

  <div class="container">
    <button type="button" class="cancelbtn">Cancel</button>
    <Link href="/login"><span class="psw"><a>Existing user?</a></span></Link>
  </div>
</form>
  </div>
    </>
    )
  }
}
export default Register;
