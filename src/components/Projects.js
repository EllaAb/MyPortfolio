import React from 'react';
//import {Tabs,Tab} from 'react-mdl';
import projects from  "../Img/code3.png";
import "../styles/Projects.css";


class Projects extends React.Component {
    
    render() {
        return  (

     <div className="Prj">
               
        <header className="Prj-header">
              
              <h4> You can take a close look to my projects...<br/> just click to the code below. </h4> 
               
              <a href="https://github.com/EllaAb?tab=repositories" >
               <img  src={projects} alt="projects"  className="Prj-logo" />
              </a>
           
        </header>
     </div>

        );
       
    };
}

export default Projects;




/* constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

      if(this.state.activeTab === 0) {
          return (
       <div>  <h1>This Is html</h1></div> 
          )
      } else if(this.state.activeTab ===1) {
          return (
              <div><h1>This is Javascript</h1></div>
          )
      }else if (this.state.activeTab === 2) {
          return (
              <div><h1>this is dreamweaver</h1> </div>
          )
      }
  } 


  return (
    <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
            <Tab>HTML & CSS</Tab>
            <Tab>Javascript</Tab>
            <Tab>DreamWeaver</Tab>

        </Tabs>

        </div>
);  */

