import styles from './Card.module.css';
import { FaTrash } from "react-icons/fa";

function Card({ text, handleOnClick, idUser}) {

    
    function removeUser(){
        handleOnClick(idUser)
    }

    return(
        <div className={styles.card}>
            <p>{text}</p>
            <button onClick={removeUser}>{ <FaTrash /> }</button>
        </div>
   )
}

export default Card;