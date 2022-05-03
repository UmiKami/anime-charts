import './styles/CSS/AnimeCard.css'

const AniCard = ({cover, title, description, genre, color}) => {

    return <>
        <div className="anime-card" id="anime-card" style={{background: color, "--color-p": color}}>
            <div className="anime-card__cover">
                <img src={cover} alt={title + " image cover"} />
            </div>
            <div className="anime-card__info">
                <div className="anime-card__info-top">
                    <p className="anime-card__title">{title}</p>
                    <p className="anime-card__description">
                        {description ? description.replace(/<[^>]+>/g, '') : ''}
                    </p>
                </div>
                <div className="anime-card__info-bottom">
                    {/* Iterative */}
                    {genre.map(gen=>{
                        return <div className="anime-card__info-genre">{gen}</div>
                    })}
                </div>
            </div>
        </div>
    </>
}

export default AniCard