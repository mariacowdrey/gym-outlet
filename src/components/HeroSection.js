import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
           <h1>TRAIN IN STYLE</h1>
           <p>Shop the collection</p>
           <div className='hero-btns'>
               <Button 
               className='btns'
               buttonsStyle='btn--outline'
               buttonSize='btn--large'
               >
                Men   
               </Button>
               <Button 
               className='btns'
               buttonsStyle='btn--outline'
               buttonSize='btn--large'
               >
                Women  
               </Button>
           </div>
        </div>
    );
}

export default HeroSection;
