import React, { useState } from 'react'
import Category from './Category'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const[finalCategory, setFinalCategory] = useState([])
  const[finalProducts, setFinalProducts] =useState([])
  const[catName, setCatName] = useState('')

  //for category
  let getCategory =() =>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalCategory(finalRes);
    })
  }
   //for products
   let getProducts = () =>{
    axios.get('https://dummyjson.com/products')
    .then((proRes) =>proRes.data)
    .then((finalRes) =>{
      setFinalProducts(finalRes.products);
    })
   }


  useEffect(() =>{
    getCategory()
    getProducts()
  },[])

  useEffect(()=>{
    if(catName!== ''){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes) =>proRes.data)
      .then((finalRes) =>{
        setFinalProducts(finalRes.products)
      })
    }
  },[catName])

  let pItem = finalProducts.map(( products,index)=>{
    return(
      <ProductItems key={index} pData = {products}/>
    )
  })
  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto '>
          <h1 className=' text-center font-bold text-[40px] mb-[40px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div className='' >
              <Category  finalCategory ={finalCategory}
              setCatName ={setCatName}
              />
            </div>

            <div>
              <div className=' grid grid-cols-3 gap-5'>
               {pItem }
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

function ProductItems({pData}){
  return(
    <div className=' shadow-lg text-center pb-4'>
    <img src={pData.thumbnail} className='w-[100%] h-[220px]'/>
    <h4>{pData.title}</h4>
    <b>{pData.price}</b>
  </div>
  )
}


//https://dummyjson.com/products
//https://dummyjson.com/products/categories
//https://dummyjson.com/products/category/smartphones