import Head from 'next/head'
import Link from 'next/link'
import React, { Component, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import {storage, firestore} from '.././firebase/config.js';

export default () => {
  const router = useRouter();
  const [orphanInfo, setOrphanInfo] = useState()
  const orphanId = router.query.id

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
            <ul align="center" class="i-center">
                <li>{orphanInfo? <p>The Victim is {orphanInfo.Age} years old</p>: <p>Dummy Info</p>}</li>
                <li><p>This is filler text, it will have victim info.</p></li>
                <li><p>This is filler text, it will have victim info.</p></li>
            </ul>
        </div>
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
  );
}
