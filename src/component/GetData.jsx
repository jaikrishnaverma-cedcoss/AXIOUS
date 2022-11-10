import React, { useEffect, useState } from 'react'
import axios from "axios";
    
const GetData = () => {
    const [data,setData]=useState([])
 useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(data =>setData([...data.data]))
    .catch(error => console.log(error));
 },[])
 console.log(data)
    return (
 <>
{
    data.map(x=> <div className=" col m1 line brd " style={{background: "wheat"}}>
    <div className="full p1 line "><h3 >{x.title}</h3></div>
    <div className="full p1 line " style={{background: "white"}}><p className='fclr'>BODY: {x.body}</p></div>
     </div>)
}
 </>
  )
}

export default GetData