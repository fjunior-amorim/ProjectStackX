import styles from './Button.module.css';

function Button({ icon, handleOnClick }) {

    return(
        <button 
        className={styles.btn}
        onClick={handleOnClick}>
        {icon}</button>    
    )
}

export default Button;