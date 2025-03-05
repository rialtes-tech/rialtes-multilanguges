import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

const CarouselComponent = ({
    carouselData,
    initialIndex = 0,
    customArrow,
    customDot,
    responsiveConfig,
    onChange,
    heading = "Default Heading",
    paragraph1 = "Default paragraph 1",
    paragraph2 = "Default paragraph 2",
}) => {
    const carouselRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const goToPrevious = () => {
        if (carouselRef.current) {
            const currentSlide = carouselRef.current.state.currentSlide;
            const prevSlide = currentSlide === 0 ? carouselData.length - 1 : currentSlide - 1;
            carouselRef.current.goToSlide(prevSlide);
        }
    };

    const goToNext = () => {
        if (carouselRef.current) {
            const currentSlide = carouselRef.current.state.currentSlide;
            const nextSlide = currentSlide === carouselData.length - 1 ? 0 : currentSlide + 1;
            carouselRef.current.goToSlide(nextSlide);
        }
    };

    const handleDotClick = (index) => {
        if (carouselRef.current) {
            carouselRef.current.goToSlide(index);
            setCurrentIndex(index);
        }
    };

    return (
        <section className="lg:mt-20 mt-5 px-6 xl:pl-[280px] md:pl-[100px] lg:pr-0">
            <h2 className="mb-10">{heading}</h2>
            <div className="flex justify-between lg:pr-72">
                <div className='lg:w-1/2'>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                </div>
                <div className="flex justify-center md:gap-5 lg:gap-10 gap-10">
                    {customArrow && (
                        <>
                            <CustomArrow arrowType="prev" onClick={goToPrevious} />
                            <CustomArrow arrowType="next" onClick={goToNext} />
                        </>
                    )}
                </div>
            </div>

            <Carousel
                ref={carouselRef}
                draggable={false}
                responsive={responsiveConfig}
                ssr={true}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                itemClass="carousel-item-padding-40-px"
                selectedItem={currentIndex}
                onChange={onChange}
                className='mt-10'
            >
                {carouselData.map((action) => (
                    <div
                        key={action.id}
                        className="border-2 p-5 lg:w-[95%] h-full  hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300"
                    >
                        <div>
                            <h4>{action.title}</h4>
                            <p className="mt-10">{action.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className="dots-container">
                {carouselData.map((_, index) => (
                    <CustomDot
                        key={index}
                        active={currentIndex === index}
                        index={index}
                        handleDotClick={handleDotClick}
                    />
                ))}
            </div>
        </section>
    );
};

// Custom Arrow Component
const CustomArrow = ({ onClick, arrowType }) => {
    return (
        <button
            onClick={onClick}
            className={`${arrowType === 'prev' ? 'left-0' : 'right-0'}`}
            style={{ zIndex: 10 }}
        >
            {arrowType === 'prev' ? (
                <Image loading="lazy" className="w-6 h-6" width={100} height={100} src="/images/homepage/left.png" alt="arrowleft" />
            ) : (
                <Image className="w-6 h-6" width={100} height={100} alt="arrowright" src="/images/homepage/right.png" />
            )}
        </button>
    );
};

// Custom Dot Component
const CustomDot = ({ active, index, handleDotClick }) => {
    return (
        <button
            onClick={() => handleDotClick(index)}
            className={`lg:w-20 w-10 h-[3px] mx-2 ${active ? 'bg-gray-500' : 'bg-gray-300'}`}
        ></button>
    );
};

export default CarouselComponent;
