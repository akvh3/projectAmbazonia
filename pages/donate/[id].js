import Head from 'next/head'
import Link from 'next/link'
import React, { Component, useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import {storage, firestore} from '../../services/firebase/config.js';
// import GooglePayButton from '@google-pay/button-react';

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

  // const paymentRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: 'CARD',
  //       parameters: {
  //         allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
  //         allowedCardNetworks: ['MASTERCARD', 'VISA'],
  //       },
  //       tokenizationSpecification: {
  //         type: 'PAYMENT_GATEWAY',
  //         parameters: {
  //           gateway: 'example',
  //           gatewayMerchantId: 'exampleGatewayMerchantId',
  //         },
  //       },
  //     },
  //   ],
  //   merchantInfo: {
  //     merchantId: 'BCR2DN6TZOMZ57AL',
  //     merchantName: 'Orphan Connect',
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: 'FINAL',
  //     totalPriceLabel: 'Total',
  //     totalPrice: '3',
  //     currencyCode: 'USD',
  //     countryCode: 'US',
  //   },
  // };

  function handleLoadPaymentData(paymentData) {
  	console.log('load payment data', paymentData);
  }

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
  }, [paidFor]);

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
              {orphanInfo? <p>{orphanInfo.Name} is {orphanInfo.Age} years old</p>: <p>Dummy Info</p>}
              {orphanInfo? <p>The victim has received ${orphanInfo.donation_total} in donations.</p>: <p>Dummy Info</p>}
            </div>
        </div>
    </div>
  </div>

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
                {/* <center><GooglePayButton
                  environment="TEST"
                  paymentRequest={paymentRequest}
                  onLoadPaymentData={handleLoadPaymentData}
                /></center>
                <br></br><br></br>
                <Link href="http://cash.app/$andrewvh1"><button type="button" class="i-center center button-class">Pay with Cashapp</button></Link>
                <br></br><br></br> */}
            </div>
        </div>
    </div>
    </>
  );
}