import styles from './Slide.module.css';
import Carousel from "react-multi-carousel";

import img1 from '../../assets/Slide/cp5AMPjg3SLqkuCzT36qBiViiLpanaEpR38KyJlV.jpg';
import img2 from '../../assets/Slide/S6oFojiNXYQCBvhwqU58fvdhTUWJaju75Awp5HdY.jpg';
import img3 from '../../assets/Slide/yGvjpNtwOzetvVggs23G4ZySMt2CpShLMPH4Fdlu.jpg';
import img4 from '../../assets/Slide/zvRm5yJ3hJUA49iCN3RfrRYwhxfcGC4ierXWnOnY.jpg';

const Slide = () => {
    
    return (
        <div id={styles.carousel}>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 0
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
            </Carousel>
        </div>
    );
};

export { Slide };