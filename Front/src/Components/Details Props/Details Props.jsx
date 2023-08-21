import styles from './Details Props.module.css';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../Functions/formatPrice';

const Details_Props = () => {
    const product = useSelector(state => state.details[0]);

    const gender = {
        'M': 'Hombre',
        'w': 'Mujer',
        'U': 'Unisex'
    };

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
        return (
            <span className={styles.price} >
                {formatPrice(product?.currentPrice)}
            </span>
        );
    };

    return (
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
            <div>
                Tallas
            </div>
        </div>
    );
};

export { Details_Props };