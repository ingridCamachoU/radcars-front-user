import LayoutBase from '../../layout/LayoutBase';

const vehicleCars = [
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

const HomeIndex = () => {
    return (
        <LayoutBase>
            <div className="min-h-full">
                <h1>inicio</h1>
            </div>
        </LayoutBase>
    );
};

export default HomeIndex;
