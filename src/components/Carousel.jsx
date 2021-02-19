import React, { useState, useEffect } from 'react'
import CarouselContent from 'components/CarouselContent'
import Arrows from 'components/Arrows'
import Dots from 'components/Dots'
import PubSub from "pubsub-js";
import {slides} from 'utils/sliderImages'

const length = slides.length - 1

const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    
    const [searchActive, setSearchActive] = useState(false)

    // const [timers, setTimers] = useState([])

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
        }, 5000)
        // timers.push(timer);
        // setTimers(timers => timers);
        // console.log(timers);
        const token = PubSub.subscribe('search', (_, text) => {
            if (text) {
                setSearchActive(true)
                return
            }
            setSearchActive(false)
        })


        return () => {
            // console.log('last effect has been cleared');
            clearInterval(timer)
            PubSub.unsubscribe(token)
        }
    }, [activeIndex])

    const _cClass = {
        true: 'carousel-container search-active',
        false: 'carousel-container'
    }

    return (
        <div className={_cClass[searchActive]}>
            <CarouselContent activeIndex={activeIndex} />
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
