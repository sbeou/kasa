import { Link } from "react-router-dom"

function Card({cover, title, id}) {
    return (
        <article>
            <Link to={`/logement/${id}`}>
                <div className="cardContent">
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                </div>
            </Link>
        </article>
    )
}
export default Card