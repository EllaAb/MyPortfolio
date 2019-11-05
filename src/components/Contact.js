import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,  faGithub ,faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


const iconStyle = {marginLeft: 15, marginRight: 15, color: "#f37335"};

class Contact extends React.Component {
    
    state= {
        name: "",
        email:"",
        message:""
    };

    

     onInputChange= (e) => {
    
        //console.log(this.state);
        this.setState ({
            [e.target.name]: e.target.value
        });
    };


    handleSubmit =(e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            name: "",
            email:"",
            message:""
        });
    };
 

    
    render() {
        return (
          
            <div className="aboutContainer">
                  <div className="helloContainer">
                      <h4>Hello ! <br/>
                          If you'd like to chat about somthing or if you have any questions! Feel free to reach me out, just fill out the form. </h4>
                          <h4>You can send me E.mail at :< br/>
                          <a className="emailColor" href="mailto:ella.abraham200@gmail.com">
                          ella.abraham200@gmail.com
                          </a>
                         </h4>
                         <h4>For more information or to follow my work, you can also find me on <br/><br/>
                         <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/ella-abraham-3b5274169/" style={iconStyle}><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a>
                         <a target='_blank' rel='noopener noreferrer' href='https://github.com/EllaAb' style={iconStyle}><FontAwesomeIcon icon={faGithub} size='lg'/></a>
                         <a target='_blank' rel='noopener noreferrer' href='https://instagram.com' style={iconStyle}><FontAwesomeIcon icon={faInstagram} size='lg'/></a>
                         <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/ula.qasim' style={iconStyle}><FontAwesomeIcon icon={faFacebook} size='lg'/></a>
         
                     

                

                         </h4>
                 </div>
           
          
          
          <div className="formContainer">
            <h4>Contact Me Now</h4>
            <form className="ui form">

            
              <span>
                {this.state.name ? 'Please fill your name' : ''}
              </span>
              <div className="field">
             
                <input
                  value={this.state.name}
                  onChange={e => this.onInputChange(e)}
                  placeholder="Name"
                  name="name"
                  
                />
              </div>


            
              <span>
                {this.state.email ? 'Please fill your email' : ''}
              </span>
              <div className="field">
            
                <input
                  value={this.state.email}
                  onChange={e => this.onInputChange(e)}
                  placeholder="Email"
                  name="email"
                  
                />
                 </div>


             
              <span>
                {this.state.message ? 'Please fill your message' : ''}
              </span>
              <div className="field">
                <textarea
                  value={this.state.message}
                  onChange={e => this.onInputChange(e)}
                  placeholder="Message"
                  name="message"
                  
                ></textarea>
              </div>


              
              <button onClick={e => this.handleSubmit(e)}>Submit</button>


            </form>
          </div>

          </div>
          

          
        
      
    );
  }
}


export default Contact;