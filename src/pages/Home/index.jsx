import  logements  from '../../data/logements.json'
import Card from '../../components/Card'
function Home() {
    return (
        <main>
            <div className="banner">
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
            <div className="cardList">
                {logements.map((logement) => (
                    <Card 
                        key={logement.id}
                        cover={logement.cover}
                        title={logement.title}
                        id={logement.id
                        }
                    />
                ))}
            </div>
        </main>
    )
}
export default Home