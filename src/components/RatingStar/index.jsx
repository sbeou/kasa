import Star from '../../assets/star.svg'
import StarGrey from '../../assets/star_grey.svg'
function RatingStar({number}) {
    let stars = []
    for (let index = 0; index < 5; index++) {
        if(index < number) {
            stars.push(Star)
        }
        else {
            stars.push(StarGrey)
        }
    }
    return (
        <ul className='rating'>
            {stars.map((star, index) => (
                <li key={`star-${index}`}><img src={star} alt='sar' /></li>
            ))}
        </ul>
    )
}
export default RatingStar