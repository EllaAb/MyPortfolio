import React from 'react';
import Background from "../Img/bgella.jpg" ;
import '../styles/MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub, faTwitter, faFacebook  } from '@fortawesome/free-brands-svg-icons';


const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '80vh',
    backgroundSize: 'cover'
} 

const iconStyle = {marginLeft: 15, marginRight: 15, color: "#f37335"};
    

class AboutMe extends React.Component {
   
    render() {
        return (
            
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <h2> Ella Abraham </h2>
                <h4>Junior Front End Developer  <br />
                Passionate about coding unique websites,<br /> that clearly communicate with visitors.   </h4>


              <div className='text-center'>

          <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/ella-abraham-3b5274169/" style={iconStyle}><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com' style={iconStyle}><FontAwesomeIcon icon={faTwitter} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/EllaAb' style={iconStyle}><FontAwesomeIcon icon={faGithub} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://instagram.com' style={iconStyle}><FontAwesomeIcon icon={faInstagram} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/ula.qasim' style={iconStyle}><FontAwesomeIcon icon={faFacebook} size='lg'/></a>
         
        </div>        
            </header>    
        );
    }
}

export default AboutMe;
