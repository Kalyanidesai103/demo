import './App.css';
import About from './component/Website/About';
import Contact from './component/Website/Contact';
import Products from './component/Website/Products';
import Review from './component/Website/Review';
import Home from './component/Website/Home';
import Navbar from './component/Website/Navbar';
import Menu from  './component/Website/Menu';
import Blogs from './component/Website/Blogs';
import Footer from './component/Website/Footer';

function App() {
    return (
        <>
       <Navbar/>
       <Home/>
       <About/>
       <Menu/>
       <Products/>
       <Review/>
       <Contact/>
       <Blogs/>
       <Footer/>
        </>
        
    )
}
export default App;
