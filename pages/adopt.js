import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react';
import { withRouter } from 'next/router';

// function donate({ router: { query } }) {
//     const name = JSON.parse(query.Name);
//     const age = JSON.parse(query.Age);
//     const image = JSON.parse(query.image);
// }
class Donate extends Component {
    constructor(props) {
        super(props);
        // donate();
        // this.state = { name: this.props.location.state.name, age: this.props.location.state.age, image: this.props.location.state.image };
      }
  render() {
  return (
    <>
    <Head><title>Orphan Connect - General Donation</title></Head>

    <div class="container center">
    <h2 class="center" align="center">General Donation Page</h2>
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

export const attributes = (name,age,image)=>{
    const oName = name;
    const oAge = age;
    const oImage = image;
}

export default Donate;

