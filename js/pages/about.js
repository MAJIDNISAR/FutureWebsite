import React from "react";
import IconBlock from "../components/icon-block";

export default class Talks extends React.Component {
  render() {
    return (
      <div className="beautiful">
        <div className="contentBlock">
          <IconBlock />
          <div className="content scroll">
            <div className="about">
              <div className="aboutme">
                <img className="selfie" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/859573/JenLuker.jpg" />
                <div className="job">
                  <h1>Jen Luker</h1>
                  <div>Lead Software Engineer</div>
                  <div>Deseret Digital Media</div>
                </div>
              </div>

              <h2>Bio</h2>
              <blockquote>
                Jen Luker is a Lead software engineer at DDM working on the
                KSL.com Classifieds; a Northern Utah classifieds site that beats
                the national brand on listings and traffic. While she enjoys
                vintage cars, she really loves working on the Cars team. Jen has
                spent a majority of her decade-long career as a full-stack
                developer using PHP, Javascript, and CSS, but has a particular
                fondness for front-end technologies. She is a leader on
                front-end teams, trains others in Reactjs, and build apps in
                React Native. When she's not solving problems or learning new
                technologies, her spare time is spent spinning yarn from raw
                wool and knitting; she's even been known to 3D print her own
                tools for the job. She also enjoyes reading fiction (especially
                sci-fi, mystery, and trashy period romance novels), and is
                fascinated by space. She recently spoke at UtahJS2017, kicking
                off her public speaking career.
              </blockquote>

              <h2>What I say about me</h2>
              <blockquote>
                I have four kids, two cats and a wonderful husband, all of whom
                understand my need to speak in programming jargon while knitting
                something to calm my overclocked mind.
              </blockquote>
              
              <h2>What others say about me</h2>
              
              <blockquote>I'd probably describe Jen as a smart, yet, insightful person. She is thoughtful on her approach to software problems while still considering the people working on them and people using them. Outside of work she's been a great person to get to know and I've enjoyed our chats.</blockquote>
              <div className="cite">
                <a href="https://twitter.com/geekygirlsarah">Sarah Withee</a>
              </div>

              <blockquote>
                When she gave her very first talk she came across as someone who'd done it a hundred times before & it was awesome to see.
              </blockquote>
              <div className="cite">
                <a href="https://twitter.com/SurlyMae">Ashly LaMarr</a>
              </div>
              
              <blockquote>
                Jen Luker: Upending the patriarchy one used Kia at a time.
              </blockquote>
              <div className="cite">
                <a href="https://twitter.com/holtbt">Brian Holt</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
