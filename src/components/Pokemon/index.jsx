import styles from './styles.module.css'

export const Pokemon = ( {name = 'Pikachu'} ) => (
   <h2 className={styles.name}>{name}</h2>
  )
  

 