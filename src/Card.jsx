import React from 'react'
import './Card-css.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export const Card = (props) =>(
      
      <div className="card" data-aos="fade-up">
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monsters"></img>
         <h2 >{props.monster.name}</h2>
         <h4 >{props.monster.email}</h4>
      </div>
)