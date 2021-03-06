import React, { Component } from 'react'
import SkillBar from 'react-skillbars';

const SKILLS = [
{"type": "Python","level": 90},
{"type": "SQL","level": 90},
{"type": "JavaScript","level": 70},
{"type": "React","level": 40},
{"type": "NodeJs","level": 60}
]

// https://crisboarna.github.io/react-skillbars/#elementAllBar
var colors = {}

export default class Skillbars extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skillbars" data-section="skillbars">
         <div className="colorlib-narrow-content">
           <div className="row">
             <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">What I can do</span>
              <h2 className="colorlib-heading animate-box">Skills</h2>
           </div>
         </div>
         <article className="skillbars-entry animate-box" data-animate-effect="bounceInLeft">
          <section className="skillbars" data-section="skillbars">
           <SkillBar skills={SKILLS} colors={colors} height={30}/>
          </section>
         </article>
         </div>
        </section>
      </div>
  )
}
}
