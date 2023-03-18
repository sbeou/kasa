import { useParams } from "react-router-dom"
import  logements  from '../../data/logements.json'

function FicheLogement(){
    const { id: queryId } = useParams()
    const logement = logements[queryId]
    return(<h1>{logement.title}</h1>)
}
export default FicheLogement