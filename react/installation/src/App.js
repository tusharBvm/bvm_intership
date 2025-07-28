import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import Home from './Components/Home';
import {Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Blog from './Pages/Blog';
import NotFound from './Pages/NotFound';
import Variable from './Pages/Variable';

function App() {
  return (
      <>
      
      <Demo fname="tushar" lname="raval" email="tushar123@gmail.com"/> 
      <Home/> 

        <Routes>
            {/* //neasted routes example  */}
            {/* <Route path="/dashboard" element={<About />}/> */}

            <Route path="/" element={<About />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            
            <Route path="/product" element={<Product 
               img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
               name="Cyxus"
              desc="Non-Slip Fitness Leisure Running Sneakers"
              price="$29"
            />}/>

            <Route path="/variable" element={<Variable/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>

        


          

      </>
  );
}

export default App;
