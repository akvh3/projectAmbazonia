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
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ orphansList: data })
      });
      // .then(console.log(this.state['orphansList']));
    // storage.ref().child().getDownloadURL().then(function(url) {
    //   console.log(url)
    // });
  }

  //I dont know if this works.
  getImage (image) {
    storage.ref().child('images/' + '${image}.jpg').getDownloadURL().then((url) => {
      this.setState({images: url})
    })
  }

  render() {
    const { orphansList } = this.state;
  return (
    <>
    <Head><title>Orphan Connect - Contribute</title></Head>
    <div id="page" class="site">
    
        <h2 align="center" class="i-center">Contribute</h2>
            <Link href="/donate"><button type="button" class="center button-class">General Donation</button></Link>
            <br></br>
        <div class="container">
            <div class="card-group vgr-cards">
                <div class="card">
                      <div class="card-img-body">
                        <img class="card-img" src="/placeholde.jpg" alt="Card image cap"></img>
                      </div>
                  <div class="card-body">
                    <h4 class="card-title">Hi</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget nibh vulputate, porta purus sit amet, sollicitudin magna. Nam quis fringilla lorem. Nulla cursus lectus eget ipsum semper ultricies. Etiam iaculis pulvinar rhoncus. Nullam nulla leo, fringilla mollis ante at, viverra posuere diam. Mauris lobortis lorem at ipsum pellentesque, sed pulvinar diam tempor. In efficitur tincidunt leo, non tincidunt orci vestibulum sagittis. Donec eleifend posuere imperdiet. Praesent maximus vel erat vel sodales. Duis ut sem congue, sodales dui at, commodo mi. Cras gravida sed ex ut egestas.</p>
                    <Link href="/donate"><button type="button" class="button-class i-left">Donate</button></Link>
                    <Link href="/donate"><button type="button" class="button-class i-left">Adoption Plan</button></Link>
                  </div>
                </div>
                {orphansList.map(orphan => (
                  <div class="card">
                    <div class="card-img-body">
                      <img class="card-img" src={orphan.image} alt="Card image cap"></img>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">{orphan.Name}</h4>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget nibh vulputate, porta purus sit amet, sollicitudin magna. Nam quis fringilla lorem. Nulla cursus lectus eget ipsum semper ultricies. Etiam iaculis pulvinar rhoncus. Nullam nulla leo, fringilla mollis ante at, viverra posuere diam. Mauris lobortis lorem at ipsum pellentesque, sed pulvinar diam tempor. In efficitur tincidunt leo, non tincidunt orci vestibulum sagittis. Donec eleifend posuere imperdiet. Praesent maximus vel erat vel sodales. Duis ut sem congue, sodales dui at, commodo mi. Cras gravida sed ex ut egestas.</p>
                      <Link href={{ pathname: '/donate', query: { name: JSON.stringify(orphan.Name), age: JSON.stringify(orphan.Age), image: JSON.stringify(orphan.image) } }}><button type="button" onClick={() => this.attributes(orphan.Name,orphan.Age,orphan.image)} class="button-class i-left">Donate</button></Link>
                      <Link href="/donate"><button type="button" class="button-class i-left">Adoption Plan</button></Link>
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
