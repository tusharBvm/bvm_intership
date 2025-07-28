import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>

        {/* neastwed Routes Example 
         */}
        {/* <li>
          <Link to="/dashboard">About</Link>
        </li> */}
        
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="product">Product</Link>
        </li>
      </ul>
    </>
  );
}

export default About;
