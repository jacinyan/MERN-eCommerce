import React from 'react'

const slides = [
    {
        title: '1slide',
        description: '1st slide',
        url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg'
    },
    {
        title: '2slide',
        description: '2nd slide',
        url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg'
    },
    {
        title: '3slide',
        description: '3rd slide',
        url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(132).jpg'
    },
    {
        title: '4slide',
        description: '4th slide',
        url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg'
    },

]

const Dots = (props) => {
    return (
        <div className='all-dots'>
            {slides.map((slide, index) => (
                <span
                    key={index}
                    className={`${props.activeIndex === index ? 'dot active-dot' : 'dot'}`}
                    onClick={e => props.onclick((e.target.value = index))}
                ></span>
            )
            )}
        </div>
    )
}

export default Dots
