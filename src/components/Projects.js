import React from 'react';
import {Tabs,Tab} from 'react-mdl';

class Projects extends React.Component {
    constructor(props) {
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
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                    <Tab>HTML & CSS</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>DreamWeaver</Tab>

                </Tabs>

                </div>
        );
    }
}

export default Projects;