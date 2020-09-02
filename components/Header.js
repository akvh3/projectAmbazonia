import React, { Component } from 'react';
import Link from 'next/link'

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
                        <a href="contribute.html">Contribute</a>
                    </li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login <span class="caret"></span></a>
						<ul class="dropdown-menu" aria-labelledby="about-us">
							<li><a href="login.html">Login</a></li>
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