import React from 'react'
import {slides} from 'utils/sliderImages'


const Dots = ({activeIndex, onClick}) => {
    return (
        <div className='dots-group'>
            {slides.map((_, index) => (
                <span
                    key={index}
                    className={activeIndex === index ? 'dot active' : 'dot'}
                    onClick={() => onClick(index)}
                ></span>
            )
            )}
        </div>
    )
}

export default Dots
