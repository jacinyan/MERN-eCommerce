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

const Content = ({ activeIndex }) => {
    return (
        <section>
            {slides.map((slide, index) =>
                <div
                    key={index}
                    className={index === activeIndex ? 'slides active' : 'inactive'}
                >
                    <img className='slide-image' src={slide.url} alt='' />
                    <h3 className='slide-title'>{slide.title}</h3>
                    <p className='slide-text'>{slide.description}</p>
                </div>
            )}
        </section>
    )
}

export default Content
