import React from 'react'
import { useState , useEffect } from "react";
import millify from "millify";

import './stats.css'

function Stats() {

    const [total,setTotal]=useState('000')
    const [coins,setCoins]=useState('000')
    const [markets,setMarkets]=useState('000')
    const [exc,setExc]=useState('000')
    const [cap,setCap]=useState('000')
    const [vol,setVol]=useState('000')
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
          setTotal((result.data.stats.total))
          setCoins((result.data.stats.totalCoins))
          setMarkets((result.data.stats.totalMarkets))
          setExc((result.data.stats.totalExchanges))
          setCap((result.data.stats.totalMarketCap))
          setVol((result.data.stats.total24hVolume))
          setListe((result.data.coins.slice(0,10)))
          
         

        } catch (error) {
          console.error(error);
        }
      }
      useEffect(()=>{
        callOne()
      },[])

     
  return (
    <>
        <div className='stats'>
            <h2>Global Crypto Data </h2>
            <div className='list'>
                <div className='first'>
                    <div className='total'>
                        <p className='desc'>Total Crypto Currencies</p>
                        <p className='inf'>{total}</p>
                    </div>
                    <div className='total'>
                        <p className='desc' >Total Market Cap</p>
                        <p className='inf'>{millify(cap)}$</p>
                    </div>
                    <div className='total'>
                        <p className='desc'>Total Cryptocurrencies</p>
                        <p className='inf' >{millify(coins)}</p>
                    </div>
                </div>
                <div className='last'>
                    <div className='total'>
                        <p className='desc'>Total Exchanges</p>
                        <p className='inf'>{millify(exc)}</p>
                    </div>
                    <div className='total'>
                        <p className='desc'> Total Markets</p>
                        <p className='inf'>{millify(markets)}</p>
                    </div>
                    <div className='total'>
                        <p className='desc'>24h Volume</p>
                        <p className='inf'>{millify(vol)}$</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='top10'>
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
    </>
    
  )
}

export default Stats