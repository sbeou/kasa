import  logements  from '../../data/logements.json'
import Card from '../../components/Card'
import bannerBackground from '../../assets/IMG.jpg'
import Banner from '../../components/Banner'
function Home() {
    return (
        <main>
            <Banner
                titlePage='Chez vous, partout et ailleurs'
                image={bannerBackground}
            />
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