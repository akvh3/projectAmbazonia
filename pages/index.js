import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react';

class Home extends Component {
  render() {
  return (
    <>
    <Head><title>Orphan Connect - Home</title></Head>
    <div class="jumbotron feature">
		<div class="container">
            <h1 class="center">Orphan Connect</h1>
            <br></br>
            <img src="/azflag.png" class="center"></img>
		</div>
	</div>

    <div class="container">

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Summary of the Cause</h1>
                <p>Ambazonia, officially the Federal Republic of Ambazonia and commonly referred to as Amba Land, is a self-declared state, internationally considered to be an autonomous region of Cameroon, which regards itself as the successor state to former British Mandate territory of Southern Cameroons.[2] Ambazonia is situated at the western periphery of Cameroon, where it borders Nigeria in a northern angle, the Bight of Bonny to the southwest, and the remainder of Cameroon (per international recognition) to the east. Its claimed territory and population constitutes an area of 42,710 km square kilometres (16,490 square miles) populated by roughly three and a half million people.</p>
            </div>
        </div>

        <div class="row">
            <br></br>
            <Link href="/about"><button type="button" class="center button-class">About Page</button></Link>
            <br></br>
            <br></br>
            <button type="button" onclick="location.href='contribute.html'" class="center button-class">Contribute Page</button>
            <br></br>
            <br></br>
        </div>
    </div>
    </>
    )
  }
}
export default Home;
