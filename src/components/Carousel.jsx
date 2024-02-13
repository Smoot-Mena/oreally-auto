import { useEffect, useState } from "react";
import "../styles/Carousel.css";

const Carousel = ( {children, show} ) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    const [touchPosition, setTouchPosition] = useState(null);

    const handleTouchStart = (event) => {
        const touchDown = event.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (event) => {
        const touchDown = touchPosition;

        if(touchDown === null) {
            return;
        }

        const currentTouch = event.touches[0].clientX;
        const difference = touchDown - currentTouch;

        if (difference > 5) {
            next();
        } else if (difference < -5) {
            back();
        }

        setTouchPosition(null);
    };

    const back = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    };

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    };

    useEffect(() => {
        setLength(children.length);
    }, [children]);

    return ( 
        <section className="carousel-container">
            <section className="carousel-wrapper">
                { currentIndex > 0 && <button className="left-arrow" onClick={back}>❰</button>}
                <section className="carousel-content-wrapper" 
                onTouchStart={handleTouchStart} 
                onTouchMove={handleTouchMove}>
                    <section className={`carousel-content show-${show}`}
                    style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
                        {children}
                    </section>
                </section>
                { currentIndex < (length - 1) && <button className="right-arrow" onClick={next}>❱</button>}
            </section>
        </section>
    );
}
 
export default Carousel;