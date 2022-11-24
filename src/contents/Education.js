 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="COMPUTER SCIENCE" where="King Mongkut's University of Technology North Bangkok" from="2020" to="Present" />
                 <Widecard title="STEM EDUCATION PROGRAM" where="SuksanareeWittaya School" from="2017" to="2019" />
                 <Widecard title="SCIENCES AND MATHEMATICS PROGRAM" where="SuksanareeWittaya School" from="2014" to="2016" />
             </div>
         );
     }
 }
 
 export default Education;