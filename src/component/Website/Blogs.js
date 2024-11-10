import React from 'react'
import { Blog } from "./Data";
const Blogs = () => {
    return (
        <>
            <section className="blogs" id="blogs">
                <h1 className="heading">OUR
                    <span>BLOGS</span>
                </h1>
                <div className='box-container'>
                    {Blog.map((itme, index) => (
                      <div className="box" key={index}>
                        <div className='image'>
                            <img src={itme.img} alt='' />
                         </div>
                            <div className="content">
                              <a href='#' className='title'>
                                tasty and refreshing spices
                                </a>
                                <span>
                                    by Admin / 21st may, 2024</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. non, dicta
                                </p>
                                <a href='#' className='btn'>read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blogs;