
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  

  return (
    <div className='app'>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/> 
    </Routes>
    <Footer/> 
    </div>
  )
}

export default App;
