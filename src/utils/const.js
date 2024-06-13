export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

import bmw from '../assets/marksCars/bmw.svg';
import renault from '../assets/marksCars/renault.svg';
import ford from '../assets/marksCars/ford.svg';
import chevrolet from '../assets/marksCars/chevrolet.svg';
import honda from '../assets/marksCars/honda.svg';
import hyundai from '../assets/marksCars/hyundai.svg';
import jeep from '../assets/marksCars/jeep.svg';
import kia from '../assets/marksCars/kia.svg';
import mazda from '../assets/marksCars/mazda.svg';
import mercedes from '../assets/marksCars/mercedes.svg';
import nissan from '../assets/marksCars/nissan.svg';
import suzuki from '../assets/marksCars/suzuki.svg';
import toyota from '../assets/marksCars/toyota.svg';

export const marksCars = [
    { name: 'BMW', img: bmw, id: 1 },
    { name: 'Renault', img: renault, id: 2 },
    { name: 'Ford', img: ford, id: 3 },
    { name: 'Chevrolet', img: chevrolet, id: 4 },
    { name: 'Honda', img: honda, id: 5 },
    { name: 'Hyundai', img: hyundai, id: 6 },
    { name: 'Jeep', img: jeep, id: 7 },
    { name: 'Kia', img: kia, id: 8 },
    { name: 'Mazda', img: mazda, id: 9 },
    { name: 'Mercedes', img: mercedes, id: 10 },
    { name: 'Nissan', img: nissan, id: 11 },
    { name: 'Suzuki', img: suzuki, id: 12 },
    { name: 'Toyota', img: toyota, id: 13 },
];
