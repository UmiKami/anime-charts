import { useEffect, useState } from "react";
import AniCard from "./AnimeCard";
import './styles/CSS/AnimeCard.css'

const AniInfo = () => {
    let count = 0
    const [animeList, setAnimeList] = useState([])

    useEffect(
        ()=>{
            fetch("https://api.aniapi.com/v1/anime", {
                method: 'GET',
                "headers": {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyNjEiLCJuYmYiOjE2NTE1MjUyMTEsImV4cCI6MTY1NDExNzIxMSwiaWF0IjoxNjUxNTI1MjExfQ.KoS_WEaxm6cUoS5o5HYZ0Dj89n1ayDwg8lbsxtXhf6c"
                }
            }).then(response=>{
                return response.json();
            }).then(result=>{
                setAnimeList(result.data.documents)
            }).catch(err=>{
                console.error(err);
            })
        }, []
    )

    return animeList.map( anime => {
        return <div className="card-row">
            <AniCard cover={anime.cover_image} title={anime.titles.en} description={anime.descriptions.en}/>
        </div> 
    })
}

export default AniInfo