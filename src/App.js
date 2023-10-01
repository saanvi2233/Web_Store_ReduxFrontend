
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Cart from './pages/Cart.js'
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App min-h-screen bg-cover "  style={{ backgroundImage: `url('./images/shop.jpg')` }}>
     <Provider store={store}>
     <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
