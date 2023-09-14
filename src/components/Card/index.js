import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';

function Card({ id, name, image_url }) {
    return (
        <div className={styles.container}>
            <img src={image_url} alt={name} className={styles.capa} />
            <h2>{name}</h2>
            <img src={iconeFavoritar}
                alt="Favoritar filme"
                className={styles.favoritar} />
        </div>

    )
}

export default Card;