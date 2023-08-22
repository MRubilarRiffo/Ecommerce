import styles from './Details Props.module.css';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../Functions/formatPrice';
import { useState } from 'react';

const Details_Props = () => {
    const product = useSelector(state => state.details[0]);
    const stock = useSelector(state => state.stock_details);

    const gender = {
        'M': 'Hombre',
        'w': 'Mujer',
        'U': 'Unisex'
    };

    const [ countQuantity, setCountQuantity ] = useState({});

    const handleClick = ({ size, quantity }) => {
        console.log(quantity);
        setCountQuantity({ size, quantity })
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
                Tallas:
                <div className={styles.stock}>
                    {
                        stock.map((c, index) => (
                            <button
                                className={
                                    c.quantity === 0
                                        ? styles.disabled_button
                                        : countQuantity.size === c.size
                                            ? styles.button_focus
                                            : styles.button_no_focus
                                }
                                type='button'
                                key={`stock-${index}`}
                                onClick={() => handleClick(c)}
                            >
                                <span >{c.size}</span>
                            </button>
                        ))
                    }
                </div>
                <div>
                    {
                        countQuantity.quantity < 6 &&
                            <p>{`Solo quedan ${countQuantity.quantity} en nuestros almacenes`}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export { Details_Props };