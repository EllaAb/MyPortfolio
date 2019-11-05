import React from 'react';
import { Icon } from "semantic-ui-react";
import "../styles/Resume.css";

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "ellaabraham@gmail.com",
          phone: 6309234445,
          location: "Aurora, IL"
        };
      }
    
    render () {

        return  (

           <div className="container">
               
                   <p><h4>PROFESSIONAL SUMMARY</h4>        
        <ul className="ui list">                                                                  
            <li>Creative and efficient design professional with over three years of experience,Team player to bring successful projects from concept to completion to market on time.</li>
            <li>Understanding of current web based technologies and coding practices (HTML5, CSS, and JavaScript).</li>
            <li>Knowledge of web design tools including Dreamweaver, Adobe Photoshop.</li>
            <li>Good Knowledge in Computer Aided Design program (CAD).</li>
            <li>Strong attention to detail and the ability to produce accurate work.</li>
            <li>Ability to install various accessories such as office tools, scanner, copy machine and other updates etc.</li>
            
         </ul>
             </p>
    <p><h4>EDUCATION</h4>
          <ul className="ui list">  
             <li>B.Sc. in Computer Science						 2003</li>
             <li>Baghdad University, Department of Computer Science, Baghdad, Iraq</li>
          </ul>
             </p>


     <h4>CERTIFICATIONS</h4>
     <ul className="ui list">  

              <li>Internet and computing core certification  IC3			2012</li>
              <li>Web technician certification at college of DuPage		2015</li>

     </ul>
           <br/>

           <h4>EXPERIENCE</h4>
        <h4>Web Designer/Web technician <br/>
        JSC Global Solutions	June 2014 – December 2015</h4>					
     <ul className="ui list">  
        <li>	Met and corresponded with client needs for company sites.</li>
        <li>Developed and maintained intranet and internet for company Websites utilizing Dream weaver, HTML, Photoshop. </li>
        <li>	Created corporate web sites, portals and large scale web applications.</li>
        <li>Developed and designed new web interfaces, layouts and site graphics.</li>
        <li>Created and designed test web sites for sales as well as demonstration purposes.</li>
        
        <li>Responsible for quality assurance of finished websites including the validation of web forms and links.</li>
        <li>Designed trained users and templates on development of future pages.</li>
     </ul>

       <h4> Computer Technician  2003 – 2013 </h4>				              		                           
           <h4>Al-Mustansyria University / civil engineering / computer lab  </h4>

       <ul className="ui list">  
           <li>Supported the IT computer maintenance department.</li>

           <li>Worked as communicator between the students in the main lab.</li>
           <li>Working on Computer Aided Design program (CAD).</li>
       </ul>


<div>
        <h3>
          
          <Icon className="small home icon" name="address card outline" />  {this.state.email} <br />
          <Icon className="small home icon" name="phone" /> {this.state.phone} <br />
          <Icon className="small home icon" name="location arrow" /> {this.state.location}
        </h3>
      </div>
        <br/>
        </div>
         
       
       );
   }
}

export default Resume;