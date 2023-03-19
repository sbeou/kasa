import Collapse from "../../components/Collapse"

function About(){
    return(
        <main>
            <div className="banner about"><h2>&nbsp;</h2></div>
            <section className="collapseAbout">
                <Collapse
                    title={'Fiabilité'}
                    text={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
                />
                <Collapse
                    title={'Respect'}
                    text={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
                />
            </section>
        </main>
    )
}
export default About