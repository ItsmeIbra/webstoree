import React from 'react'
import Products from '../products/Products'
import {Routes, Route,} from 'react-router-dom'
import Card from '../card/Card'
const Routess = ( {cardData, cartItems, handleAddPro, handelRemPro } ) => {
  return (
    <div>            
<Routes>

<Route path='/' element={<Products cardData={cardData} handleAddPro={handleAddPro}/>} />
<Route path='/Card' element={<Card cartItems={cartItems} handleAddPro={handleAddPro} handelRemPro={handelRemPro} />} />

</Routes>
    </div>
  )
}

export default Routess;