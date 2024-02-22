import styles from '../components/button.module.css'
import propTypes from 'prop-types'

export const Button = ({
    label,
    backgroundColor = 'blue',
    color = '#ffffff',
    size = 'medium'
}) => {

    const btnSizeMap = {
        small: '4px 8px',
        medium: '6px 10px',
        large: '8px 12px',
    }
    
    return (
        <button
            className={styles.btn}
            style={{
                color,
                backgroundColor,
                padding: btnSizeMap[size]
            }}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    label: propTypes.string.isRequired,
    color: propTypes.string,
    backgroundColor: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
    label: 'Click me!',
    backgroundColor: '#288cca',
    color: '#fff',
    size: 'medium'
}