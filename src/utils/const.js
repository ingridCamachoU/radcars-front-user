export const settings = {
    dots: true,
    infinite: false,
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
                infinite: false,
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

export const marksCars = [
    { name: 'BMW', link: [] },
    { name: 'Renault', link: [] },
    { name: 'Ford', link: [] },
    { name: 'Chevrolet', link: [] },
    { name: 'Honda', link: [] },
    { name: 'Hyundai', link: [] },
    { name: 'Jeep', link: [] },
    { name: 'kia', link: [] },
    { name: 'Mazda', link: [] },
    { name: 'Mercedes', link: [] },
    { name: 'Nissan', link: [] },
    { name: 'Suzuki', link: [] },
    { name: 'Toyota', link: [] },
];
