import { Outlet, Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as MockLogo} from "../../assets/logo.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import "./navigation.styles.scss"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-selector";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const {isCartOpen} = useContext(CartContext)
    
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <MockLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                    SHOP
                    </Link>
                    { currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) : (
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                    {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;