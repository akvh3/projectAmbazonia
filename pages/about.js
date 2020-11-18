import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react';

class About extends Component {
  render() {
  return (
    <>
    <Head><title>Orphan Connect - About</title></Head>
    <div class="jumbotron feature center">
		<div class="container">
            <h2 class="center">About Orphan Connect</h2>
            <br></br>
            <img src="/azemblem.jpg" class="i-left"></img>
            <img src="/azmap.png" class="i-right"></img>
		</div>
	</div>

    <div class="container center">

        <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">History of Ambazonia</h2>
                <p>Ambazonia, officially the Federal Republic of Ambazonia and commonly referred to as Amba Land, is a self-declared state, internationally considered to be an autonomous region of Cameroon, which regards itself as the successor state to former British Mandate territory of Southern Cameroons. Ambazonia is situated at the western periphery of Cameroon, where it borders Nigeria in a northern angle, the Bight of Bonny to the southwest, and the remainder of Cameroon (per international recognition) to the east. Its claimed territory and population constitutes an area of 42,710 km square kilometres (16,490 square miles) populated by roughly three and a half million people.</p>
                <h2 class="page-header">The Anglophone Crisis</h2>
                <p>In the month of September 2017 separatists in Southern Cameroon declared independence as the state of Ambazonia. By the Summer of 2019, the newly formed government controlled most of the Anglophone territory. The government of Cameroon began raiding Ambazonian controlled towns and villages, killing thousands and displacing more than half a million. With the COVID-19 pandemic, one of the groups called for a ceasefire in order to deal with the virus, but many groups, including the Cameroonian government, continued the fighting.</p>
                <h2 class="page-header">Recent Updates</h2>
                <p>On 4 February 2018, it was announced that Dr. Samuel Ikome Sako would become the Interim President of the Federal Republic of Ambazonia, temporarily succeeding Tabe. His presidency saw the escalation of the war, and its spreading to all of Southern Cameroons. On 31 December 2018, Ikome Sako said that 2019 would see a switch from a defensive to an offensive war, and that the separatists would strive to achieve de facto independence on the ground.
                    <br></br>
                    On 2 May 2019, Sisiku Julius Ayuk Tabe declared the dissolution of Samuel Ikome Sako's caretaker cabinet and the restoration of his own cabinet. This caused a divide in the government which led to the 2019 Ambazonian leadership crisis.
                    <br></br>
                    On 13 May 2019, the United Nations Security Council had an informal meeting to discuss the Anglophone Crisis.
                    <br></br>
                    On 26 August 2019, an appeal was put forth by ten Ambazonian leaders, including Sisiku Julius Ayuk Tabe, to end their sentence after being convicted in a military court. They had been sentenced to life in prison on charges of terrorism, secession, along with a fine of 350 million dollars. Many Ambazonians were dissatisfied with the trial and some considered it a "sham".
                    <br></br>
                    February 7 through 12 of 2020 were declared a lock down in the Northern regions for the 2020 Municipal and Legislative elections. In March 2020 a ceasefire was declared with Cameroon due to concern relating to the Coronavirus.</p>            
                <h2 class="page-header">Information on the Victims</h2>
                <p>There are many victims in this situation, with many children being left parentless due to the continous struggle against the Cameroonian government. The victims that we are primarily concerned with are those children that are left as orphans during the war, as many victims are in refugee camps in Nigeria in serious need of assistance just to get by.</p>
                <h2 class="page-header">How your Donation Helps</h2>
                <p>Your donations will go directly to those running the refugee camps in Nigeria in order to assist in providing food, water, and other necessities to the children, and with either your general donation or your adoption plan you will make a significantly positive impact on the lives of the children there, giving them a hope for a bright future beyond this conflict.</p>
                <h2 class="page-header">External Resources</h2>
                <ul></ul>
                <li>
                    <a href="https://en.wikipedia.org/wiki/Ambazonia">Wikipedia</a>
                </li>
                <li>
                    <a href="https://www.dw.com/en/who-are-cameroons-self-named-ambazonia-secessionists/a-50639426">DW Article</a>
                </li>
                <li>
                    <a href="https://ambagov.org/">Ambazonian Government's Website</a>
                </li>
                <br></br><br></br>
            </div>
        </div>

    </div>
    </>
    )
  }
}
export default About;
