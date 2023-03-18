function Card({cover, title}) {
    return (
        <div className="cardContent">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}
export default Card