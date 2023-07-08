import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState , useEffect } from "react";

import Stats from './Stats'
import News from './News'

import './home.css'


function Home() {

  const [age, setAge] = useState(20);
  const [bilgi,setBilgi]=useState([]);  
  const [labels,setLabels]=useState([]);
  
  let url = '';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0b406cd23dmsheeb54ea747466e6p1a36a1jsn0732039a16f4',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  

  async function callOne(){
    url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=1y';
    try {
      const response = await fetch(url, options);
      const result = await response.json();
    
      for (let i =0;i<365;i++){
        let salam=((result.data.history[i].price));
        setBilgi(bilgi => [...bilgi, salam]);
       
        let sucuk=((result.data.history[i].timestamp));
        setLabels(labels => [...labels, sucuk]);
        
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  async function callThree(){
    url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=3y';
    try {
      const response = await fetch(url, options);
      const result = await response.json();
    
      for (let i =0;i<1028;i++){
        let salam=((result.data.history[i].price));
        setBilgi(bilgi => [...bilgi, salam]);
       
        let sucuk=((result.data.history[i].timestamp));
        setLabels(labels => [...labels, sucuk]);
        
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  async function callFive(){
    url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=5y';
    try {
      const response = await fetch(url, options);
      const result = await response.json();
    
      for (let i =0;i<1828;i++){
        let salam=((result.data.history[i].price));
        setBilgi(bilgi => [...bilgi, salam]);
       
        let sucuk=((result.data.history[i].timestamp));
        setLabels(labels => [...labels, sucuk]);
        
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  const ayar = {
    scales: {
         x: {
           beginAtZero: true,            
         },
         y: {
           beginAtZero: true,
         }
       }
    };

  

  useEffect(()=>{
    setLabels([])
    setBilgi([])
    console.log('sıfırlandı')
    if(age===10){
      callOne()
    }
    
    if(age===20){
      callThree()
    }
    
    if(age===30){
      callFive()
    }

  },[age])

  const data1 = {
     labels: labels,
     datasets: [
       {
         label: "1 year",
         backgroundColor: "rgb(255, 99, 132)",
         borderColor: "rgb(255, 99, 132)",
         data: bilgi,
       },
     ],
   };

  const data2 = {
      labels: labels,
      datasets: [
        {
          label: "3 year",
          backgroundColor: "rgb(37, 150, 190)",
          borderColor: "rgb(37, 150, 190)",
          data: bilgi,
        },
      ],
  };

  const data3 = {
    labels: labels,
    datasets: [
      {
        label: "5 year",
        backgroundColor: "rgb(1, 1, 1)",
        borderColor: "rgb(25, 19, 12)",
        data: bilgi,
      },
    ],
};


  const handleChange=(event:SelectChangeEvent)=>{
    setAge(event.target.value);
  }


  return (
    <div className='home'>
      <div className='heading'>
        <h1>Welcome To Cryverse</h1>
        <p>Chart for btc-usd price</p>
      </div>

      <div className='chart'>
       
          
        <FormControl  >
          <InputLabel id="demo-simple-select-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}>
              
            <MenuItem value={10}>1y</MenuItem>
            <MenuItem value={20}>3y</MenuItem>
            <MenuItem value={30}>5y</MenuItem>
          </Select>
        </FormControl>
           
        
        <Line  data={age === 10 ? (data1) : age === 20 ? (data2) : (data3)} options={ayar} />
       
       
      </div>
      <Stats></Stats>
      <News></News>
    </div>
  )
}

export default Home