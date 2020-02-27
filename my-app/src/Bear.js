import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'




const Bear = () => {

  const [bears, setBears] = useState({});
  const [name, setName] = useState('')
  const [weight, setWeight] = useState(0);


  const getBear = async () => {

    const result = await axios.get('http://localhost:8000/api/bears')
    console.log(result);
    setBears(result.data)


  }

  //useEffect เอาไว้เรียกใช้เมื่อ aysnc await render เรียบร้อยแล้ว

  useEffect(() => {

    getBear();
    console.log('UseEffect is running');

  })

  const getBears = async () => {

    const result = await axios.get('http://localhost:8000/api/bears', {

       name,
       weight

    })

    setName(result.data.name)
    setWeight(result.data.weight)
    getBear();


  }

  const addtBears = () => {




  }
  const deleteBears = () => {




  }
  const updatesBears = () => {




  }

  const printBears = (id) => {

    if (bears && bears.length)

      return bears.map((bear, index) => {

        return (

          <li key={index}>
             {bear.name} : {bear.weight}
          <button onClick={() => getBear(bear.id)}> Get </button>
          </li>
        )
      })

  }


  // ส่วน render ขึ้น
  return (

    <div>

    </div>

  );
}

export default Bear;
