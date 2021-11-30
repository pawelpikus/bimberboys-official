import { Props } from '../types/props'
import { Navbar, Footer, CTA } from '../components'
import styles from '../styles/Home.module.scss'

const Layout = ({ children }: Props) =>{
    return (
        <div className={styles.container}>
            <Navbar />
            {children}
            <CTA />
            <Footer />
        </div>
    )
}

export default Layout