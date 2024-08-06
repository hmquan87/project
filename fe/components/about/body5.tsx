// 'use client';


// import React from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export function Body5() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     };
//     return (
//         <div className="slider-container">
//             <Slider {...settings}>
//                 <div>
//                     <h3>1</h3>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//                 <div>
//                     <h3>3</h3>
//                 </div>
//                 <div>
//                     <h3>4</h3>
//                 </div>
//                 <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div>
//                 <div>
//                     <h3>7</h3>
//                 </div>
//                 <div>
//                     <h3>8</h3>
//                 </div>
//                 <div>
//                     <h3>9</h3>
//                 </div>
//             </Slider>
//         </div>
//     );
// }




import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const Body5: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};
