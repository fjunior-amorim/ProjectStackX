import styles from './Input.module.css';

function Input({ type, name, placeholder, handleOnChange, value }) {
    return(
        <input className={styles.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value} 
        />  
    )
}

export default Input;