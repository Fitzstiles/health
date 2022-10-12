import Link from "next/link";
import classes from './Navbar.module.css'
import { BsArrowRight } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className={classes.container}>
            <div className={classes.logo}>
                <Link href='/'>
                    <p>Health<span>.clinic</span></p>
                </Link>
            </div>
            <div className={classes.links}>
                <Link href='/about'>Home</Link>
                <Link href='/contact'>Doctor</Link>
                <Link href='/contact'>Service</Link>
                <Link href='/contact'>About us</Link>
                <Link href='/contact'>Contact us</Link>
            </div>
            <div className={classes.register}>
                <Link href='/'>
                    <a>Register</a>
                </Link>
                <BsArrowRight />
            </div>

        </nav>
    );
}

export default Navbar;