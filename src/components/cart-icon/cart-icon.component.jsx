import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg";

const CartIcon = () => {
    return (
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;