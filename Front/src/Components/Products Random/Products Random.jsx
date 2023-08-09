import styles from './Products Random.module.css';
import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getProductsRandom } from '../../Redux/actions';
import { Card } from '../Card/Card';
import { Loading } from '../Loading/Loading';

const Products_Random = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsRandom());
	}, []);
	
	const products = useSelector(state => state.products_random);

	return (
		<div>
			<h2>PUEDE QUE TE GUSTEN</h2>
			{
				products.length > 0
					? <div className={styles.container_card}>
						{products.map((props, index) => <Card key={index} props={props} />)}
					</div>
					: <Loading />
			}
		</div>
	);
};

export { Products_Random };