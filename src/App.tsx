import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import cart from '../src/icons/cart.png'
import './App.css';
import plus from '../src/icons/plus.png'
import minus from '../src/icons/minus.png'
import bin from '../src/icons/bin.png'
import refresh from '../src/icons/refresh.png'
import recycle from '../src/icons/recycle.png'
function App() {
  const [totalItems,setTotalItems]=useState(0);
  const [item1count,setItem1]=useState(0);
  const [item2count,setItem2]=useState(0);
  const [item3count,setItem3]=useState(0);
  const [item4count,setItem4]=useState(0);
  const [removeAllflag,setremoveAllFlag]=useState<boolean>(true)
  const [flag1,setFlag1]=useState<boolean>(true);
  const [flag2,setFlag2]=useState<boolean>(true);
  const [flag3,setFlag3]=useState<boolean>(true);
  const [flag4,setFlag4]=useState<boolean>(true);

  const removeProduct=(num:any)=>{
    if(num===1){
      setFlag1(false);
      setItem1(0);
    }
    if(num===2){
      setItem2(0);
      setFlag2(false);
    }
    if(num===3){
      setItem3(0);
      setFlag3(false);
    }
    if(num===4){
      setItem4(0);
      setFlag4(false);
    }
  }
  
  const removeAll=()=>{
    setremoveAllFlag(false);
    setItem1(0);
    setItem2(0);
    setItem3(0);
    setItem4(0);
  }
  const plusItem=(num:any)=>{
    if(num===1){
      setItem1(item1count+1);
    }
    if(num===2){
      setItem2(item2count+1);
    }
    if(num===3){
      setItem3(item3count+1);
    }
    if(num===4){
      setItem4(item4count+1);
    }

    
  }
  const minusItem=(num:any)=>{
    if(num===1  && item1count>=1){
       
      setItem1(item1count-1);
    }
    if(num===2 && item2count>=1){
      setItem2(item2count-1);
    }
    if(num===3 && item3count>=1){
      setItem3(item3count-1);
    }
    if(num===4 && item4count>=1){
      setItem4(item4count-1);
    }

    
  }
  const refreshAll=()=>{
    setItem1(0);
    setItem2(0);
    setItem3(0);
    setItem4(0);

  }
  useEffect(()=>{
    setTotalItems(item1count+item2count+item3count+item4count)
  },[item1count,item2count,item3count,item4count,flag1,flag2,flag3,flag4])

  return (
    <div className="App">
      <div className='cart-main' >
        <img className='cart-items'  src={cart} alt="React Image" />
        <p className='cart-items' >{totalItems}</p>
        <h4 className='cart-items' >  Items</h4>

      </div>
      <div className='refresh-recycle-main' >
        <img className='refresh' onClick={()=>refreshAll()}   src={refresh} alt="" />
        <img src={recycle} onClick={removeAll} alt="" />
      </div>
      <div>
        {removeAllflag && <div className='product-main' >
            {flag1 && 
                 <div className='product' >
                 <p className='product-item' >{item1count>0? item1count:"ZERO"}</p>
                 <img className='product-item' onClick={()=>plusItem(1)}  src={plus} alt="" />
                 <img className='product-item' onClick={()=>minusItem(1)}  src={minus} alt="" />
                 <img className='product-item' onClick={()=>removeProduct(1)} src={bin} alt="" />
               </div>
            }        
         
          {flag2 && 
           <div className='product' >
           <p className='product-item' >{item2count>0? item2count:"ZERO"}</p>
           <img className='product-item' src={plus} onClick={()=>plusItem(2)} alt="" />
           <img className='product-item' src={minus} onClick={()=>minusItem(2)} alt="" />
           <img className='product-item' onClick={()=>removeProduct(2)} src={bin} alt="" />
         </div>
          }
         

          {flag3 && 
          <div className='product' >
          <p className='product-item' >{item3count>0? item3count:"ZERO"}</p>
          <img className='product-item' onClick={()=>plusItem(3)}  src={plus} alt="" />
          <img className='product-item' onClick={()=>minusItem(3)} src={minus} alt="" />
          <img className='product-item' onClick={()=>removeProduct(3)} src={bin} alt="" />
        </div>
          }
          
          {flag4 &&
           <div className='product' >
            <p className='product-item' >{item4count>0 ?item4count : "ZERO"}</p>
            <img className='product-item' onClick={()=>plusItem(4)}  src={plus} alt="" />
            <img className='product-item' onClick={()=>minusItem(4)} src={minus} alt="" />
            <img className='product-item' onClick={()=>removeProduct(4)} src={bin} alt="" />
          </div> }
          
      </div>}
      </div>
      
    </div>
  );
}

export default App;
