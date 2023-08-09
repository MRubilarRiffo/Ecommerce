import { useState } from 'react';
import styles from './Icon NavBar.module.css';
import { IoPersonOutline, IoSearchOutline, IoHeartOutline, IoCartOutline } from 'react-icons/io5';
import { SearchBar } from '../../Components/SearchBar/SearchBar';

const Icon_NavBar = () => {
    const [searchOn, setSearchOn] = useState(false);

    return (
        <>
            <div id={styles.container_icon}>
                <IoPersonOutline />
                <IoSearchOutline onClick={() => setSearchOn(!searchOn)}/>
                <IoHeartOutline />
                <IoCartOutline />
            </div>
            {searchOn && <SearchBar setSearchOn={setSearchOn} />}
        </>
    );
};

export { Icon_NavBar };