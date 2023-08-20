import styles from './Details.module.css';
import { RESET_DETAILS } from '../../Redux/actions-type';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../Redux/actions';
import { Loading } from '../Loading/Loading';
import { formatPrice } from '../../Functions/formatPrice';

const Details = () => {
    const dispatch = useDispatch();
    const { sku } = useParams();

    useEffect(() => {
        dispatch(getDetails(sku));
        return () => dispatch({ type: RESET_DETAILS });
    }, [])

    const product = useSelector(state => state.details[0]);

    // brand, category, color, createdAt, currentPrice, 
    // discount, gender, id, image, name, 
    // on_model_measurement, sku, slug, sport, 
    // standard_price, variation_list

    const gender = {
        'M': 'Hombre',
        'w': 'Mujer',
        'U': 'Unisex'
    };

    if (!product) return <Loading />;

    const price = () => {
        if (product?.discount > 0) {
            return (
                <>
                    <span className={styles.standard_price} >
                        {formatPrice(product?.standard_price)}
                    </span>
                    &nbsp;
                    <span className={styles.offer_price} >
                        {formatPrice(product?.currentPrice)}
                    </span>
                </>
            );
        };
        return <span className={styles.price} >{formatPrice(product?.currentPrice)}</span>;
    };


    return (
        <div id={styles.Details}>            
            <div id={styles.images}>
                {
                    product?.image?.map((img, index) =>
                        <img
                            key={`image-${index}`}
                            src={img} alt=""
                            loading="lazy"
                            id={styles.responsive_img}
                        />
                    )
                }
            </div>
            <div id={styles.props}>
                <div>
                    {`${gender[product?.gender]} • ${product?.sport.join(' • ')}`}
                </div>
                <div>
                    {product?.name}
                </div>
                <div>
                    {price()}
                </div>
            </div>
        </div>
    );
};

export { Details };