import React, { useState, useEffect } from 'react'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderData = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Adeola Babajide",
            review: "Autemus excels in crafting dynamic websites. Their innovative designs and user-friendly interfaces ensure a top-notch online presence for any business."
        },
        {
            id: 2,
            image: "https://img.freepik.com/free-photo/black-man-posing_23-2148171639.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=ais",
            name: "Joshua Okonkwo",
            review: "Autemus excels in crafting dynamic websites. Their innovative designs and user-friendly interfaces ensure a top-notch online presence for any business."
        },
        {
            id: 3,
            image: "https://img.freepik.com/free-photo/portrait-young-beautiful-african-girl-dark-wall_176420-5818.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=ais",
            name: "Doshima Hassan",
            review: "Autemus excels in crafting dynamic websites. Their innovative designs and user-friendly interfaces ensure a top-notch online presence for any business."
        },   
        {
          id: 4,
          image: "https://img.freepik.com/free-photo/sideways-black-person-looking-away_23-2148749548.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=ais",
          name: "Okoye Abel",
          review: "Autemus excels in crafting dynamic websites. Their innovative designs and user-friendly interfaces ensure a top-notch online presence for any business."
      },
        {
          id: 5,
          image: "https://img.freepik.com/free-photo/young-beautiful-african-girl-smiling-dark-wall_176420-5819.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=ais",
          name: "Bolanle Adegoke",
          review: "Autemus excels in crafting dynamic websites. Their innovative designs and user-friendly interfaces ensure a top-notch online presence for any business."
      }   
    ]    

      useEffect(() => {
        const slideInterval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
        }, 3000);
    
        return () => {
          clearInterval(slideInterval);
        };
      }, [sliderData]);
    
      const visibleSlides = [
        sliderData[(currentSlide - 1 + sliderData.length) % sliderData.length],
        sliderData[currentSlide],
        sliderData[(currentSlide + 1) % sliderData.length]
      ];
    
      // const visibleSlides = sliderData.slice(currentSlide, currentSlide + 3);
    
      return (
        <div className="slider">
           {visibleSlides.map((slide) => (
        <div key={slide.id} className="slide">
              <img src={slide.image} alt={slide.name} />
              <div>
              <h4>{slide.name}</h4>
              <p>{slide.review}</p>
              </div>   
            </div>
          ))}
        </div>
      );
};

export default Slider