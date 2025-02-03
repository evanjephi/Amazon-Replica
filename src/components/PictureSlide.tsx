import React, { useState } from 'react';
import './PictureSlide.css';
import books from '../assets/books.jpg';
import toys from '../assets/toys.jpg';
import kitchen from '../assets/kitchen.jpg';

const images = [
    books,
    toys,
    kitchen,
];

const PictureSlide: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="picture-slide-container">
            <div className="shop-message">
                You are on amazon.com. You can also shop on Amazon Canada for millions of products with fast local delivery. <a href="https://www.amazon.ca">Click here to go to amazon.ca</a>
            </div>
            <div className="picture-slide">
                <button className="nav-button" onClick={prevSlide}>❮</button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
                <button className="nav-button" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default PictureSlide;
