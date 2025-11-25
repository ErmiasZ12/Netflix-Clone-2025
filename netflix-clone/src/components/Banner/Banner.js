import React, {useState, useEffect} from 'react'
import axios from "../../utils/axios"
import requests from "../../utils/requests"


const Banner = () => {
    const {movie,setMovie,}=useState({})
  return (
    useEffect(()=>{
        (async()=>{
            try{
                const request = await axios.get(requests.fetchNetflixOriginals)
                setMovie(request.data.results[
                    Math.floor(Math.random()*request.data.results.lenght)
                ])
            } catch (error){
                console.log("error",error);
            }
        })
    })
    <div>

<div className='banner'
style={{
    backgroundSize: "cover",
    bacgroundImages: `url('https://image.tmdb.org.t/p/original${movie?.backdrop_path}')`,
    backgroundPostion: "center",
    backgroundRepeat: "no-repeat"
}}
>
     <div className='banner_content'>
        <h1 className='banner_title'>
            {movie?.title||movie?.name||movie?.original_name}
            </h1>

      <div className='banner__buttons'>
        <buttons className="banner__button play"> play</buttons>
         <buttons className="banner__button"> My List</buttons>
      </div>
      {/* <h1 className='"banner__description'> {truncate(movie?.overview,150)}</h1> */}
     </div>
     <div className='banner__fadeBottom' />
    </div>
  )
}

export default Banner