import React from 'react'
import { review } from './Data';
import quoteimg from "./Images/quoteimg.jpg";

const Review = () => {
  return (
    <>
      <section className='review'>
        <h1 className='heading'>CUSTOMERS <span>REVIWE</span>
        </h1>
        <div className='box-container'>
          {review.map((item, index) => (
            <div className="box" key={index} >
              <img src={quoteimg} alt='' className='qoute' />
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Voluptatibus qui ea ullam, enim tempora
                ipsum fuga alias quae ratione a officiis id temporibus autem?
                nihil voluptas culpa! Neque consectetur obcaecati sapiente?
              </p>
              <img src={item.img} alt='' className="user" />
              <h3>jone deo</h3>
              <div className='stars'>
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star-half-alt' />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
};

export default Review; 
