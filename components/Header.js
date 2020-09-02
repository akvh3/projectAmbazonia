import React, { Component } from 'react';
import Link from 'next/link'
import styles from './header.module.css'
// import '../pages/css/custom.css'
// import '../pages/css/bootstrap.css'
// import '../pages/css/bootstrap.min.css'

class Header extends Component {
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
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login <span class="caret"></span></a>
						<ul class="dropdown-menu" aria-labelledby="about-us">
							<li><Link href="/login"><a>Login</a></Link></li>
							<li><a href="register.html">Register</a></li>
						</ul>
					</li>
                </ul>
            </div>

        </div>
    </nav>
        )
    }
}

export default Header;