import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as MockLogo} from "../../assets/koushik_logo.svg"
import "./navigation.styles.scss"

const Navigation = () => {
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
                    <Link className="nav-link" to="/sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;