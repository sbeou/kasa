import React, { useState } from "react"
import ArrowLeft from "../../assets/arrow_left.svg"
import ArrowRight from "../../assets/arrow_right.svg"


function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current +1)
    }
    function prevSlide() {
        setCurrent(current === 0 ? length -1 : current -1)
    }
    if (slides.length <= 0) {
        return null
    }
    return (
        <div className="slider">
            {length > 1 && (
                <div className="navigation">
                    <img src={ArrowLeft} className='left-arrow' onClick={prevSlide} alt='Prev'/>
                    <img src={ArrowRight} className='right-arrow' onClick={nextSlide} alt='Next'/>
                </div>
            )}
            {slides.map((slide, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slide} alt='Logement' className="image" />)}
                </div>
            ))}
            {length > 1 && (
                <div className="position">{current +1}/{length}</div>
            )}
        </div>
    )
}
export default ImageSlider