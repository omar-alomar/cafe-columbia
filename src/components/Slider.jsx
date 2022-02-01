import React, { useState } from 'react';
import Pic0 from "./../assets/img/pic0.JPG";
import Pic1 from "./../assets/img/pic1.JPG";
import Pic2 from "./../assets/img/pic2.JPG";
import Pic3 from "./../assets/img/pic3.JPG";
import Pic4 from "./../assets/img/pic4.JPG";
import Pic5 from "./../assets/img/pic5.JPG";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const sliderData = [
    {id: 0,
    img: Pic0,
    },
    {id: 1,
    img: Pic1,
    },
    {id: 2,
    img: Pic2,
    },
    {id: 3,
    img: Pic3,
    },
    {id: 4,
    img: Pic4,
    },
    {id: 5,
    img: Pic5,
    },
]


export default function Slider() {
    const [current, setCurrent] = useState(0);
    const length = sliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1  : current - 1);
    }

    const sliderElement = sliderData.map((slide) => {
        return (
            <div key={slide.id} className={slide.id === current ? 'slide active' : 'slide'}>
                {
                    slide.id === current && (
                    <img src={slide.img} key={slide.id} className="slider__img" alt=""/>
                    )
                }
            </div>
        )
    })
  return (
      <>
        <div className="slider">
            <ArrowForwardIcon className="slider__arrow slider__arrow--right" onClick={nextSlide}/>
            <ArrowBackIcon className="slider__arrow slider__arrow--left" onClick={prevSlide} />
            {sliderElement}
        </div>
      </>
  );
}
