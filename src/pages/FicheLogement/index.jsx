import { useParams } from "react-router-dom"
import ImageSlider from "../../components/ImageSlider"
import  logements  from '../../data/logements.json'
import Star from "../../assets/star.svg"
import StarGrey from "../../assets/star_grey.svg"
import React from "react"
import Collapse from "../../components/Collapse"


function FicheLogement(){
    const { id: queryId } = useParams()
    const logement = logements[queryId]
    const picturesData = logement.pictures
    const starNumber = parseInt(logement.rating)
    function ratingStar(number) {
        let stars = ""
        for (let index = 0; index < 5; index++) {
            if(index < number) {
                stars += `<li><img src=${Star} alt="star" /></li>`  
            }
            else {
                stars += `<li><img src=${StarGrey} alt="star" /></li>`
            }
        }
        return (stars)
    }
    return(
        <main>
            <ImageSlider slides={picturesData} />
            <section className="headerLogement">
                <div className="left">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <ul className="tag">
                    {logement.tags.map((tag) => (
                        <li>{tag}</li>
                    ))}
                </ul>
                </div>
                <div className='right'>
                    <div className="host">
                        {logement.host.name}
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <ul dangerouslySetInnerHTML={{ __html: ratingStar(starNumber)}} className='rating'></ul>
                </div>
            </section>
            <section className="logementDetails">
                <Collapse 
                    title={"Description"}
                    text={<p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).</p>}
                />
                 <Collapse 
                    title={'Équipements'}
                    text={<ul><li>Climatisation<li></li>Wi-Fi<li></li>Cuisine<li></li>Espace de travail<li></li>Fer à repasser<li></li>Sèche-cheveux<li></li>Cintres</li></ul>}
                />
            </section>
        </main>
    )
}
export default FicheLogement