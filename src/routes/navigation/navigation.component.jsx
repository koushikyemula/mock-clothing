import { Outlet, Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as MockLogo} from "../../assets/koushik_logo.svg"
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss"

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    console.log(currentUser)
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
                    <Link className="nav-link" to="/auth">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;