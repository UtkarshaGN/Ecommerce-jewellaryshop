import React from 'react'

function Category({finalCategory,setCatName}) {
  let cat = finalCategory.map((v,i) =>{
    return(
      <li key={i}  onClick={() => setCatName(v)}className=' bg-gray-400 cursor-pointer text-[20px]  font-bold p-2 mb-2'>
        {v}
      </li>
    )
  }) 

  return (
    <div>
      <h3 className=' text-[25px] font-[500] p-2 '> Product Category</h3>
      <ul>
      {cat}
      </ul>
    
    </div>
  )
}

export default Category
