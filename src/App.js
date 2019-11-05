import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color"  scroll>
            <Navigation>
            <Link  to="/">About Me</Link>
                <Link to="/resume">Resume</Link>
             
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Ella Abraham</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
             
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" >
            <Main/>
            < Footer />
           
            </div>
        </Content>
    </Layout>
   
</div>


    );
  }
}

export default App;