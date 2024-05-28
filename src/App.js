import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/Productdetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import './App.css'
import About from './components/About';
import Help from './components/Help';
import Cancel from './components/cancel';
import Success from './components/sucess';
function App(){
  return<>
  <Router>
<div>
  <Header/>

<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />

<Route path='/product' element={<Product/>} />
<Route path='/products/:id' element={<ProductDetail/>} />
<Route path='/cart' element={<Cart/>} />
<Route path='/checkout' element={<Checkout/>} />

<Route path='/help' element={<Help/>} />
<Route path='/success' element={<Success/>} />

<Route path='/cancel' element={<Cancel/>} />





</Routes>
<Footer/>
</div>

  </Router>
  
  </>
}
export default App;
