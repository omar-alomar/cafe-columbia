import React from 'react';
import pic0 from "./../../assets/img/pic0.JPG"
import pic1 from "./../../assets/img/pic1.JPG"
import pic2 from "./../../assets/img/pic2.JPG"
import pic3 from "./../../assets/img/pic3.JPG"
import pic4 from "./../../assets/img/pic4.JPG"
import pic5 from "./../../assets/img/pic5.JPG"


export default function Gallery() {
  const pics = [
    {
      id: 0,
      img: pic0
    },
    {
      id: 1,
      img: pic1
    },
    {
      id: 2,
      img: pic2
    },
    {
      id: 3,
      img: pic3
    },
    {
      id: 4,
      img: pic4
    },
    {
      id: 5,
      img: pic5
    },
  ]

  const picElement = pics.map((pic) => {
    return <img className="gallery__img" src={pic.img} key={pic.id} />
  })
  return (
    <>
      <div className="gallery">
        <h1>Gallery</h1>
        {picElement}
      </div>
    </>
  );
}
