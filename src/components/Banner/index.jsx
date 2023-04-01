function Banner({image, titlePage}) {
    return (
        <div className="banner">
            <h2>{titlePage}</h2>
            <img src={image} alt={titlePage} />
        </div>
    )
}
export default Banner