import  logements  from '../../data/logements.json'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <main>
            <div className="banner">
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
            <div className="cardList">
                {logements.map((logement,index) => (
                    <article key={logement.id}>
                        <Link to={`/logement/${index}`}>
                            <Card 
                                cover={logement.cover}
                                title={logement.title}
                            />
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    )
}
export default Home