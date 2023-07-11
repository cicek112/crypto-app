import React from 'react'
import './News.css'
import { NavLink } from 'react-router-dom';
import { useState , useEffect } from "react";
import millify from 'millify';



function News() {

    const [news,setNews] = useState([])
    
async function getNews(){
    const url = 'https://bing-news-search1.p.rapidapi.com/news/search?q=crypto&setLang=EN&freshness=Day&textFormat=Raw&safeSearch=Off';
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '0b406cd23dmsheeb54ea747466e6p1a36a1jsn0732039a16f4',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
        
      setNews(result.value.slice(0,6))

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getNews()
  },[])
  return (
    <div className='ana'>
        <div className='üst'>
            <h2>Latest Crypto News</h2>
            <NavLink to='/about' className='show'> Show More</NavLink>
        </div>
        <div className='wrap'>
        {news.map(item => (
                  <a href={item.url} className='haber' key={item.url}>
                    <div >
                        <ul className='ilk'>
                          <p>{item.name}</p>
                          <li><img src={item.image.thumbnail==="undefined"?"":item.image.thumbnail.contentUrl} alt='img'></img></li>
                        </ul>
                        
                        <ul className='desc'>
                          <p>{item.datePublished.slice(0,16).replace('T','  ')}</p>
                          <p>{item.description}</p>
                          
                        </ul>
                    </div>
                  </a>
        ))} 
        </div>
        
    </div>
  )
}

export default News