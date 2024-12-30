import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './style.css'



export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getIndex) {
        console.log(getIndex)
        setRating(getIndex)
    }
    
    function handleMouseHover(getIndex){
        setHover(getIndex)
    }
    
    function handleMouseLeave(){
        setHover(rating);
    }
    return (
    <div>
    
            {[...Array(noOfStars)].map((_, index) => {

                index += 1
                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating )? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseHover(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                );
            })}
        
</div>
    

    )
}