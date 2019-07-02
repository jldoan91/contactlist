import React from 'react';
import styles from './header.css';

const Header = class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.header}>
                <h1>Contact List App</h1>
            </div>
        )
    }
}

export default Header;