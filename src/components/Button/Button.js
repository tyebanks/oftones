// src/components/Card/Card.js

import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './Button.module.scss'

const Button = ({ text, onClick, to }) => {
    if (to) {
        return (
            <Link to={to} className={styles.btn}>
                {text}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={styles.btn}>
            {text}
        </button>
    )
}

export default Button
