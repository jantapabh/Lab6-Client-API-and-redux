import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'




const Bear = () => {

  const [bears , setBears] = useState({});
  
  const getBear = async () => {
   
  const result =  await axios.get('http://localhost:8000/api/bears')
  console.log(result);

  }

  //useEffect เอาไว้เรียกใช้เมื่อ aysnc await render เรียบร้อยแล้ว

useEffect(() => {

  getBear()
  console.log('If call');



})

    return (
    
    <div>
   
   Bear
  {/* <h1> {getBear()} </h1> */}

    </div>
  
  );
}

export default Bear;
