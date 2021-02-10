import React, {useState, useEffect} from 'react'
import Content from './Content'
import Arrows from './Arrows'
import Dots from './Dots'


const slides = [
    {
        id: 1,
        description: '1st slide',
        url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg'
    },
    {
        id: 2,
        description: '2nd slide',
        url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg'
    },
    {
        id: 3,
        description: '3rd slide',
        url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(132).jpg'
    },
    {
        id: 4,
        description: '4th slide',
        url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg'
    },

]

const length = slides.length - 1

const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === length? 0 : activeIndex + 1)
      }, 5000)
      return () => {
        clearInterval(interval)
      }
    },[activeIndex])

    return (
        <div className='slide-container'>
            <Content activeIndex={activeIndex} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)} />
            <Dots
                activeIndex={activeIndex}
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Carousel
