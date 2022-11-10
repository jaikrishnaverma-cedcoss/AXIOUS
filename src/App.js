import './App.css';
import GetData from './component/GetData';
import { useState } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import AddPostData from './component/AddPostData';
import DeleteData from './component/DeleteData';

function App() {
  const [nav,navActive]=useState()
  const btnActive=(e)=>{
    for(let i=0;i<e.target.parentElement.children.length;i++)
    {
      e.target.parentElement.children[i].classList.remove("active")
    }
    e.target.classList.add("active")
      console.log()
  }
  return (
    <div className="full lbg">

<div className="row flexAIC  full  dbg">
<Link to='/' onClick={btnActive} className='p1 m1  vm0 active'> DATA</Link>
 <Link to='/Post' onClick={btnActive} className='p1 m1  vm0'> POST ADD</Link>
 <Link to='/Delete' onClick={btnActive} className='p1 m1  vm0'> DELETE</Link>
  </div>
  <Routes>
    <Route path='/' index element={<GetData/>}/>
    <Route path='/Post' element={<AddPostData/>}/>
    <Route path='/Delete' element={<DeleteData/>}/>
  </Routes>
   
    </div>
  );
}

export default App;
