import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react'
import {storage, firestore} from './firebase/config.js';
import {attributes} from './donate';

class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orphansList : [],
      images : [],
    };
  }

  //When the page loads, bring up the orphan data from firebase.
  componentDidMount() {
    firestore.collection('orphans')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {id:doc.id, ...doc.data() }
        });
        this.setState({ orphansList: data })
      });
  }


  render() {
    const { orphansList } = this.state;
    console.log(orphansList)
  return (
    <>
    <Head><title>Orphan Connect - Contribute</title></Head>
    <div id="page" class="site">
    
        <h2 align="center" class="i-center">Contribute</h2>
            <Link href="/donate"><button type="button" class="center button-class">General Donation</button></Link>
            <br></br>
        <div class="container">
            <div class="card-group vgr-cards">
                {orphansList.map(orphan => (
                  <div class="card">
                    <div class="card-img-body">
                      <img class="card-img" src={orphan.image} alt="Card image cap"></img>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">{orphan.Name}</h4>
                      <p class="card-text">{orphan.Name} is {orphan.Age} years old and has received ${orphan.donation_total} in donations. </p>
                      <Link href="/donate/[id]" as={"/donate/" + orphan.id}><button type="button" class="button-class i-left">Donate</button></Link>
                      <div class="dropdown">
                        <button>Adoption Plan</button>
                        <div class="dropdown-content">
                          <Link href="/adopt/a01/[id]" as={"/adopt/a01/" + orphan.id}><a id="a01">$1</a></Link>
                          <Link href="/adopt/a02/[id]" as={"/adopt/a02/" + orphan.id}><a id="a02">$2</a></Link>
                          <Link href="/adopt/a05/[id]" as={"/adopt/a05/" + orphan.id}><a id="a05">$5</a></Link>
                          <Link href="/adopt/a10/[id]" as={"/adopt/a10/" + orphan.id}><a id="a10">$10</a></Link>
                          <Link href="/adopt/a25/[id]" as={"/adopt/a25/" + orphan.id}><a id="a25">$25</a></Link>
                          <Link href="/adopt/a50/[id]" as={"/adopt/a50/" + orphan.id}><a id="a50">$50</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </div>
    </>
    )
  }
}
export default Contribute;
