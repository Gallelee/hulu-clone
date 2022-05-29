import React, { useEffect, useState } from "react"
import axios from 'axios'
import './Row.css'

function Row(props){

    const [media,setMedia] = useState([])
    console.table(props.fetchMedia.data)

    useEffect(()=>{
        async function fetchMedia(){
            const fetchedData = await axios.get(props.fetchMedia)
            console.log(fetchedData.data.results)
            setMedia(fetchedData.data.results) 
        }
        fetchMedia()
    },[props.fetchMedia])
  

    return(
        <div className="row">
            <h2>{props.name}</h2>
            <div className="media-row">
                {media.map((data)=>{
                    return (
                        <img
                        key={data.id} 
                        className="row-image"
                        src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt={data.title}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Row