import React from 'react'
import { about } from './Data';
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading"><span>ABOUT</span> US</h1>

        <div className="row"><div className="image">
          <img src="https://img.freepik.com/premium-photo/dish-food-with-black-background_14117-18912.jpg" alt="" />
        </div>
          <div className="content">
            <h3>what makes our food special?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione
              a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
            <a href="#" className="btn">learn more</a>
          </div>
        </div>
      </section>

    </>
  );
}
export default About;
