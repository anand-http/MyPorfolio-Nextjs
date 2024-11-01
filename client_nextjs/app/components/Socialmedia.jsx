import React from 'react';
import { BsTwitter} from 'react-icons/bs';
import { FaLinkedinIn,FaGithub} from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className='app__social'>
      <div className='app__socialmedia'>

       <a href="https://x.com/Anandxhttp" 
       target="_blank" rel="noreferrer"><BsTwitter/></a> 

      </div>

      <div className='app__socialmedia'>

       <a href="https://github.com/anand-http" 
       target="_blank" rel="noreferrer"><FaGithub/></a> 

      </div>

      <div className='app__socialmedia'>

       <a href="https://www.linkedin.com/in/anand-pratap-singh-483b46334/" 
       target="_blank" rel="noreferrer"><FaLinkedinIn/></a> 

      </div>

      {/* <div className='app__socialmedia'>
      <a href="https://www.instagram.com/anand_http/" 
       target="_blank" rel="noreferrer"><BsInstagram /></a> 
        
      </div> */}
     
    </div>
  )
}

export default Socialmedia;