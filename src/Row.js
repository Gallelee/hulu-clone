import React, { useEffect, useState } from "react"
import axios from 'axios'

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
                        <h3>{data.title}</h3>
                    )
                })}
            </div>

        </div>
    )
}

export default Row