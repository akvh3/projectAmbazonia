import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react'
import {storage, firestore} from '../services/firebase/config.js';
import {attributes} from './donate';



class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orphansList : [],
      search: null,
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
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
    const orphans = orphansList.filter((data) => {
        if(this.state.search == null) {
          return data
        } else if (data.Name.toLowerCase().includes(this.state.search.toLowerCase())) {
          return data
        }
    }).map(orphan => (
      <div class="card">
        <div class="card-img-body">
          <img class="card-img" src={orphan.image} alt="Card image cap"></img>
        </div>  
        <div class="card-body">
          <h4 class="card-title">{orphan.Name}</h4>
          <p class="card-text">{orphan.Name} is {orphan.Age} years old and has received ${orphan.donation_total} in donations. </p>
          <p class="card-text">{orphan.Desc} </p>
          <Link href="/donate/[id]" as={"/donate/" + orphan.id}><button type="button" class="button-class i-left button-margin-right">Donate</button></Link>
          <Link href="/adopt/[id]" as={"/adopt/" + orphan.id}><button type="button" class="button-class">Adopt/Subscribe</button></Link>
          </div>
      </div>
    ))  

  return (
    <>
    <Head><title>Orphan Connect - Contribute</title></Head>
    <div id="page" class="site">
    
        <h2 align="center" class="i-center">Contribute</h2>
        <br></br>
        <Link href="/donate"><button type="button" class="center button-class donation-button">General Donation</button></Link>
        <br></br>
        <br></br>
        <div class="center">
          <input type="text" class="form-control" placeholder="Search for orphans by name..." onChange={(e)=>this.searchSpace(e)} />
        </div>
        <br></br>
        <br></br>
        <div  class="container">
            <div class="card-group vgr-cards">
                {orphans}
            </div>
        </div>
    </div>
    </>
    )
  }
}
export default Contribute;
