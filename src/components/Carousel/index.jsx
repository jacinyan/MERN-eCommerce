import React from 'react'
import Arrows from './Arrows'
import Content from './Content'
import Dots from './Dots'


const slides = [
    {
        id: 1,
        description: '1st slide',
        url: '../../../../public/images/slider/1.jpg'
    },
    {
        id: 2,
        description: '2nd slide',
        url: '../../../../public/images/slider/2.jpg'
    },
    {
        id: 3,
        description: '3rd slide',
        url: '../../../../public/images/slider/3.jpg'
    },
    {
        id: 4,
        description: '4th slide',
        url: '../../../../public/images/slider/4.jpg'
    },

]

const length = slides.length - 1

const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='slide-container'>
            <Content activeIndex={activeIndex} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === 0 ? 0 : activeIndex + 1)} />
            <Dots 
            activeIndex={activeIndex } 
            onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Carousel
