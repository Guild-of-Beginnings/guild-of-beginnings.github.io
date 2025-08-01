import propTypes from 'prop-types';

import NavBar from './NavBar';

export default function Banner(props) {
    return (
        <>
            <header className="row mb-4" style={{ position: 'relative' }}>
                <NavBar />
            </header>
        </>
    );
}

Banner.propTypes = {
    headerText: propTypes.string.isRequired
};