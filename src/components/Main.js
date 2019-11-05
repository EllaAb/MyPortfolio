import React from 'react';
//import About from './About';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import {Switch,Route} from 'react-router-dom';

const Main = () => {
    return (
    <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route  path="/Resume" component={Resume} />
        <Route  path="/Projects" component={Projects} />
        <Route  path="/Contact" component={Contact} />


        

    </Switch>
    );
}
export default Main; 