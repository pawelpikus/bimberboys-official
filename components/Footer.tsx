import styles from '../styles/Home.module.scss'
import { FunctionComponent } from 'react'
import { Props } from '../types/props'

const Footer: FunctionComponent<Props> = ({ children }) =>{
    return (
        <footer className={styles.footer}>
            <p>© 2022 by Bimber Boys. Proudly created by Pawel Pikus</p>
        { children }
      </footer>
    )
}

export default Footer