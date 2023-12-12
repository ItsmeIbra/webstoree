import React from 'react'
import Bottom from '../Btm/Bottom';
import './Category.css'

function Category(){
    return(
        <>
<div className='first'>
    <h1>ALL COLlICTIONS</h1>
    <p>you will find everthing you want</p>
</div>


<div className='containerr'>
             
            <div className='card2'>
                <img src='./images/tshirts.jpeg' alt=''   />
                <div className='btnn'><button> CLICK HERE</button></div>
            
            </div>
            <div className='card2'>
                <img src='./images/hoodies.jpeg' alt=''   />
                <div className='btnn'><button> CLICK HERE</button></div>
            </div>
            <div className='card2'>
                
                <img src='./images/sneakers.jpeg' alt=''   />
                <div className='btnn'><button> CLICK HERE</button></div>
            </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
 <Bottom/> 


</>

    )
}

export default Category;