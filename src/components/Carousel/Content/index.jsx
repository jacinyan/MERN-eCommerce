import React from 'react'

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

const Content = ({activeIndex }) => {
    return (
        <section>
            {slides.map((slide, index) => 
            <div
                key={index}
                className={index === activeIndex ? "slides active" : inactive}>
                <img className='slide-image' src={slide.url} alt='' />
                <h3 className='slide-title'>{slide.title}</h3>
                <p className='slide-next'>{slide.description}</p>
            </div>
            )}
        </section>
    )
}

export default Content
