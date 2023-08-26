import styles from './All Products.module.css';
import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import { Loading } from '../Loading/Loading';

const All_Products = () => {
    const products = useSelector(state => state.all_products);
    console.log(products?.data);
    return (
        <div>
            Productos
            {
                products?.data?.length > 0
                    ? products.data.map(props => <Card props={props} />)
                    : <Loading />
            }
        </div>
    );
};

export { All_Products };