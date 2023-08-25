import styles from './Details.module.css';
import { RESET_DETAILS, RESET_STOCK_DETAILS } from '../../Redux/actions-type';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, getStockDetails } from '../../Redux/actions';
import { Loading } from '../../Components/Loading/Loading';
import { Details_Images } from '../../Components/Details Images/Details Images';
import { Details_Props } from '../../Components/Details Props/Details Props';

const Details = () => {
    const dispatch = useDispatch();
    const { sku } = useParams();

    const product = useSelector(state => state.details[0]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getDetails(sku));
        dispatch(getStockDetails(sku));
        return () => {
            dispatch({ type: RESET_DETAILS });
            dispatch({ type: RESET_STOCK_DETAILS });
        };
    }, [])
    
    return (
        <div id={styles.Details}>
            {
                !product
                    ? <Loading />
                    : <>
                        <Details_Images />
                        <Details_Props />
                    </>
            }
        </div>
    );
};

export { Details };