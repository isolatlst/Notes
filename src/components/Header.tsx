import logo from '../logo.svg'
import classes from '../styles/Header.module.scss'
import {Modal, useModal} from "./Modal";


const Header = () => {
    const {isOpen, toggle} = useModal()
    return (
        <header className={classes.header}>
            <div className={`${classes.header__logo} ${classes.header__logo_spin}`}>
                <img src={logo}  alt="logo"/>
            </div>
            <div className={classes.header__title}>
                Notes
            </div>
            <div className={classes.header__addNote}>
                <Modal isOpen={isOpen} toggleIsOpen={toggle}/>
                <button onClick={toggle}>New note</button>
            </div>
            <div className={classes.header__searchNote}>
                <input type="text" placeholder='search'/>
            </div>
            {/*<NavLink to='/auth' className={classes.link}>*/}
            {/*    Autorhize*/}
            {/*</NavLink>*/}
        </header>
    );
}


export default Header;