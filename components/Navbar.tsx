import { FunctionComponent } from "react";
import { Props } from '../types/props'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
 
const Navbar: FunctionComponent<Props> = ({ children }) => {
    return ( 
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                                <span className={styles.logo}>
                                <FontAwesomeIcon icon={faHome} />
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                       <Link href="#"><a>O nas</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Posłuchaj</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Galeria</a></Link>
                    </li>
                    <li>
                        <Link href="#"><a>Kontakt</a></Link>
                    </li>
                </ul>
                <ul>
                    <li>Youtube</li>
                    <li>facebook</li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navbar;