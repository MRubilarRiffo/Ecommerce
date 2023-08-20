import styles from './SearchBar.module.css';
import { Logo } from '../Logo/Logo';
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../Redux/actions';

const SearchBar = ({ setSearchOn }) => {
    const containerInRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const handleChange = ({ target: { value } }) => {
       setSearch(value);
    };

    const handleKeyPress = ({ key }) => {
		if (key === "Enter") {
			handleSubmit();
		};
	};

    const handleSubmit = () => {
        if (search !== '') {
            setSearchOn(false)
            dispatch(getAllProducts(search));
            navigate('/productos');
        };
    };

    const handleClose = () => {
        setSearchOn(false);
        console.log("CLOSE");
    };

    const handleBackgroundClick = ({ target }) => {
        if (containerInRef.current && !containerInRef.current.contains(target)) {
            handleClose();
        };
    };

    return (
        <div
            id={styles.container_SearchBar}
            onClick={handleBackgroundClick}
        >
            <div
                id={styles.SearchBar}
                ref={containerInRef}
            >
                <button
                    id={styles.close}
                    onClick={handleClose}
                >
                    <IoMdClose />
                </button>
                <div id={styles.logo}>
                    <Logo />
                </div>
                <div id={styles.search_input_button}>
                    <input
                        id={styles.input_SearchBar}
                        type="text"
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        placeholder='Buscar Productos...'
                        value={search}
                    />
                    <button
                        id={styles.search}
                        onClick={handleSubmit}
                    >
                        <IoMdSearch />
                    </button>
                </div>
            </div>
        </div>
    );
};

export { SearchBar };