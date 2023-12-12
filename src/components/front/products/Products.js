import React from 'react'
import './Products.css'
import { FaFire} from 'react-icons/fa';
import { IoAddCircle } from "react-icons/io5";
import Bottom from '../Btm/Bottom';


const Products = ({cardData, handleAddPro}) => {
   const firstRow = cardData.slice(0,4)
    const secondRow = cardData.slice(4); 
  return (
    <>
    
    <div className='tophome'>
            <p className='para'>WELCOME, <br></br>
                <br></br>

                ALL YOU NEED IS HERE</p>
            <img className='homeimg' src='./images/phto ecom.webp' alt="" />
        </div>
        <div className='newre'>
        <p><FaFire/>  NEW ARIVALS </p>
        <hr></hr>
        </div>

    <div className='container'>
        {firstRow.map((items)=>(
             
              <div className='card' >
                <div className='img1'>
                    <img src={items.img} alt={items.title} />
                </div>
                <div className='title'>
                <h1> {items.title} </h1>
                <span> {items.prix}MAD </span>
                </div>
                <div className='addtocart'>
            <button onClick={ ()=> handleAddPro(items)}>ADD TO CART</button>
                </div> 
                </div>
             
                ))}
    </div>

    <div className='pr'>
            <p>INFORMATION ABOUT US</p>
        </div>
        <div className='con'>
            <div className='inf'>
                <div className='divimg'><img className='imgsec' src='./images/krosa.jpeg' alt=''/> </div>
                <span>Free shipping</span>
                <p>We offer free shipping to all Moroccan cities</p>
            </div>

             <div className='inftow'>
                <div className='divimgtow'><img className='imgsec' src='./images/money.jpeg' alt=''/> </div>
            
            <span>cach on delivry</span>
            <p className='p'>Payment is made only when you arrive at your request and verify its quality</p>
            </div>

            <div className='infthree'>
            <div className='divimgthree'> <img className='imgsec' src='./images/phone.jpeg' alt=''/></div>
            <span>Customer Service</span>
            <p>We have a support team 24 hours a day, 7 days a week ready to answer your questions</p>
            </div>
        </div>

        <div className='newre'>
        <p><IoAddCircle />  BEST SELLER </p>
        <hr></hr>
        </div>
        
        <div className='container'>
        {secondRow.map((card)=>(
            
              <div className='card'>
                <div className='img1'>
                    <img src={card.img} alt={card.title} />
                </div>
                <div className='title'>
                <h1> {card.title} </h1>
                <span> {card.prix}MAD </span>
                </div>
                <div className='addtocart'>
                    <button onClick={ ()=> handleAddPro(card)}>ADD TO CART</button>
                </div> 
                </div>
                ))}
    </div>
    <Bottom/> 
    </>
  )
}

export default Products;