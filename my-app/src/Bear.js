import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

var axios = require('axios')


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

  const getBears = async (id) => {

    const result = await axios.get(`http://localhost/api/bears/${id}`)

    console.log(result.data)
    setName(result.data.name)
    setWeight(result.data.weight)


  }

  const addBears = async () => {

    const result = await axios.post(`http://localhost/api/bears`, {
      name,
      weight
    })

    console.log(result.data)
    getBear()
  }


  const deleteBears = async (id) => {

    const result = await axios.delete(`http://localhost/api/bears/${id}`)       
    getBear()


  }
  const updatesBears = async (id) => {

    const result = await axios.put(`http://localhost/api/bears/${id}`, {
      name,
      weight
    })

    console.log(result.data)
    setName(result.data.name)
    setWeight(result.data.weight)
    getBear()

  }

  const printBears = async () => {

    if (bears && bears.length)

      return bears.map((bear, index) => {

        return (

          <li key={index}>
            {bear.name} : {bear.weight} <br />
            <button onClick={() => getBears(bear.id)}> Get </button> <br />
            <button onClick={() => deleteBears(bear.id)}> Del </button><br />
             <button onClick={() => updatesBears(bear.id)}>Update</button> <br />
          </li>
        )
      })
      else {

        return (<h2> No bear </h2>)


      }

  }


  // ส่วน render ขึ้น
  return (

    <div>
    Bear
    <ul>
         {printBears()}
    </ul>
    <h2>Get Bear</h2>
    Get: {name} : {weight}

    <h2>Add Bear</h2>
    Name: 
    <input 
        placeholder="name"
        type="text"
        name="name"
        onChange={ (e)=> setName(e.target.value) }
        /> <br/>
    Weight:
    <input                 
        type="number"
        name="weight"
        onChange={ (e)=> setWeight(e.target.value) }
        /><br/>
    <button onClick={addBears}>Add </button>
</div>

  );
}

export default Bear;
