import styles from './Details.module.css';
import { RESET_DETAILS } from '../../Redux/actions-type';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../Redux/actions';
import { Loading } from '../../Components/Loading/Loading';
import { Details_Images } from '../../Components/Details Images/Details Images';
import { Details_Props } from '../../Components/Details Props/Details Props';

const Details = () => {
    const dispatch = useDispatch();
    const { sku } = useParams();

    const product = useSelector(state => state.details[0]);
    
    useEffect(() => {
        dispatch(getDetails(sku));
        return () => dispatch({ type: RESET_DETAILS });
    }, [sku])

    // brand, category, color, createdAt, currentPrice, 
    // discount, gender, id, image, name, 
    // on_model_measurement, sku, slug, sport, 
    // standard_price, variation_list

    if (!product) return <Loading />;
    
    return (
        <div id={styles.Details}>
            <Details_Images />
            <Details_Props />
        </div>
    );
};

export { Details };