import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react';

class Donate extends Component {
  render() {
  return (
    <>
    <Head><title>Orphan Connect - Donate</title></Head>
    <div class="jumbotron feature center">
		<div class="container">
            <h2 class="center" align="center">Donation Page</h2>
            <br></br>
            <img src="/placeholde.jpg" class="i-left"></img>
            <p align="center"> 
                Donation Targets
                <br></br>
                <ul align="center" class="i-center">
                    <li>This is filler text, it will have victim info.</li>
                    <li>This is filler text, it will have victim info.</li>
                    <li>This is filler text, it will have victim info.</li>
                </ul>
            </p>
		</div>
	</div>

    <div class="container center">
        <div class="row">
            <div class="col-lg-12">
                <h3 align="center">Donation Total</h3>
                <input class="center" type="text" id="fname" name="fname"></input><br></br>
                <h2 class="page-header" align="center">Enter Payment Information</h2>
                <img height="259" width="259" class="center" src="/paypal.png"></img>
                <button type="button" class="i-center center button-class">Pay with PayPal</button>
                <br></br>
                <br></br>
                <button type="button" class="i-center center button-class">Submit</button>
                <br></br>
            </div>
        </div>

    </div>
    </>
    )
  }
}
export default Donate;
