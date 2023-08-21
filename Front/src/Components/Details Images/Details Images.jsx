import { useSelector } from 'react-redux';
import styles from './Details Images.module.css';
import { useState } from 'react';

const Details_Images = () => {

    const { image } = useSelector(state => state.details[0]);

    const [imageToShow, setImageToShow] = useState(4);

    const handleShowMore = () => {
        setImageToShow(prev => prev + 2);
    };

    const handleShowLess = () => {
        setImageToShow(4);
    };

    return (
        <div id={styles.images}>
            {
                image?.slice(0, imageToShow).map((img, index) =>
                    <img
                        key={`image-${index}`}
                        src={img}
                        alt=""
                        loading="lazy"
                        className={styles.responsive_img}
                    />
                )
            }
            {   
                image?.length > 4 && (
                    imageToShow < image?.length 
                        ? <button onClick={handleShowMore}>MOSTRAR MÁS v</button>
                        : <button onClick={handleShowLess}>MOSTRAR MENOS ^</button>
                )
            }
        </div>
    );
};

export { Details_Images }