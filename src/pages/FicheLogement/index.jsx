import { useNavigate, useParams } from "react-router-dom"
import ImageSlider from "../../components/ImageSlider"
import  logements  from '../../data/logements.json'
import React, { useEffect } from "react"
import Collapse from "../../components/Collapse"
import RatingStar from "../../components/RatingStar"


function FicheLogement(){
    const { id } = useParams()
    const navigate = useNavigate()
    const logement = logements.find(item => item.id === id)
    
    useEffect(() => {
        if(logement === undefined) {
           navigate("/error")
        } 
    }, [logement, navigate])
    if(logement) {
        const picturesData = logement.pictures
        const starNumber = parseInt(logement.rating)
        
         return (
            <main>
                <ImageSlider slides={picturesData} />
                <section className="headerLogement">
                    <div className="left">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <ul className="tag">
                        {logement.tags.map((tag, index) => (
                            <li key={`tag-${index}`}>{tag}</li>
                        ))}
                    </ul>
                    </div>
                    <div className='right'>
                        <div className="host">
                            {logement.host.name}
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </div>
                        <RatingStar 
                        number={starNumber} />
                    </div>
                </section>
                <section className="logementDetails">
                    <Collapse 
                        title={"Description"}
                        text={logement.description}
                    />
                    <Collapse 
                        title={'Équipements'}
                        text={<ul>{logement.equipments.map((text, index) => (
                            <li key={`equipement-${index}`}>{text}</li>
                        ))}</ul>}
                    />
                </section>
            </main>
        )
    }
    else {
        return false
    }
}
export default FicheLogement