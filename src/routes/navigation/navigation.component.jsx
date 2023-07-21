import { Outlet, Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as MockLogo} from "../../assets/koushik_logo.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <MockLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                    Shop
                    </Link>
                    { currentUser ? (<span className="nav-link" onClick={signOutUser}>Sign Out</span>) : (
                    <Link className="nav-link" to="/auth">
                        Sign In
                    </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                <CartDropdown/>
            </div>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;