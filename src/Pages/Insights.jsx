import React, { useEffect, useState } from 'react'
import News_card from '../Components/News_card.jsx'
const News = () => {
  const [news,setNews] = useState([]);

  useEffect(()=> {
    News ();
  },[]);

  const News = async () => {
    const api = await fetch (`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=c1140c97f3534fdfbd27fb36967a86a9`);

    const data = await api.json();
    setNews(data.articles);
  }

  return (
    <>
    <h1 style ={{textAlign: "center", padding: "40px", fontWeight:"bolder"}}> News</h1>
    <div className="container-sm-3 mx-5">
        <div className="row ">
            {
                news.map((val,index)=>{
                    return(
                        <News_card image = {val.urlToImage} title = {val.title} description ={val.description} link = {val.url} key ={index}/>
                    );
                })
            }
            </div>
        </div>
    </>
  )
}

export default News;