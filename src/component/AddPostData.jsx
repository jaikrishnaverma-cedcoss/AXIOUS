import React, { useState } from 'react'

const AddPostData = () => {
  const [data,currentData]=useState(false)
  // async await mode
  async function addPost()
    {
       let responce= await fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",

  })
})
let fetched=await responce.json()
currentData({...fetched})

    }
    console.log(data)
  return (
<>

<div className="full " style={{minHeight:"100vh"}}>
{
  (data)?<div className=" col m1 line brd " style={{background: "wheat"}}>
  <div className="full p1 line "><h3 >Id:&nbsp;{data.id}</h3></div>
  <div className="full p1 line " style={{background: "white"}}><p className='fclr'>Title: &nbsp;{data.title}</p></div>
   </div>:<div className="full row flexJCC p3"><button className="btn p1" onClick={addPost}>CLICK TO ADD DATA</button></div>

}
</div>
   
   
</>
  )
}

export default AddPostData