
// // const GallerySection = () => {
// //     {/* Add medium sized images and make them scroll horizontally on scroll until all images completion, and then move to next section, by adding animations and growing of images */ }
// //     return (
// //         <div className="gallery-section" id='gallery'>
// //             <div className="container mt-4">
// //                 <div className="row">
// //                     <div className="col-12">
// //                         <h2 className="section-title">Gallery</h2>
// //                     </div>
// //                 </div>
// //                 <div className="row">
// //                     <div className="col-12">
// //                         <div className="gallery">
// //                             <div className="gallery-item">
// //                                 <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// //                             </div>
// // <div className="gallery-item">
// //     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// // </div>
// // <div className="gallery-item">
// //     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// // </div>
// // <div className="gallery-item">
// //     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// // </div>
// // <div className="gallery-item">
// //     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// // </div>
// // <div className="gallery-item">
// //     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// // </div>
// // <div className="gallery-item">
// //     <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// // </div>
// //                             <div className="gallery-item">
// //                                 <img src="https://picsum.photos/seed/picsum/200/300" alt="1" />
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

import { useState } from "react";

// // export default GallerySection;

import '../assets/css/GallerySection.css';
// import { useSpring, animated } from 'react-spring';

const Gallery = () => {
    const images = [
        { id: 1, src: 'https://pixel2023.com/images/gallery6.jpg', alt: 'Image 1' },
        { id: 2, src: 'https://pixel2023.com/images/gallery7.jpg', alt: 'Image 2' },
        { id: 3, src: 'https://pixel2023.com/images/gallery8.jpg', alt: 'Image 3' },
        { id: 4, src: 'https://pixel2023.com/images/gallery4.jpg', alt: 'Image 1' },
        { id: 5, src: 'https://picsum.photos/seed/picsum/500/300', alt: 'Image 2' },
        { id: 6, src: 'https://picsum.photos/seed/picsum/500/300', alt: 'Image 3' },
        { id: 7, src: 'https://picsum.photos/seed/picsum/500/300', alt: 'Image 1' },
        { id: 8, src: 'https://picsum.photos/seed/picsum/500/300', alt: 'Image 2' },
        { id: 9, src: 'https://picsum.photos/seed/picsum/500/300', alt: 'Image 3' },
        // Add more images as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div style={{ marginBottom: '40px' }} className="carousel">
            <h2 style={{ fontSize: '2.8rem', textAlign: 'center' }}>Gallery</h2>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        style={{ opacity: index === currentIndex ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" onClick={goToPrevSlide}>
                &lt;
            </button>
            <button className="carousel-control next" onClick={goToNextSlide}>
                &gt;
            </button>
            <div className="indicators">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;