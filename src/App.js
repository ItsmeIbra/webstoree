import React,{useState} from 'react'

import data from './components/data/Data';
 import Header from './components/front/Header';
import Category from './components/front/category/Category';
import Contact from './components/front/contact/Contact';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Routess from './components/front/routes/Routess'

const App = () => {
  const { cardData } = data;
  
  const [cartItems, setCartItems] = useState([]);

  const handleAddPro = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

const handelRemPro = (product)=>{
  const productExist = cartItems.find((item) => item.id === product.id);
if (productExist.quantity === 1){
  setCartItems(cartItems.filter((item)=> item.id !== product.id));

}else {
  setCartItems(
    cartItems.map((item) =>
    item.id === product.id ?{...productExist, quantity: productExist.quantity - 1}: item
  )
  )
}
}
  return (
    <BrowserRouter>
      <>
      <Header/>
      <Routess cardData={cardData}  cartItems={cartItems} handleAddPro={handleAddPro} handelRemPro={handelRemPro} />
        <Routes>
          <Route path='/Category' element={<Category />} />
          <Route path='/Contact' element={<Contact />} /> 
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;