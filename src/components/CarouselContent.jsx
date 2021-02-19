import React from 'react'
import {slides} from 'utils/sliderImages'

const Content = ({ activeIndex }) => {
    return (
        <section>
            {slides.map((slide, index) =>
                <div
                    key={index}
                    className={index === activeIndex ? 'slide active' : 'slide inactive'}
                >
                    <img className='slide-image' src={slide.url} alt='' />
                    <div className='slide-title'>React Caps</div>
                    <p className='slide-text'>{slide.description}</p>
                </div>
            )}
        </section>
    )
}

export default Content
