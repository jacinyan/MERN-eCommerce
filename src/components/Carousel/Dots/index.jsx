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

const Dots = ({activeIndex}) => {
    return (
        <div className="all-dots">
            {slides.map((slide, index) => {
                <span 
                key={index} 
                className={`${activeIndex === index? 'dot active-dot' : 'dot'}`}
                onClick={e => onclick((e.target.value = index))}
                >
                   
                </span>
            })} 
        </div>
    )
}

export default Dots
