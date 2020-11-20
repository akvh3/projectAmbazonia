import Head from 'next/head'
import Link from 'next/link'
import React, { Component, useState, useEffect, useRef } from 'react';
import {storage, firestore} from '../services/firebase/config.js';
// import GooglePayButton from '@google-pay/button-react';

export default () => {
  
  //Paypal integration
  const [donationAmount, setDonationAmount] = useState(1);
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState();
  const [error, setError] = useState(null);

  let paypalRef = useRef()

  var handleAmountSubmit = (event) => {
    setDonationAmount(event.target.value)
    setLoaded(false)
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=Afx8pMfcnRcIbf-s0Zgu1K5Bzx7IX2I8g2h5BxXLB7UJm9Eb81VZuCK_gCDN2oao3gfUp8kPmqtKWiJM"
    script.addEventListener("load", () => setLoaded(true))
    document.body.appendChild(script)

    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "Donating",
                    amount: {
                      currency_code: "USD",
                      value: donationAmount
                    }
                  }
                ]
              })
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              
              setPaidFor(true);
              setLoaded(false);
              firestore.collection('orphans')
              .doc(orphanId)
              .update({
                "donation_total": parseFloat(orphanInfo.donation_total) + parseFloat(donationAmount)
              })
              console.log(order)
            },
            onError: err => {
              setError(err)
              console.log(err)
            }
          })
          .render(paypalRef)
      })
    }
  }, [loaded])

  return (
    <>
    <Head><title>Orphan Connect - Donate</title></Head>
    <h2 class="center" align="center">Donation Page</h2>
    <br></br>
    <div class="container center">
        <div class="row">
            <h3 align="center">Welcome to the general donation page</h3>
            <h3 align="center">Our Nonprofit Organization will use the donations to help the orphans</h3>
            <h3 align="center">Thank you for your support!</h3>
        </div>
    </div>
    <br></br><br></br>
    <div class="container center">
        <div class="row">
            <div class="col-lg-12">
                <h3 align="center">How much would you like to donate? (USD $)</h3>
                <input class="amount-center" value={donationAmount} type="number" name="donation" onChange={handleAmountSubmit}></input>
                <h4 align="center">Your current donation amount is {donationAmount} US dollars</h4>
                <br></br>
                <h2 class="page-header" align="center">Enter Payment Information</h2>
                {paidFor ? (
                  <div align="center">
                    <h1>Thank you for your donation!</h1>
                    <div align="center" ref={v => (paypalRef = v)} />
                  </div>
                ) : (
                  <div>
                    <div align="center" ref={v => (paypalRef = v)} />
                  </div>
                )}

                <br></br>
                <br></br>
            </div>
        </div>
    </div>
    </>
  );
}

