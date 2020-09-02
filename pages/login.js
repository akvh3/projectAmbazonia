import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react';

class Login extends Component {
  render() {
  return (
    <>
    <Head><title>Orphan Connect - Login</title></Head>
    <div id="page" class="site">
    <h2 align="center">Login Form</h2>

    <form action="/action_page.php" method="post">

    <div class="container">   
    <br></br>
        <h4>Credentials:</h4>
        <label for="uname"><b>Username</b></label>
        <input type="text" align="center" class="i-center" placeholder="Enter Username" name="uname" required />
        <br></br>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <br></br>
        <Link href="/index"><button type="submit">Login</button></Link>
        <label>
            <input type="checkbox" name="remember" /> Remember me
        </label>
    </div>

  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw"><a href="register.html"> New user?</a></span>
  </div>

  </form>
  </div>
    </>
    )
  }
}
export default Login;
