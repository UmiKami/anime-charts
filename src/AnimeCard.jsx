import './styles/CSS/AnimeCard.css'

const AniCard = ({cover, title, description}) => {

    return <>
        <div className="anime-card">
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
                    {/* <p className="anime-card__info-genre">Action</p>
                    <p className="anime-card__info-genre">Fantasy</p>
                    <p className="anime-card__info-genre">Adventure</p> */}
                </div>
            </div>
        </div>
    </>
}

export default AniCard