import React from 'react'
import { useState , useEffect } from "react";
import millify from "millify";
import './Ranking.css'

function Ranking() {

  const [liste,setListe]=useState([]);

  async function callOne(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0b406cd23dmsheeb54ea747466e6p1a36a1jsn0732039a16f4',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setListe((result.data.coins))
      
     

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    callOne()
  },[])


  return (
    <div className='topcoins'>
      <h2>Top 10 Cryptos In The World</h2>

      <div className='wrap'>
          {liste.map(item => (
              <div className='coin' key={item.rank}>
                  <ul className='top'>
                      <li>{item.rank}.{item.name}</li>
                      <li><img src={item.iconUrl} alt='coin-img'></img></li>
                  </ul>
                  <div className='cizgi'></div>
                  <ul className='sosis'>
                      <li>Price : {millify(item.price)}</li>
                      <li>MarketCap : {millify(item.marketCap)}</li>
                      <li>Change : {millify(item.change)}%</li>
                  </ul>
              </div>
          ))}    
      </div>
    </div>
  )
}

export default Ranking