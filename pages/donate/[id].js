import Head from 'next/head'
import Link from 'next/link'
import React, { Component, useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import {storage, firestore} from '.././firebase/config.js';

export default () => {
  const router = useRouter();
  const [orphanInfo, setOrphanInfo] = useState()
  const orphanId = router.query.id
  
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


  useEffect(() => {
    const orphanId = router.query.id
    if (typeof orphanId != "undefined") {
      firestore.collection('orphans')
        .doc(orphanId)
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("Orphan corresponding to id does not exist")
          } else {
            setOrphanInfo({id: doc.id, ...doc.data()})
          }
      });
    }
  }, []);
  if (orphanInfo) {
    console.log(orphanInfo.image)
  } else{
    console.log(1)
  }


  return (
    <>
    <Head><title>Orphan Connect - Donate</title></Head>
    <h2 class="center" align="center">Donation Page</h2>
    <br></br>
    <div class="jumbotron feature center">
      <div class="container">
        <br></br>
        <div class="card-img-body">
          {orphanInfo? <img src={orphanInfo.image} id="donation-image" alt="Card image cap" class="img-fluid"></img>: <img src="/placeholde.jpg" id="donation-image" alt="Card image cap" class="img-fluid"></img>}
        </div>
        <br></br>
        <div align="center">
          {orphanInfo? <p>{orphanInfo.Name}</p>: <p>Donation Target Name</p>}
          <br></br>
            {/* <ul align="center" class="i-center">
                <li>{orphanInfo? <p>The victim is {orphanInfo.Age} years old</p>: <p>Dummy Info</p>}</li>
                <li>{orphanInfo? <p>The victim has received ${orphanInfo.donation_total} in donations.</p>: <p>Dummy Info</p>}</li>
            </ul> */}
            <div align="center">
              <p>{orphanInfo? <p>{orphanInfo.Name} is {orphanInfo.Age} years old</p>: <p>Dummy Info</p>}</p>
              {orphanInfo? <p>The victim has received ${orphanInfo.donation_total} in donations.</p>: <p>Dummy Info</p>}
            </div>
        </div>
    </div>
  </div>

    <div class="container center">
        <div class="row">
            <div class="col-lg-12">
                <h3 align="center">How much would you like to donate? (USD $)</h3>
                <input class="amount-center" type="number" name="donation" onChange={handleAmountSubmit}></input>
                <h4 align="center">Your current donation amount is {donationAmount} US dollars</h4>
                <br></br>
                <h2 class="page-header" align="center">Enter Payment Information</h2>
                {paidFor ? (
                  <div>
                    <h1>Thank you for your donation!</h1>
                  </div>
                ) : (
                  <div>
                    <div align="center" ref={v => (paypalRef = v)} />
                  </div>
                )}

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
  );
}