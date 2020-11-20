import Head from 'next/head'
import Link from 'next/link'
import React, { Component, useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import {storage, firestore} from '../../services/firebase/config.js';

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

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.paypal.com/sdk/js?client-id=Afx8pMfcnRcIbf-s0Zgu1K5Bzx7IX2I8g2h5BxXLB7UJm9Eb81VZuCK_gCDN2oao3gfUp8kPmqtKWiJM"
  //   script.addEventListener("load", () => setLoaded(true))
  //   document.body.appendChild(script)

  //   if (loaded) {
  //     setTimeout(() => {
  //       window.paypal
  //         .Buttons({
  //           createOrder: (data, actions) => {
  //             return actions.order.create({
  //               purchase_units: [
  //                 {
  //                   description: "Donating",
  //                   amount: {
  //                     currency_code: "USD",
  //                     value: donationAmount
  //                   }
  //                 }
  //               ]
  //             })
  //           },
  //           onApprove: async (data, actions) => {
  //             const order = await actions.order.capture();
              
  //             setPaidFor(true);
  //             setLoaded(false);
  //             firestore.collection('orphans')
  //             .doc(orphanId)
  //             .update({
  //               "donation_total": parseFloat(orphanInfo.donation_total) + parseFloat(donationAmount)
  //             })
  //             console.log(order)
  //           },
  //           onError: err => {
  //             setError(err)
  //             console.log(err)
  //           }
  //         })
  //         .render(paypalRef)
  //     })
  //   }
  // }, [loaded])


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
    <h2 class="center" align="center">Adopt (Subscription) Page</h2>
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
                <br></br>
                <h2 class="page-header" align="center">Enter Payment Information</h2>
                <form align='center' action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick"></input>
                  <input type="hidden" name="hosted_button_id" value="MTPSL5ZDJH4KG"></input>
                  <h4>Monthly Donation for 12 Months</h4><br></br>
                  <table align='center'>
                    <tr><td><input type="hidden" name="on0" value="Monthly Donation for 12 Months"></input></td></tr><tr><td><select name="os0">
                      <option value="Donate">Donate : $1.00 USD - monthly</option>
                      <option value="Donate">Donate : $5.00 USD - monthly</option>
                      <option value="Donate">Donate : $10.00 USD - monthly</option>
                      <option value="Donate">Donate : $25.00 USD - monthly</option>
                    </select> </td></tr>
                  </table>
                  <br></br>
                  <input type="hidden" name="currency_code" value="USD"></input>
                  <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
                  <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
                </form>
                <img height="259" width="259" class="center" src="/paypal.png"></img>
            </div>
        </div>

    </div>
    </>
  );
}