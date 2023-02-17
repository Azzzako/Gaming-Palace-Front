import React from "react";
import ContactStyles from './ContactStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import randomColor from 'randomcolor';


export default function Contact() {

  const [borderColor, setBorderColor] = useState('red');
  
  

  const updateBorderColor1 = () => {
    const newColor = randomColor();
    setBorderColor(newColor);
  };

  useEffect(() => {
    const intervalId = setInterval(updateBorderColor1, 700);
    return () => clearInterval(intervalId);
  }, []);

    return (
        
<div className={ContactStyles.cardcontainer}>
  <div className={ContactStyles.card} style={{ border: `8px solid ${borderColor}`, padding: '10px' }}>
    <img src="https://via.placeholder.com/150" alt="Card Image"/>
    <h3>Card 1</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className={ContactStyles.cardi}>
    <button><FontAwesomeIcon icon={faLinkedin}/></button>
    <button><FontAwesomeIcon icon={faGithub}/></button>
    </div>
  </div>
  
  <div className={ContactStyles.card} style={{ border: `8px solid ${borderColor}`, padding: '10px' }}>
    <img src="https://via.placeholder.com/150" alt="Card Image"/>
    <h3>Card 2</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className={ContactStyles.cardi}>
    <button><FontAwesomeIcon icon={faLinkedin}/></button>
    <button><FontAwesomeIcon icon={faGithub}/></button>
    </div>
  </div>
  
  <div className={ContactStyles.card} style={{ border: `8px solid ${borderColor}`, padding: '10px' }}>
    <img src="https://via.placeholder.com/150" alt="Card Image"/>
    <h3>Card 3</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className={ContactStyles.cardi}>
    <button><FontAwesomeIcon icon={faLinkedin}/></button>
    <button><FontAwesomeIcon icon={faGithub}/></button>
    </div>
  </div>
  
  <div className={ContactStyles.card} style={{ border: `8px solid ${borderColor}`, padding: '10px' }}>
    <img src="https://via.placeholder.com/150" alt="Card Image"/>
    <h3>Card 4</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className={ContactStyles.cardi}>
    <button><FontAwesomeIcon icon={faLinkedin}/></button>
    <button><FontAwesomeIcon icon={faGithub}/></button>
    </div>
  </div>
  
  <div className={ContactStyles.card} style={{ border: `8px solid ${borderColor}`, padding: '10px' }}>
    <img src="https://via.placeholder.com/150" alt="Card Image"/>
    <h3>Card 5</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className={ContactStyles.cardi}>
    <button><FontAwesomeIcon icon={faLinkedin}/></button>
    <button><FontAwesomeIcon icon={faGithub}/></button>
    </div>
  </div>
  
  <div className={ContactStyles.card} style={{ border: `8px solid ${borderColor}`, padding: '10px' }}>
    <img src="https://via.placeholder.com/150" alt="Card Image"/>
    <h3>Card 6</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className={ContactStyles.cardi}>
    <button><FontAwesomeIcon icon={faLinkedin}/></button>
    <button><FontAwesomeIcon icon={faGithub}/></button>
    </div>
  </div>
</div>

        
    );
};
