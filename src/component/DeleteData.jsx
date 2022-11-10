import React, { useState } from 'react'

const DeleteData = () => {
  const [data,currentData]=useState(false)
//   async await
  async function delPost()
    { 
let responce=await fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
  })
 let data=await responce.json()
currentData({...data})
  }
    console.log(data)
  return (
<>

<div className="full " style={{minHeight:"100vh"}}>
{
  (data)?<div className=" col m1 line brd " style={{background: "wheat"}}>
  <div className="full p1 line "><h3 >DELETED Id:&nbsp;{data.id}</h3></div>
  <div className="full p1 line " style={{background: "white"}}><p className='fclr'>Title: &nbsp;{data.title}</p></div>
   </div>:<div className="full row flexJCC p3"><button className="btn p1" onClick={delPost}>CLICK TO DELETE DATA ID :1</button></div>
}
</div>
   
   
</>
  )
}

export default DeleteData