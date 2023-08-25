import styles from './Details Props.module.css';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../Functions/formatPrice';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const Details_Props = () => {
    const product = useSelector(state => state.details[0]);
    const stock = useSelector(state => state.stock_details);

    const gender = {
        'M': 'Hombre',
        'W': 'Mujer',
        'U': 'Unisex'
    };

    const [ countQuantity, setCountQuantity ] = useState({});

    const handleClick = ({ size, quantity }) => {
        setCountQuantity({ size, quantity })
    };

    const handleAddToCart = () => {
        if (typeof countQuantity === 'string') return
        if (Object.keys(countQuantity).length === 0) setCountQuantity('Por favor, selecciona tu talla');
        
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
            <div className={styles.name}>
                <span>{product?.name.toUpperCase()}</span>
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
                        typeof countQuantity === 'string'
                            ? <p>{countQuantity}</p>
                            : countQuantity.quantity < 6 &&
                                <p>{`Solo quedan ${countQuantity.quantity} en nuestros almacenes`}</p>
                    }
                </div>
            </div>
            <div className={styles.container_add_to_cart_x_fav}>
                <div className={styles.add_to_cart}>
                    <button
                        type='button'
                        onClick={handleAddToCart}
                    >
                        <span>AÑADIR AL CARRITO</span>
                    </button>
                </div>
                <div className={styles.fav}>
                    <button type='button'>
                        <span><AiOutlineHeart /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { Details_Props };