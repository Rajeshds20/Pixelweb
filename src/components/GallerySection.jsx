
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

// import Img1 from '../assets/img/gallery/gallery6.png';
// import Img2 from '../assets/img/gallery/DSC_0215.JPG';
// import Img3 from '../assets/img/gallery/DSC_0288.JPG';
// import Img5 from '../assets/img/gallery/gallery4.png';
// import Img6 from '../assets/img/gallery/gallery7.png';
// import Img7 from '../assets/img/gallery/gallery8.png';
// import Img8 from '../assets/img/gallery/IMG_20230329_131447.jpg';
// import Img9 from '../assets/img/gallery/IMG_20230329_131754.jpg';
// import Img10 from '../assets/img/gallery/PXL_20230328_151525300.jpg';


// import { useSpring, animated } from 'react-spring';

const Gallery = () => {
    const images = [
        { id: 1, src: 'gallery6.png', alt: 'Image 1' },
        { id: 2, src: 'DSC_0215.JPG', alt: 'Image 2' },
        { id: 3, src: 'DSC_0288.JPG', alt: 'Image 3' },
        { id: 5, src: 'gallery4.png', alt: 'Image 5' },
        { id: 6, src: 'gallery7.png', alt: 'Image 6' },
        { id: 7, src: 'gallery8.png', alt: 'Image 7' },
        { id: 8, src: 'IMG_20230329_131447.jpg', alt: 'Image 8' },
        { id: 9, src: 'IMG_20230329_131754.jpg', alt: 'Image 9' },
        { id: 10, src: 'PXL_20230328_151525300.jpg', alt: 'Image 10' },
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