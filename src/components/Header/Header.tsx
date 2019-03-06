import * as React from 'react'
import classNames from 'classnames';

const styles = classNames.bind(require('./Header.css'));

const Header = () => {
    return (
        <div className={styles('content')}>
            <h1>Nick Krantz</h1>
        </div>
    )
}

export default Header